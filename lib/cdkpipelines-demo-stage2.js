"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkpipelinesDemoStage2 = void 0;
const core_1 = require("@aws-cdk/core");
const cdkpipelines_demo_stack2_1 = require("./cdkpipelines-demo-stack2");
/**
 * Deployable unit of web service app
 */
class CdkpipelinesDemoStage2 extends core_1.Stage {
    constructor(scope, id, props) {
        super(scope, id, props);
        const service = new cdkpipelines_demo_stack2_1.CdkpipelinesDemoStack2(this, 'WebServiceV2');
        // Expose CdkpipelinesDemoStack's output one level higher
        this.urlOutput = service.urlOutput;
    }
}
exports.CdkpipelinesDemoStage2 = CdkpipelinesDemoStage2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrcGlwZWxpbmVzLWRlbW8tc3RhZ2UyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrcGlwZWxpbmVzLWRlbW8tc3RhZ2UyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF3RTtBQUN4RSx5RUFBb0U7QUFFcEU7O0dBRUc7QUFDSCxNQUFhLHNCQUF1QixTQUFRLFlBQUs7SUFHL0MsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLE9BQU8sR0FBRyxJQUFJLGlEQUFzQixDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUVqRSx5REFBeUQ7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQVhELHdEQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2ZuT3V0cHV0LCBDb25zdHJ1Y3QsIFN0YWdlLCBTdGFnZVByb3BzIH0gZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgeyBDZGtwaXBlbGluZXNEZW1vU3RhY2syIH0gZnJvbSAnLi9jZGtwaXBlbGluZXMtZGVtby1zdGFjazInO1xuXG4vKipcbiAqIERlcGxveWFibGUgdW5pdCBvZiB3ZWIgc2VydmljZSBhcHBcbiAqL1xuZXhwb3J0IGNsYXNzIENka3BpcGVsaW5lc0RlbW9TdGFnZTIgZXh0ZW5kcyBTdGFnZSB7XG4gIHB1YmxpYyByZWFkb25seSB1cmxPdXRwdXQ6IENmbk91dHB1dDtcbiAgXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhZ2VQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IG5ldyBDZGtwaXBlbGluZXNEZW1vU3RhY2syKHRoaXMsICdXZWJTZXJ2aWNlVjInKTtcbiAgICBcbiAgICAvLyBFeHBvc2UgQ2RrcGlwZWxpbmVzRGVtb1N0YWNrJ3Mgb3V0cHV0IG9uZSBsZXZlbCBoaWdoZXJcbiAgICB0aGlzLnVybE91dHB1dCA9IHNlcnZpY2UudXJsT3V0cHV0O1xuICB9XG59Il19