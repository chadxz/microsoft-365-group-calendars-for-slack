
export default function eventMessage(event) {
    const changeType = event.changeType

    return {
        text: `An event has been ${changeType}`,
        blocks: [
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    text: `An event has been ${changeType}`,
                    "emoji": true
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Event Name :clown_face:\nEvent Date & Time\nEvent Location"
                }
            }
        ]
    }
}
