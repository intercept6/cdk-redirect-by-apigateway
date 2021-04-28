#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {CdkRedirectByApigatewayStack} from '../lib/cdk-redirect-by-apigateway-stack';

const redirectURL = process.env.REDIRECT_URL;
if (redirectURL === undefined) {
  throw new Error('Environment variable REDIRECT_URL must be set');
}

const app = new cdk.App();
new CdkRedirectByApigatewayStack(app, 'RedirectByApigatewayStack', {
  redirectURL,
});
