#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MyPipelineDemoStack } from '../lib/cdkpipelines-demo-pipeline-stack';

const app = new cdk.App();
new MyPipelineDemoStack(app, 'MyPipelineDemoStack', {
  env: { account: '965055704747', region: 'us-east-1' },
});

app.synth();