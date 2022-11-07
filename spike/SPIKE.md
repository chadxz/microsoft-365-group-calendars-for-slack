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
        'x-amzn-trace-id': 'Root=1-635211b4-4c587ff45229f2b222eb5d4d',
        'x-forwarded-for': '40.76.162.99',
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
            sourceIp: '40.76.162.99',
            userAgent: ''
        },
        requestId: 'aVe0OhL2oAMEVgQ=',
        routeKey: 'POST /webhook',
        stage: '$default',
        time: '21/Oct/2022:03:27:48 +0000',
        timeEpoch: 1666322868474
    },
    body: {
        value: [
            {
                subscriptionId: 'ec73a6d8-5535-40ba-8b84-71b6b56788f4',
                subscriptionExpirationDateTime: '2022-10-22T11:00:00+00:00',
                changeType: 'created',
                resource: 'Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=',
                resourceData: {
                    '@odata.type': '#Microsoft.Graph.Event',
                    '@odata.id': 'Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=',
                    '@odata.etag': 'W/"DwAAABYAAAAJk/rg5HJKR4HmS51TSiYlAAAecwKg"',
                    id: 'AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA='
                },
                clientState: 'foo',
                tenantId: '5db8d39a-c41e-43e3-8c70-c0509395ab8a'
            }
        ]
    },
    isBase64Encoded: false,
    session: {},
    rawBody: '{"value":[{"subscriptionId":"ec73a6d8-5535-40ba-8b84-71b6b56788f4","subscriptionExpirationDateTime":"2022-10-22T11:00:00+00:00","changeType":"created","resource":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=","resourceData":{"@odata.type":"#Microsoft.Graph.Event","@odata.id":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=","@odata.etag":"W/\\"DwAAABYAAAAJk/rg5HJKR4HmS51TSiYlAAAecwKg\\"","id":"AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA="},"clientState":"foo","tenantId":"5db8d39a-c41e-43e3-8c70-c0509395ab8a"}]}',
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
        'x-amzn-trace-id': 'Root=1-635211c7-6ea19aa873ce6fb436547404',
        'x-forwarded-for': '40.76.162.99',
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
            sourceIp: '40.76.162.99',
            userAgent: ''
        },
        requestId: 'aVe3JjdJIAMEKgw=',
        routeKey: 'POST /webhook',
        stage: '$default',
        time: '21/Oct/2022:03:28:07 +0000',
        timeEpoch: 1666322887121
    },
    body: {
        value: [
            {
                subscriptionId: 'ec73a6d8-5535-40ba-8b84-71b6b56788f4',
                subscriptionExpirationDateTime: '2022-10-22T11:00:00+00:00',
                changeType: 'updated',
                resource: 'Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=',
                resourceData: {
                    '@odata.type': '#Microsoft.Graph.Event',
                    '@odata.id': 'Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=',
                    '@odata.etag': 'W/"DwAAABYAAAAJk/rg5HJKR4HmS51TSiYlAAAecwKl"',
                    id: 'AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA='
                },
                clientState: 'foo',
                tenantId: '5db8d39a-c41e-43e3-8c70-c0509395ab8a'
            }
        ]
    },
    isBase64Encoded: false,
    session: {},
    rawBody: '{"value":[{"subscriptionId":"ec73a6d8-5535-40ba-8b84-71b6b56788f4","subscriptionExpirationDateTime":"2022-10-22T11:00:00+00:00","changeType":"updated","resource":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=","resourceData":{"@odata.type":"#Microsoft.Graph.Event","@odata.id":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=","@odata.etag":"W/\\"DwAAABYAAAAJk/rg5HJKR4HmS51TSiYlAAAecwKl\\"","id":"AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA="},"clientState":"foo","tenantId":"5db8d39a-c41e-43e3-8c70-c0509395ab8a"}]}',
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
        'x-amzn-trace-id': 'Root=1-635211c7-76fc56c1709eb4714014feee',
        'x-forwarded-for': '40.76.162.99',
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
            sourceIp: '40.76.162.99',
            userAgent: ''
        },
        requestId: 'aVe3JhLBIAMEVfg=',
        routeKey: 'POST /webhook',
        stage: '$default',
        time: '21/Oct/2022:03:28:07 +0000',
        timeEpoch: 1666322887145
    },
    body: {
        value: [
            {
                subscriptionId: 'ec73a6d8-5535-40ba-8b84-71b6b56788f4',
                subscriptionExpirationDateTime: '2022-10-22T11:00:00+00:00',
                changeType: 'deleted',
                resource: 'Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=',
                resourceData: {
                    '@odata.type': '#Microsoft.Graph.Event',
                    '@odata.id': 'Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=',
                    '@odata.etag': 'W/"CQAAAA=="',
                    id: 'AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA='
                },
                clientState: 'foo',
                tenantId: '5db8d39a-c41e-43e3-8c70-c0509395ab8a'
            }
        ]
    },
    isBase64Encoded: false,
    session: {},
    rawBody: '{"value":[{"subscriptionId":"ec73a6d8-5535-40ba-8b84-71b6b56788f4","subscriptionExpirationDateTime":"2022-10-22T11:00:00+00:00","changeType":"deleted","resource":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=","resourceData":{"@odata.type":"#Microsoft.Graph.Event","@odata.id":"Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA=","@odata.etag":"W/\\"CQAAAA==\\"","id":"AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAAecy6lAAA="},"clientState":"foo","tenantId":"5db8d39a-c41e-43e3-8c70-c0509395ab8a"}]}',
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

Block kit builder helps build UIs for Slack https://app.slack.com/block-kit-builder/

Fetch event: GET https://graph.microsoft.com/v1.0/Groups/76382f05-da48-434b-a487-27c99c1693f1/Events/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAApEW8FAAA=
```json
{
    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#groups('76382f05-da48-434b-a487-27c99c1693f1')/events/$entity",
    "@odata.etag": "W/\"CZP64ORySkeB5kudU0omJQAAKRHXXg==\"",
    "id": "AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8-_-QbEnnjxv3TP-BwAJk-rg5HJKR4HmS51TSiYlAAAAAAENAAAJk-rg5HJKR4HmS51TSiYlAAApEW8FAAA=",
    "createdDateTime": "2022-11-06T03:39:10.17546Z",
    "lastModifiedDateTime": "2022-11-06T03:39:10.8473034Z",
    "changeKey": "CZP64ORySkeB5kudU0omJQAAKRHXXg==",
    "categories": [],
    "transactionId": "51380c2a-aa1d-75fb-e00a-55fd2da0a6b2",
    "originalStartTimeZone": "Central Standard Time",
    "originalEndTimeZone": "Central Standard Time",
    "iCalUId": "040000008200E00074C5B7101A82E00800000000DC88BE5491F1D8010000000000000000100000005649C98E9D445245BF56D9CCFEE85BA5",
    "reminderMinutesBeforeStart": 15,
    "isReminderOn": true,
    "hasAttachments": false,
    "subject": "Heyyyyyyy",
    "bodyPreview": "What's up",
    "importance": "normal",
    "sensitivity": "normal",
    "isAllDay": false,
    "isCancelled": false,
    "isOrganizer": true,
    "responseRequested": true,
    "seriesMasterId": null,
    "showAs": "busy",
    "type": "singleInstance",
    "webLink": "https://outlook.office365.com/calendar/deeplink/read/group/23ns5m.onmicrosoft.com/SampleTeamSite/AAMkAGViYzY5NTVhLTcxNzUtNDE3YS05N2FhLTNhODU5OWE2MWVlZABGAAAAAABYnoNt8/+/QbEnnjxv3TP/BwAJk/rg5HJKR4HmS51TSiYlAAAAAAENAAAJk/rg5HJKR4HmS51TSiYlAAApEW8FAAA=",
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
        "content": "<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"></head><body><div style=\"font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)\">What's up</div></body></html>"
    },
    "start": {
        "dateTime": "2022-11-02T15:00:00.0000000",
        "timeZone": "UTC"
    },
    "end": {
        "dateTime": "2022-11-02T15:30:00.0000000",
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
```

OAuth2 Authorization redirect
```
GET https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?
client_id=11111111-1111-1111-1111-111111111111
&response_type=code
&redirect_uri=https%3A%2F%2Fpdv5tpv90c.execute-api.us-east-1.amazonaws.com
&response_mode=query
&scope=offline_access%20Group.Read.All
&state=thisisnotsecure_usejwtinstead
```

Token Request
```
POST https://login.microsoftonline.com/organizations/oauth2/v2.0/token
Content-Type: application/x-www-form-urlencoded

client_id=11111111-1111-1111-1111-111111111111
&scope=Group.Read.All
&code=OAAABAAAAiL9Kn2Z27UubvWFPbm0gLWQJVzCTE9UkP3pSx1aXxUjq3n8b2JRLk4OxVXr...
&refresh_token=OAAABAAAAiL9Kn2Z27UubvWFPbm0gLWQJVzCTE9UkP3pSx1aXxUjq... // use this instead of `code` for refreshing
&redirect_uri=https%3A%2F%2Fpdv5tpv90c.execute-api.us-east-1.amazonaws.com
&grant_type=authorization_code
&client_secret=jXoM3iz...
```

Token Response
```
{
    "token_type": "Bearer",
    "scope": "Group.Read.All profile openid email",
    "expires_in": 3600,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJ...",
    "refresh_token": "AwABAAAAvPM1KaPlrEqdFSBzjqfTGAMxZGUTdM0t4B4..."
}
```

Refresh the Token. Same response as Token response
```
POST https://login.microsoftonline.com/organizations/oauth2/v2.0/token
Content-Type: application/x-www-form-urlencoded

client_id=11111111-1111-1111-1111-111111111111
&scope=Group.Read.All
&refresh_token=OAAABAAAAiL9Kn2Z27UubvWFPbm0gLWQJVzCTE9UkP3pSx1aXxUjq...
&redirect_uri=https%3A%2F%2Fpdv5tpv90c.execute-api.us-east-1.amazonaws.com
&grant_type=refresh_token
&client_secret=jXoM3iz...
```

Using the access_token to make a request against the graph
```
GET https://graph.microsoft.com/v1.0/me
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJ...
```

"Proper" way to do the requests to the graph API would be to use the
`@microsoft/microsoft-graph-client` npm module along with the authentication
library npm module `@azure/msal-node`.

Example TokenCache implementation for reading/writing to a database:
https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/samples/msal-node-samples/ExpressTestApp/TestApp/App/utils/cachePlugin.js

Workflows:
![](workflows.jpeg)

