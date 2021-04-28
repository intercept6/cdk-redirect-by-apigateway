# AWS API Gateway v2(HTTP API)と AWS Lambda を使ったリダイレクトサーバー

## 概要

API Gateway と Lambda を使ったサーバーレス構成で安価なリダイレクトサーバーを作成する AWS CDK のコードです。
環境変数`REDIRECT_URL`に設定された URL に対してリダイレクトを行います。

## デプロイ

```bash
npm install -g aws-cdk
REDIRECT_URL=https://example.com  cdk deploy
```
