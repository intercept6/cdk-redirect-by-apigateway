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
  const template = SynthUtils.toCloudFormation(stack);
  template.Parameters = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object.values(template.Resources).forEach((resource: any) => {
    if (resource?.Properties?.Code) {
      resource.Properties.Code = {};
    }
  });
  expect(template).toMatchSnapshot();
});
