#!/usr/bin/env node

import { App } from '@aws-cdk/core'

import { NuxtStack } from './nuxt-stack'

const app = new App()

new NuxtStack(app, 'WaniSampleNuxtStack')
