import {SynthUtils} from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as RedirectByApigateway from '../lib/cdk-redirect-by-apigateway-stack';

test('snapshot test', () => {
  const app = new cdk.App();
  const stack = new RedirectByApigateway.CdkRedirectByApigatewayStack(
    app,
    'test-stack',
    {redirectURL: 'https://example.com'}
  );
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
