"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPipelineDemoStack = void 0;
const codepipeline = require("@aws-cdk/aws-codepipeline");
const codepipeline_actions = require("@aws-cdk/aws-codepipeline-actions");
const core_1 = require("@aws-cdk/core");
const pipelines_1 = require("@aws-cdk/pipelines");
const cdkpipelines_demo_stage_1 = require("./cdkpipelines-demo-stage");
const cdkpipelines_demo_stage2_1 = require("./cdkpipelines-demo-stage2");
class MyPipelineDemoStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const sourceArtifact = new codepipeline.Artifact();
        const cloudAssemblyArtifact = new codepipeline.Artifact();
        const pipeline = new pipelines_1.CdkPipeline(this, 'Pipeline', {
            pipelineName: 'MyAppPipeline',
            cloudAssemblyArtifact,
            sourceAction: new codepipeline_actions.GitHubSourceAction({
                actionName: 'GitHub',
                output: sourceArtifact,
                oauthToken: core_1.SecretValue.secretsManager('github-token'),
                trigger: codepipeline_actions.GitHubTrigger.POLL,
                // Replace these with your actual GitHub project info
                owner: 'DSaenz10',
                repo: 'cdkpipelinerepodemo',
                branch: 'main'
            }),
            synthAction: pipelines_1.SimpleSynthAction.standardNpmSynth({
                sourceArtifact,
                cloudAssemblyArtifact,
                // Use this if you need a build step (if you're not using ts-node
                // or if you have TypeScript Lambdas that need to be compiled).
                buildCommand: 'npm run build',
            }),
        });
        const testingStage = pipeline.addApplicationStage(new cdkpipelines_demo_stage_1.CdkpipelinesDemoStage(this, 'Testing', {
            env: { account: '965055704747', region: 'us-east-1' }
        }));
        const testingStage2 = pipeline.addApplicationStage(new cdkpipelines_demo_stage2_1.CdkpipelinesDemoStage2(this, 'Testing-in-another-account', {
            env: { account: '404277375051', region: 'us-east-1' }
        }));
    }
}
exports.MyPipelineDemoStack = MyPipelineDemoStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrcGlwZWxpbmVzLWRlbW8tcGlwZWxpbmUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGtwaXBlbGluZXMtZGVtby1waXBlbGluZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBMEQ7QUFDMUQsMEVBQTBFO0FBRTFFLHdDQUE2RjtBQUM3RixrREFBaUg7QUFDakgsdUVBQWtFO0FBQ2xFLHlFQUFvRTtBQUVwRSxNQUFhLG1CQUFvQixTQUFRLFlBQUs7SUFDNUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLGNBQWMsR0FBRyxJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuRCxNQUFNLHFCQUFxQixHQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTFELE1BQU0sUUFBUSxHQUFHLElBQUksdUJBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ2pELFlBQVksRUFBRSxlQUFlO1lBQzdCLHFCQUFxQjtZQUVyQixZQUFZLEVBQUUsSUFBSSxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDeEQsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixVQUFVLEVBQUUsa0JBQVcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDO2dCQUN0RCxPQUFPLEVBQUUsb0JBQW9CLENBQUMsYUFBYSxDQUFDLElBQUk7Z0JBQ2hELHFEQUFxRDtnQkFDckQsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLElBQUksRUFBRSxxQkFBcUI7Z0JBQzNCLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FBQztZQUVGLFdBQVcsRUFBRSw2QkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDOUMsY0FBYztnQkFDZCxxQkFBcUI7Z0JBRXJCLGlFQUFpRTtnQkFDakUsK0RBQStEO2dCQUMvRCxZQUFZLEVBQUUsZUFBZTthQUM5QixDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBRUgsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksK0NBQXFCLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtZQUMzRixHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7U0FDdEQsQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxpREFBc0IsQ0FBQyxJQUFJLEVBQUUsNEJBQTRCLEVBQUU7WUFDaEgsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1NBQ3RELENBQUMsQ0FBQyxDQUFDO0lBRU4sQ0FBQztDQUNGO0FBekNELGtEQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvZGVwaXBlbGluZSBmcm9tICdAYXdzLWNkay9hd3MtY29kZXBpcGVsaW5lJztcbmltcG9ydCAqIGFzIGNvZGVwaXBlbGluZV9hY3Rpb25zIGZyb20gJ0Bhd3MtY2RrL2F3cy1jb2RlcGlwZWxpbmUtYWN0aW9ucyc7XG5pbXBvcnQgeyBNYW51YWxBcHByb3ZhbEFjdGlvbiB9IGZyb20gJ0Bhd3MtY2RrL2F3cy1jb2RlcGlwZWxpbmUtYWN0aW9ucyc7XG5pbXBvcnQgeyBDb25zdHJ1Y3QsIFNlY3JldFZhbHVlLCBTdGFjaywgU3RhY2tQcm9wcywgU3RhZ2UsIFN0YWdlUHJvcHMgfSBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCB7IENka1BpcGVsaW5lLCBDb2RlUGlwZWxpbmUsIENvZGVQaXBlbGluZVNvdXJjZSwgU2hlbGxTdGVwLCBTaW1wbGVTeW50aEFjdGlvbiB9IGZyb20gXCJAYXdzLWNkay9waXBlbGluZXNcIjtcbmltcG9ydCB7IENka3BpcGVsaW5lc0RlbW9TdGFnZSB9IGZyb20gJy4vY2RrcGlwZWxpbmVzLWRlbW8tc3RhZ2UnO1xuaW1wb3J0IHsgQ2RrcGlwZWxpbmVzRGVtb1N0YWdlMiB9IGZyb20gJy4vY2RrcGlwZWxpbmVzLWRlbW8tc3RhZ2UyJztcblxuZXhwb3J0IGNsYXNzIE15UGlwZWxpbmVEZW1vU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3Qgc291cmNlQXJ0aWZhY3QgPSBuZXcgY29kZXBpcGVsaW5lLkFydGlmYWN0KCk7XG4gICAgY29uc3QgY2xvdWRBc3NlbWJseUFydGlmYWN0ID0gbmV3IGNvZGVwaXBlbGluZS5BcnRpZmFjdCgpO1xuXG4gICAgY29uc3QgcGlwZWxpbmUgPSBuZXcgQ2RrUGlwZWxpbmUodGhpcywgJ1BpcGVsaW5lJywge1xuICAgICAgcGlwZWxpbmVOYW1lOiAnTXlBcHBQaXBlbGluZScsXG4gICAgICBjbG91ZEFzc2VtYmx5QXJ0aWZhY3QsXG5cbiAgICAgIHNvdXJjZUFjdGlvbjogbmV3IGNvZGVwaXBlbGluZV9hY3Rpb25zLkdpdEh1YlNvdXJjZUFjdGlvbih7XG4gICAgICAgIGFjdGlvbk5hbWU6ICdHaXRIdWInLFxuICAgICAgICBvdXRwdXQ6IHNvdXJjZUFydGlmYWN0LFxuICAgICAgICBvYXV0aFRva2VuOiBTZWNyZXRWYWx1ZS5zZWNyZXRzTWFuYWdlcignZ2l0aHViLXRva2VuJyksXG4gICAgICAgIHRyaWdnZXI6IGNvZGVwaXBlbGluZV9hY3Rpb25zLkdpdEh1YlRyaWdnZXIuUE9MTCxcbiAgICAgICAgLy8gUmVwbGFjZSB0aGVzZSB3aXRoIHlvdXIgYWN0dWFsIEdpdEh1YiBwcm9qZWN0IGluZm9cbiAgICAgICAgb3duZXI6ICdEU2FlbnoxMCcsXG4gICAgICAgIHJlcG86ICdjZGtwaXBlbGluZXJlcG9kZW1vJyxcbiAgICAgICAgYnJhbmNoOiAnbWFpbidcbiAgICAgIH0pLFxuXG4gICAgICBzeW50aEFjdGlvbjogU2ltcGxlU3ludGhBY3Rpb24uc3RhbmRhcmROcG1TeW50aCh7XG4gICAgICAgIHNvdXJjZUFydGlmYWN0LFxuICAgICAgICBjbG91ZEFzc2VtYmx5QXJ0aWZhY3QsXG5cbiAgICAgICAgLy8gVXNlIHRoaXMgaWYgeW91IG5lZWQgYSBidWlsZCBzdGVwIChpZiB5b3UncmUgbm90IHVzaW5nIHRzLW5vZGVcbiAgICAgICAgLy8gb3IgaWYgeW91IGhhdmUgVHlwZVNjcmlwdCBMYW1iZGFzIHRoYXQgbmVlZCB0byBiZSBjb21waWxlZCkuXG4gICAgICAgIGJ1aWxkQ29tbWFuZDogJ25wbSBydW4gYnVpbGQnLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgdGVzdGluZ1N0YWdlID0gcGlwZWxpbmUuYWRkQXBwbGljYXRpb25TdGFnZShuZXcgQ2RrcGlwZWxpbmVzRGVtb1N0YWdlKHRoaXMsICdUZXN0aW5nJywge1xuICAgICAgZW52OiB7IGFjY291bnQ6ICc5NjUwNTU3MDQ3NDcnLCByZWdpb246ICd1cy1lYXN0LTEnIH1cbiAgICB9KSk7XG4gICAgXG4gICAgY29uc3QgdGVzdGluZ1N0YWdlMiA9IHBpcGVsaW5lLmFkZEFwcGxpY2F0aW9uU3RhZ2UobmV3IENka3BpcGVsaW5lc0RlbW9TdGFnZTIodGhpcywgJ1Rlc3RpbmctaW4tYW5vdGhlci1hY2NvdW50Jywge1xuICAgICAgZW52OiB7IGFjY291bnQ6ICc0MDQyNzczNzUwNTEnLCByZWdpb246ICd1cy1lYXN0LTEnIH1cbiAgICB9KSk7XG4gICAgXG4gIH1cbn0iXX0=