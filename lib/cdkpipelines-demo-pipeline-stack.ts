import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
import { ManualApprovalAction } from '@aws-cdk/aws-codepipeline-actions';
import { Construct, SecretValue, Stack, StackProps, Stage, StageProps } from '@aws-cdk/core';
import { CdkPipeline, CodePipeline, CodePipelineSource, ShellStep, SimpleSynthAction } from "@aws-cdk/pipelines";
import { CdkpipelinesDemoStage } from './cdkpipelines-demo-stage';
import { CdkpipelinesDemoStage2 } from './cdkpipelines-demo-stage2';

export class MyPipelineDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const sourceArtifact = new codepipeline.Artifact();
    const cloudAssemblyArtifact = new codepipeline.Artifact();

    const pipeline = new CdkPipeline(this, 'Pipeline', {
      pipelineName: 'MyAppPipeline',
      cloudAssemblyArtifact,

      sourceAction: new codepipeline_actions.GitHubSourceAction({
        actionName: 'GitHub',
        output: sourceArtifact,
        oauthToken: SecretValue.secretsManager('github-token'),
        trigger: codepipeline_actions.GitHubTrigger.POLL,
        // Replace these with your actual GitHub project info
        owner: 'DSaenz10',
        repo: 'cdkpipelinerepodemo',
        branch: 'main'
      }),

      synthAction: SimpleSynthAction.standardNpmSynth({
        sourceArtifact,
        cloudAssemblyArtifact,

        // Use this if you need a build step (if you're not using ts-node
        // or if you have TypeScript Lambdas that need to be compiled).
        buildCommand: 'npm run build',
      }),
    });
    
    const testingStage = pipeline.addApplicationStage(new CdkpipelinesDemoStage(this, 'Testing', {
      env: { account: '965055704747', region: 'us-east-1' }
    }));
    
    testingStage.addActions(new ManualApprovalAction({
        actionName: 'ManualApproval',
        runOrder: testingStage.nextSequentialRunOrder(),
    }));
    
  }
}