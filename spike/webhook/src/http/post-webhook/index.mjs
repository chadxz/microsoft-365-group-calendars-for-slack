import { inspect } from 'node:util'
import arc from '@architect/functions'
import bolt from '@slack/bolt'
import config from 'config'

import eventMessage from './event-message.mjs'

const { App } = bolt

export const handler = arc.http.async(async function (req) {
    console.log(inspect(req, { depth: null }))

    if (req.queryStringParameters?.validationToken) {
        return {
            statusCode: 200,
            headers: {
                'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
                'content-type': 'text/plain'
            },
            body: req.queryStringParameters.validationToken
        }
    }

    const token = config.get('slack.token')
    const signingSecret = config.get('slack.signingSecret')

    const app = new App({
        token,
        signingSecret,
        // logLevel: LogLevel.DEBUG
    })

    await Promise.all(req.body.value?.map(async (event) => {
        await app.client.chat.postMessage({
            token,
            channel: 'C047TH2V14Y',
            ...eventMessage(event)
        })
    }))

    return {
        statusCode: 204,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        },
    }
})
