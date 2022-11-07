import axios from 'axios'
import { inspect } from 'node:util'
import { stripIndent } from 'common-tags'
import config from 'config'

export default async function eventMessage(event) {
    const rawChangeType = event.changeType

    let changeType = "unknown"
    switch (rawChangeType) {
        case "created":
            changeType = "scheduled"
            break
        case "updated":
            changeType = "updated"
            break
        case "deleted":
            changeType = "cancelled"
            break
    }

    const tokenResponse = await axios({
        method: 'post',
        url: 'https://login.microsoftonline.com/organizations/oauth2/v2.0/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data : new URLSearchParams({
            client_id: config.get('O365.clientID'),
            scope: 'Group.Read.All',
            refresh_token: config.get('O365.refreshToken'),
            redirect_uri: 'https://pdv5tpv90c.execute-api.us-east-1.amazonaws.com',
            grant_type: 'refresh_token',
            client_secret: config.get('O365.clientSecret')
        }).toString()
    })
    console.log(inspect(tokenResponse, { depth: null }))

    const calendarEventResponse = await axios({
        method: 'get',
        url: `https://graph.microsoft.com/v1.0/${event.resource}`,
        headers: {
            Authorization: `Bearer ${tokenResponse.data.access_token}`
        }
    })
    console.log(inspect(calendarEventResponse, { depth: null }))

    return {
        text: `An event has been ${changeType}`,
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: stripIndent`
                        *An event has been ${changeType}*
                        <https://outlook.office365.com/calendar/item/${calendarEventResponse.data.id.replace('_', '%2B').replace('=', '%3D')}|${calendarEventResponse.data.subject}>
                        <!date^${Date.parse(calendarEventResponse.data.start.dateTime) / 1000}^{date_short_pretty} from {time}|${calendarEventResponse.data.start.dateTime}> <!date^${Date.parse(calendarEventResponse.data.end.dateTime) / 1000}^to {time}|${calendarEventResponse.data.end.dateTime}>
                        ${calendarEventResponse.data.location.displayName}
                    `.trimStart()
                }
            }
        ]
    }
}
