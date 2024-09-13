# Mock Service

## Install

To install the required dependencies, run:

```sh
npm install express
```

## Start service
```sh
node mock-server.js
```

## Example curl 
```sh
curl --location 'http://localhost:3000/api/v1/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userName": "testUser",
    "email": "testuser@example.com",
    "phoneNumber": "5551234567"
}'
```