import { stripIndent } from 'common-tags'

export default function eventMessage(event) {
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

    return {
        text: `An event has been ${changeType}`,
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*An event has been ${changeType}*`,
                }
            },
            {
                type: "divider"
            },
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: stripIndent`
                        Event Name :clown_face:\n
                        Event Date & Time\n
                        Event Location
                    `
                }
            }
        ]
    }
}
