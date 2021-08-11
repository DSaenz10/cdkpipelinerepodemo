"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkpipelinesDemoStack2 = void 0;
const apigw = require("@aws-cdk/aws-apigateway");
const lambda = require("@aws-cdk/aws-lambda");
const dynamodb = require("@aws-cdk/aws-dynamodb");
const core_1 = require("@aws-cdk/core");
const path = require("path");
/**
 * A stack for our simple Lambda-powered web service
 */
class CdkpipelinesDemoStack2 extends core_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        //DynamoDB table definition
        const table = new dynamodb.Table(this, "DemoTable", {
            partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
        });
        // The Lambda function that contains the functionality
        const handler = new lambda.Function(this, 'Lambda', {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'handler.handler',
            code: lambda.Code.fromAsset(path.resolve(__dirname, 'lambdav2')),
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
exports.CdkpipelinesDemoStack2 = CdkpipelinesDemoStack2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrcGlwZWxpbmVzLWRlbW8tc3RhY2syLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrcGlwZWxpbmVzLWRlbW8tc3RhY2syLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMsa0RBQWtEO0FBQ2xELHdDQUF3RTtBQUN4RSw2QkFBNkI7QUFFN0I7O0dBRUc7QUFDSCxNQUFhLHNCQUF1QixTQUFRLFlBQUs7SUFNL0MsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QiwyQkFBMkI7UUFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUU7WUFDaEQsWUFBWSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7U0FDbkUsQ0FBQyxDQUFDO1FBRUgsc0RBQXNEO1FBQ3RELE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2xELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDakUsQ0FBQyxDQUFDO1FBRUgsbURBQW1EO1FBQ25ELE1BQU0sRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFO1lBQ2xELFdBQVcsRUFBRSxrREFBa0Q7WUFDL0QsT0FBTztTQUNSLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDMUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBL0JELHdEQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwaWd3IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5JztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGR5bmFtb2RiIGZyb20gJ0Bhd3MtY2RrL2F3cy1keW5hbW9kYic7XG5pbXBvcnQgeyBDZm5PdXRwdXQsIENvbnN0cnVjdCwgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbi8qKlxuICogQSBzdGFjayBmb3Igb3VyIHNpbXBsZSBMYW1iZGEtcG93ZXJlZCB3ZWIgc2VydmljZVxuICovXG5leHBvcnQgY2xhc3MgQ2RrcGlwZWxpbmVzRGVtb1N0YWNrMiBleHRlbmRzIFN0YWNrIHtcbiAgLyoqXG4gICAqIFRoZSBVUkwgb2YgdGhlIEFQSSBHYXRld2F5IGVuZHBvaW50LCBmb3IgdXNlIGluIHRoZSBpbnRlZyB0ZXN0c1xuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHVybE91dHB1dDogQ2ZuT3V0cHV0O1xuIFxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcbiAgICBcbiAgICAvL0R5bmFtb0RCIHRhYmxlIGRlZmluaXRpb25cbiAgICBjb25zdCB0YWJsZSA9IG5ldyBkeW5hbW9kYi5UYWJsZSh0aGlzLCBcIkRlbW9UYWJsZVwiLCB7IFxuICAgICAgICBwYXJ0aXRpb25LZXk6IHtuYW1lOiBcImlkXCIsIHR5cGU6IGR5bmFtb2RiLkF0dHJpYnV0ZVR5cGUuU1RSSU5HIH0sXG4gICAgfSk7XG5cbiAgICAvLyBUaGUgTGFtYmRhIGZ1bmN0aW9uIHRoYXQgY29udGFpbnMgdGhlIGZ1bmN0aW9uYWxpdHlcbiAgICBjb25zdCBoYW5kbGVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnTGFtYmRhJywge1xuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICBoYW5kbGVyOiAnaGFuZGxlci5oYW5kbGVyJyxcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbGFtYmRhdjInKSksXG4gICAgfSk7XG5cbiAgICAvLyBBbiBBUEkgR2F0ZXdheSB0byBtYWtlIHRoZSBMYW1iZGEgd2ViLWFjY2Vzc2libGVcbiAgICBjb25zdCBndyA9IG5ldyBhcGlndy5MYW1iZGFSZXN0QXBpKHRoaXMsICdHYXRld2F5Jywge1xuICAgICAgZGVzY3JpcHRpb246ICdFbmRwb2ludCBmb3IgYSBzaW1wbGUgTGFtYmRhLXBvd2VyZWQgd2ViIHNlcnZpY2UnLFxuICAgICAgaGFuZGxlcixcbiAgICB9KTtcblxuICAgIHRoaXMudXJsT3V0cHV0ID0gbmV3IENmbk91dHB1dCh0aGlzLCAnVXJsJywge1xuICAgICAgdmFsdWU6IGd3LnVybCxcbiAgICB9KTtcbiAgfVxufSJdfQ==