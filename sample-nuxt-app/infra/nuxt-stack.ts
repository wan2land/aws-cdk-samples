import { EndpointType, LambdaRestApi } from '@aws-cdk/aws-apigateway'
import { Certificate } from '@aws-cdk/aws-certificatemanager'
import { Code, Function as LFunction, Runtime } from '@aws-cdk/aws-lambda'
import { Construct, Stack, StackProps } from '@aws-cdk/core'
import { join } from 'path'

const DOMAIN_NAME = 'sample.app'
const CERTIFICATE_ARN = 'arn:aws:acm:us-east-1:~~~~'

export class NuxtStack extends Stack {
  public constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const code = Code.fromAsset(join(__dirname, '../dist'))

    new LambdaRestApi(this, 'SampleNuxt', {
      domainName: {
        endpointType: EndpointType.EDGE,
        domainName: DOMAIN_NAME,
        certificate: Certificate.fromCertificateArn(this, 'Certificate', CERTIFICATE_ARN),
      },
      handler: new LFunction(this, 'HomeHandler', {
        runtime: Runtime.NODEJS_12_X,
        code,
        handler: 'handler.render',
      }),
    })
  }
}
