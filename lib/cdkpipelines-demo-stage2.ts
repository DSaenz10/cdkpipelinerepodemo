import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { CdkpipelinesDemoStack2 } from './cdkpipelines-demo-stack2';

/**
 * Deployable unit of web service app
 */
export class CdkpipelinesDemoStage2 extends Stage {
  public readonly urlOutput: CfnOutput;
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new CdkpipelinesDemoStack2(this, 'WebServiceV2');
    
    // Expose CdkpipelinesDemoStack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}