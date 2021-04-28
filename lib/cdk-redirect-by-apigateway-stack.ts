import {Stack, Construct, StackProps, CfnOutput} from '@aws-cdk/core';
import {HttpApi} from '@aws-cdk/aws-apigatewayv2';
import {LambdaProxyIntegration} from '@aws-cdk/aws-apigatewayv2-integrations';
import {NodejsFunction} from '@aws-cdk/aws-lambda-nodejs';

export interface RedirectByApigatewayStackProps extends StackProps {
  redirectURL: string;
}

export class CdkRedirectByApigatewayStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    props: RedirectByApigatewayStackProps
  ) {
    super(scope, id, props);

    const handler = new NodejsFunction(this, 'handler', {
      environment: {REDIRECT_URL: props.redirectURL},
    });
    const defaultIntegration = new LambdaProxyIntegration({handler});
    const httpApi = new HttpApi(this, 'http-api', {defaultIntegration});

    new CfnOutput(this, 'url', {value: httpApi.url!});
  }
}
