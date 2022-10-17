365 developer program allows you to get a tenant where you are the admin.
https://developer.microsoft.com/en-us/microsoft-365/dev-program


GET https://graph.microsoft.com/v1.0/me/memberOf
```json
{
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#directoryObjects",
    "value": [
        {
            "@odata.type": "#microsoft.graph.directoryRole",
            "id": "d5543619-1201-4316-b529-bbadec267aa7",
            "deletedDateTime": null,
            "description": "Can manage all aspects of Azure AD and Microsoft services that use Azure AD identities.",
            "displayName": "Global Administrator",
            "roleTemplateId": "62e90394-69f5-4237-9190-012177145e10"
        },
        {
            "@odata.type": "#microsoft.graph.group",
            "id": "76382f05-da48-434b-a487-27c99c1693f1",
            "deletedDateTime": null,
            "classification": null,
            "createdDateTime": "2022-09-03T03:46:02Z",
            "creationOptions": [
                "ProvisionGroupHomepage",
                "HubSiteId:00000000-0000-0000-0000-000000000000"
            ],
            "description": "Sample Team Site",
            "displayName": "Sample Team Site",
            "expirationDateTime": null,
            "groupTypes": [
                "Unified"
            ],
            "isAssignableToRole": null,
            "mail": "SampleTeamSite@23ns5m.onmicrosoft.com",
            "mailEnabled": true,
            "mailNickname": "SampleTeamSite",
            "membershipRule": null,
            "membershipRuleProcessingState": null,
            "onPremisesDomainName": null,
            "onPremisesLastSyncDateTime": null,
            "onPremisesNetBiosName": null,
            "onPremisesSamAccountName": null,
            "onPremisesSecurityIdentifier": null,
            "onPremisesSyncEnabled": null,
            "preferredDataLocation": null,
            "preferredLanguage": null,
            "proxyAddresses": [
                "SPO:SPO_7df83841-1d78-4712-af94-b6413c3ed4b1@SPO_5db8d39a-c41e-43e3-8c70-c0509395ab8a",
                "SMTP:SampleTeamSite@23ns5m.onmicrosoft.com"
            ],
            "renewedDateTime": "2022-09-03T03:46:02Z",
            "resourceBehaviorOptions": [],
            "resourceProvisioningOptions": [],
            "securityEnabled": false,
            "securityIdentifier": "S-1-12-1-1983393541-1129044552-3374811044-4052948636",
            "theme": null,
            "visibility": "Public",
            "onPremisesProvisioningErrors": []
        }
    ]
}
```

GET https://graph.microsoft.com/v1.0/groups/76382f05-da48-434b-a487-27c99c1693f1/calendar
```json
{
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#groups('76382f05-da48-434b-a487-27c99c1693f1')/calendar/$entity",
    "id": "AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZAAuAAAAAABYnoNt8-_-QbEnnjxv3TP-AQAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAA=",
    "name": "Calendar",
    "color": "auto",
    "hexColor": "",
    "isDefaultCalendar": true,
    "changeKey": "CZP64ORySkeB5kudU0omJQAAAAAAng==",
    "canShare": false,
    "canViewPrivateItems": true,
    "canEdit": false,
    "allowedOnlineMeetingProviders": [],
    "defaultOnlineMeetingProvider": "unknown",
    "isTallyingResponses": true,
    "isRemovable": false,
    "owner": {
        "name": "Sample Team Site",
        "address": "SampleTeamSite@23ns5m.onmicrosoft.com"
    }
}
```

GET https://graph.microsoft.com/v1.0/groups/76382f05-da48-434b-a487-27c99c1693f1/events
```json
{
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#groups('76382f05-da48-434b-a487-27c99c1693f1')/events",
    "value": [
        {
            "@odata.etag": "W/\"CZP64ORySkeB5kudU0omJQAAG5GwKA==\"",
            "id": "AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAbkXZ7AAA=",
            "createdDateTime": "2022-10-16T19:20:45.2007047Z",
            "lastModifiedDateTime": "2022-10-16T19:20:45.8256675Z",
            "changeKey": "CZP64ORySkeB5kudU0omJQAAG5GwKA==",
            "categories": [],
            "transactionId": "c81be0bf-e771-f670-a14d-9d3384ee4b44",
            "originalStartTimeZone": "Central Standard Time",
            "originalEndTimeZone": "Central Standard Time",
            "iCalUId": "040000008200E00074C5B7101A82E00800000000C9E6BC6394E1D801000000000000000010000000FB279F92CC5B9B489DD0AC9922E8333A",
            "reminderMinutesBeforeStart": 15,
            "isReminderOn": true,
            "hasAttachments": false,
            "subject": "Kickoff Meeting",
            "bodyPreview": "Lets do this!",
            "importance": "normal",
            "sensitivity": "normal",
            "isAllDay": false,
            "isCancelled": false,
            "isOrganizer": true,
            "responseRequested": true,
            "seriesMasterId": null,
            "showAs": "busy",
            "type": "singleInstance",
            "webLink": "https://outlook.office365.com/calendar/deeplink/read/group/23ns5m.onmicrosoft.com/SampleTeamSite/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8/+/QbEnnjxv3TP/BwAJk/rg5HJKR4HmS51TSiYlAAAAAAENAAAJk/rg5HJKR4HmS51TSiYlAAAbkXZ7AAA=",
            "onlineMeetingUrl": null,
            "isOnlineMeeting": false,
            "onlineMeetingProvider": "unknown",
            "allowNewTimeProposals": true,
            "isDraft": false,
            "hideAttendees": false,
            "recurrence": null,
            "onlineMeeting": null,
            "responseStatus": {
                "response": "organizer",
                "time": "0001-01-01T00:00:00Z"
            },
            "body": {
                "contentType": "html",
                "content": "<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"></head><body><div style=\"font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0)\">Lets do this!</div></body></html>"
            },
            "start": {
                "dateTime": "2022-10-19T13:00:00.0000000",
                "timeZone": "UTC"
            },
            "end": {
                "dateTime": "2022-10-19T14:00:00.0000000",
                "timeZone": "UTC"
            },
            "location": {
                "displayName": "",
                "locationType": "default",
                "uniqueIdType": "unknown",
                "address": {},
                "coordinates": {}
            },
            "locations": [],
            "attendees": [],
            "organizer": {
                "emailAddress": {
                    "name": "Sample Team Site",
                    "address": "SampleTeamSite@23ns5m.onmicrosoft.com"
                }
            }
        }
    ]
}
```

architect standard lambda request object
```js
req = {
  version: '2.0',
  routeKey: 'POST /webhook',
  rawPath: '/webhook',
  rawQueryString: 'validationToken=lasdjkflasdkjfaldksjfasd%20foobar',
  queryStringParameters: { validationToken: 'lasdjkflasdkjfaldksjfasd foobar' },
  headers: {
    'content-type': 'text/plain',
    'user-agent': 'PostmanRuntime/7.29.2',
    accept: '*/*',
    'postman-token': 'ba6a9138-a03d-4c02-9b52-5230c1c72102',
    host: 'localhost:3333',
    'accept-encoding': 'gzip, deflate, br',
    'content-length': '6'
  },
  requestContext: {
    http: { method: 'POST', path: '/webhook' },
    routeKey: 'POST /webhook'
  },
  body: 'aGV5IHlv',
  isBase64Encoded: true
}
```

architect request object with `arc.http.async()`
```js
req = {
    version: '2.0',
    routeKey: 'POST /webhook',
    rawPath: '/webhook',
    rawQueryString: 'validationToken=lasdjkflasdkjfaldksjfasd%20foobar',
    queryStringParameters: { validationToken: 'lasdjkflasdkjfaldksjfasd foobar' },
    headers: {
        'content-type': 'text/plain',
        'user-agent': 'PostmanRuntime/7.29.2',
        accept: '*/*',
        'postman-token': '242b5781-570c-4bb3-9b94-37f4d098f847',
        host: 'localhost:3333',
        'accept-encoding': 'gzip, deflate, br',
        'content-length': '6'
    },
    requestContext: {
        http: { method: 'POST', path: '/webhook' },
        routeKey: 'POST /webhook'
    },
    body: 'hey yo',
    isBase64Encoded: true,
    session: {},
    rawBody: 'aGV5IHlv',
    httpMethod: 'POST',
    pathParameters: {},
    resource: '/webhook',
    path: '/webhook',
    method: 'POST',
    params: {},
    query: { validationToken: 'lasdjkflasdkjfaldksjfasd foobar' }
}
```

Events documentation: https://learn.microsoft.com/en-us/graph/api/calendar-list-events?view=graph-rest-1.0&tabs=http
Subscription documentation: https://learn.microsoft.com/en-us/graph/api/resources/subscription?view=graph-rest-1.0

Example subscription payload. POST https://graph.microsoft.com/v1.0/subscriptions
```json
{
    "changeType": "created,updated,deleted",
    "notificationUrl": "https://pdv5tpv90c.execute-api.us-east-1.amazonaws.com/webhook",
    "resource": "/groups/76382f05-da48-434b-a487-27c99c1693f1/calendar/events",
    "expirationDateTime": "2022-10-20T11:00:00.0000000Z",
    "clientState": "foo"
}
```
Example response payload:
```json
{
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#subscriptions/$entity",
    "id": "cf5a91c5-1756-43ed-b47c-44e2f4f7ec83",
    "resource": "/groups/76382f05-da48-434b-a487-27c99c1693f1/calendar/events",
    "applicationId": "de8bc8b5-d9f9-48b1-a8ad-b748da725064",
    "changeType": "created,updated,deleted",
    "clientState": "foo",
    "notificationUrl": "https://pdv5tpv90c.execute-api.us-east-1.amazonaws.com/webhook",
    "notificationQueryOptions": null,
    "lifecycleNotificationUrl": null,
    "expirationDateTime": "2022-10-18T11:00:00Z",
    "creatorId": "10074f98-49f2-4cd8-b396-7be3aa3718d7",
    "includeResourceData": null,
    "latestSupportedTlsVersion": "v1_2",
    "encryptionCertificate": null,
    "encryptionCertificateId": null,
    "notificationUrlAppId": null
}
```

Example webhook payload requests:
```js
created = {
    version: '2.0',
    routeKey: 'POST /webhook',
    rawPath: '/webhook',
    rawQueryString: '',
    headers: {
        'content-length': '937',
        'content-type': 'application/json; charset=utf-8',
        host: 'pdv5tpv90c.execute-api.us-east-1.amazonaws.com',
        'x-amzn-trace-id': 'Root=1-634c8003-1034439b34f7cbb75c18e289',
        'x-forwarded-for': '52.151.30.78',
        'x-forwarded-port': '443',
        'x-forwarded-proto': 'https'
    },
    requestContext: {
        accountId: '619705995164',
        apiId: 'pdv5tpv90c',
        domainName: 'pdv5tpv90c.execute-api.us-east-1.amazonaws.com',
        domainPrefix: 'pdv5tpv90c',
        http: {
            method: 'POST',
            path: '/webhook',
            protocol: 'HTTP/1.1',
            sourceIp: '52.151.30.78',
            userAgent: ''
        },
        requestId: 'aHjwpgcrIAMEJFg=',
        routeKey: 'POST /webhook',
        stage: '$default',
        time: '16/Oct/2022:22:04:51 +0000',
        timeEpoch: 1665957891956
    },
    body: { value: [ [Object] ] },
    isBase64Encoded: false,
    session: {},
    rawBody: '{"value":[{"subscriptionId":"76cba807-4d07-407b-a5ba-37a7b21d0003","subscriptionExpirationDateTime":"2022-10-18T11:00:00+00:00","changeType":"created","resource":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAbkXZ8AAA=","resourceData":{"@odata.type":"#Microsoft.Graph.Event","@odata.id":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAbkXZ8AAA=","@odata.etag":"W/\\"DwAAABYAAAAJk/rg5HJKR4HmS51TSiYlAAAbkbf0\\"","id":"AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAbkXZ8AAA="},"clientState":"foo","tenantId":"5db8d39a-c41e-43e3-8c70-c0509395ab8a"}]}',
    httpMethod: 'POST',
    pathParameters: {},
    queryStringParameters: {},
    resource: '/webhook',
    path: '/webhook',
    method: 'POST',
    params: {},
    query: {}
}
updated = {
  version: '2.0',
  routeKey: 'POST /webhook',
  rawPath: '/webhook',
  rawQueryString: '',
  headers: {
    'content-length': '937',
    'content-type': 'application/json; charset=utf-8',
    host: 'pdv5tpv90c.execute-api.us-east-1.amazonaws.com',
    'x-amzn-trace-id': 'Root=1-634c7c70-678e821f6aaa8b5e716e65bd',
    'x-forwarded-for': '40.74.203.28',
    'x-forwarded-port': '443',
    'x-forwarded-proto': 'https'
  },
  requestContext: {
    accountId: '619705995164',
    apiId: 'pdv5tpv90c',
    domainName: 'pdv5tpv90c.execute-api.us-east-1.amazonaws.com',
    domainPrefix: 'pdv5tpv90c',
    http: {
      method: 'POST',
      path: '/webhook',
      protocol: 'HTTP/1.1',
      sourceIp: '40.74.203.28',
      userAgent: ''
    },
    requestId: 'aHhhkgxrIAMEPHg=',
    routeKey: 'POST /webhook',
    stage: '$default',
    time: '16/Oct/2022:21:49:36 +0000',
    timeEpoch: 1665956976241
  },
  body: { value: [ [Object] ] },
  isBase64Encoded: false,
  session: {},
  rawBody: '{"value":[{"subscriptionId":"cf5a91c5-1756-43ed-b47c-44e2f4f7ec83","subscriptionExpirationDateTime":"2022-10-18T11:00:00+00:00","changeType":"updated","resource":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAbkXZ7AAA=","resourceData":{"@odata.type":"#Microsoft.Graph.Event","@odata.id":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAbkXZ7AAA=","@odata.etag":"W/\\"DwAAABYAAAAJk/rg5HJKR4HmS51TSiYlAAAbkbfo\\"","id":"AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAbkXZ7AAA="},"clientState":"foo","tenantId":"5db8d39a-c41e-43e3-8c70-c0509395ab8a"}]}',
  httpMethod: 'POST',
  pathParameters: {},
  queryStringParameters: {},
  resource: '/webhook',
  path: '/webhook',
  method: 'POST',
  params: {},
  query: {}
}
deleted = {
    version: '2.0',
    routeKey: 'POST /webhook',
    rawPath: '/webhook',
    rawQueryString: '',
    headers: {
        'content-length': '905',
        'content-type': 'application/json; charset=utf-8',
        host: 'pdv5tpv90c.execute-api.us-east-1.amazonaws.com',
        'x-amzn-trace-id': 'Root=1-634c8046-2235e53b236902271298008e',
        'x-forwarded-for': '52.151.30.78',
        'x-forwarded-port': '443',
        'x-forwarded-proto': 'https'
    },
    requestContext: {
        accountId: '619705995164',
        apiId: 'pdv5tpv90c',
        domainName: 'pdv5tpv90c.execute-api.us-east-1.amazonaws.com',
        domainPrefix: 'pdv5tpv90c',
        http: {
            method: 'POST',
            path: '/webhook',
            protocol: 'HTTP/1.1',
            sourceIp: '52.151.30.78',
            userAgent: ''
        },
        requestId: 'aHj7HgiSIAMEPoA=',
        routeKey: 'POST /webhook',
        stage: '$default',
        time: '16/Oct/2022:22:05:58 +0000',
        timeEpoch: 1665957958954
    },
    body: { value: [ [Object] ] },
    isBase64Encoded: false,
    session: {},
    rawBody: '{"value":[{"subscriptionId":"76cba807-4d07-407b-a5ba-37a7b21d0003","subscriptionExpirationDateTime":"2022-10-18T11:00:00+00:00","changeType":"deleted","resource":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAbkXZ7AAA=","resourceData":{"@odata.type":"#Microsoft.Graph.Event","@odata.id":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAbkXZ7AAA=","@odata.etag":"W/\\"CQAAAA==\\"","id":"AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAbkXZ7AAA="},"clientState":"foo","tenantId":"5db8d39a-c41e-43e3-8c70-c0509395ab8a"}]}',
    httpMethod: 'POST',
    pathParameters: {},
    queryStringParameters: {},
    resource: '/webhook',
    path: '/webhook',
    method: 'POST',
    params: {},
    query: {}
}

```
