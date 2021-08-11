"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkpipelinesDemoStack = void 0;
const apigw = require("@aws-cdk/aws-apigateway");
const lambda = require("@aws-cdk/aws-lambda");
const core_1 = require("@aws-cdk/core");
const path = require("path");
/**
 * A stack for our simple Lambda-powered web service
 */
class CdkpipelinesDemoStack extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The Lambda function that contains the functionality
        const handler = new lambda.Function(this, 'Lambda', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'handler.handler',
            code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambda')),
        });
        // An API Gateway to make the Lambda web-accessible
        const gw = new apigw.LambdaRestApi(this, 'Gateway', {
            description: 'Endpoint for a simple Lambda-powered web service',
            handler,
        });
        this.urlOutput = new core_1.CfnOutput(this, 'Url', {
            value: gw.url,
        });
    }
}
exports.CdkpipelinesDemoStack = CdkpipelinesDemoStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrcGlwZWxpbmVzLWRlbW8tc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGtwaXBlbGluZXMtZGVtby1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQsOENBQThDO0FBQzlDLHdDQUF3RTtBQUN4RSw2QkFBNkI7QUFFN0I7O0dBRUc7QUFDSCxNQUFhLHFCQUFzQixTQUFRLFlBQUs7SUFNOUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixzREFBc0Q7UUFDdEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDbEQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMvRCxDQUFDLENBQUM7UUFFSCxtREFBbUQ7UUFDbkQsTUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDbEQsV0FBVyxFQUFFLGtEQUFrRDtZQUMvRCxPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtZQUMxQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUc7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUExQkQsc0RBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBpZ3cgZnJvbSAnQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXknO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgQ2ZuT3V0cHV0LCBDb25zdHJ1Y3QsIFN0YWNrLCBTdGFja1Byb3BzIH0gZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vKipcbiAqIEEgc3RhY2sgZm9yIG91ciBzaW1wbGUgTGFtYmRhLXBvd2VyZWQgd2ViIHNlcnZpY2VcbiAqL1xuZXhwb3J0IGNsYXNzIENka3BpcGVsaW5lc0RlbW9TdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIEFQSSBHYXRld2F5IGVuZHBvaW50LCBmb3IgdXNlIGluIHRoZSBpbnRlZyB0ZXN0c1xuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHVybE91dHB1dDogQ2ZuT3V0cHV0O1xuIFxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIFRoZSBMYW1iZGEgZnVuY3Rpb24gdGhhdCBjb250YWlucyB0aGUgZnVuY3Rpb25hbGl0eVxuICAgIGNvbnN0IGhhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdMYW1iZGEnLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcbiAgICAgIGhhbmRsZXI6ICdoYW5kbGVyLmhhbmRsZXInLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsYW1iZGEnKSksXG4gICAgfSk7XG5cbiAgICAvLyBBbiBBUEkgR2F0ZXdheSB0byBtYWtlIHRoZSBMYW1iZGEgd2ViLWFjY2Vzc2libGVcbiAgICBjb25zdCBndyA9IG5ldyBhcGlndy5MYW1iZGFSZXN0QXBpKHRoaXMsICdHYXRld2F5Jywge1xuICAgICAgZGVzY3JpcHRpb246ICdFbmRwb2ludCBmb3IgYSBzaW1wbGUgTGFtYmRhLXBvd2VyZWQgd2ViIHNlcnZpY2UnLFxuICAgICAgaGFuZGxlcixcbiAgICB9KTtcblxuICAgIHRoaXMudXJsT3V0cHV0ID0gbmV3IENmbk91dHB1dCh0aGlzLCAnVXJsJywge1xuICAgICAgdmFsdWU6IGd3LnVybCxcbiAgICB9KTtcbiAgfVxufSJdfQ==