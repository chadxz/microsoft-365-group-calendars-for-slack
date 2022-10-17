import { inspect } from 'node:util'
import arc from '@architect/functions'

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

    return {
        statusCode: 204,
        headers: {
            'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        },
    }
})
