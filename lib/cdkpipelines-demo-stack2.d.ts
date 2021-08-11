import { CfnOutput, Construct, Stack, StackProps } from '@aws-cdk/core';
/**
 * A stack for our simple Lambda-powered web service
 */
export declare class CdkpipelinesDemoStack2 extends Stack {
    /**
     * The URL of the API Gateway endpoint, for use in the integ tests
     */
    readonly urlOutput: CfnOutput;
    constructor(scope: Construct, id: string, props?: StackProps);
}
