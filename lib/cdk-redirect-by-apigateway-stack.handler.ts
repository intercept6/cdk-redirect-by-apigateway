import {APIGatewayProxyHandlerV2} from 'aws-lambda';

const redirectURL = process.env.REDIRECT_URL;
if (redirectURL === undefined) {
  throw new Error('Environment variable REDIRECT_URL must be set');
}

export const handler: APIGatewayProxyHandlerV2 = async () => {
  return {
    statusCode: 301,
    headers: {
      Location: redirectURL,
    },
  };
};
