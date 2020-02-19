# Sample Nuxt App

## Installation

Open `infra/nuxt-atack.ts`, Set your Domain and Certificate ARN.

```ts
const DOMAIN_NAME = 'nuxtsample.dist.be'
const CERTIFICATE_ARN = 'arn:aws:acm:us-east-1:056997058944:certificate/a6e9d9de-b01a-448d-b4fb-69254e1867de'
```

then,

```bash
npm install
npx cdk bootstrap
npm run build && npm run deploy
```
