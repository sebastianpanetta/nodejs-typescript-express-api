![image](https://img.shields.io/badge/technology-nodejs-green.svg)
![image](https://img.shields.io/badge/technology-express-blue.svg)
![image](https://img.shields.io/badge/technology-mongodb-red.svg)

# Basic NodeJS - Express - MongoDB REST API

## Get items

```
curl --location 'http://localhost:3002/item'
```

## Get item

```
curl --location 'http://localhost:3002/item/:id'
```

## Create item

```
curl --location 'http://localhost:3002/item' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Model Y",
    "color": "Blue",
    "gas": "gasoline",
    "year": 2023,
    "description": "Comfort line V8",
    "price": 43000
}'
```

## Update item

```
curl --location --request PUT 'http://localhost:3002/item/:id' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Model X",
    "color": "Gray",
    "gas": "gasoline",
    "year": 2023,
    "description": "Trend line Sedan Turbo",
    "price": 23000
}'
```

## Delete item

```
curl --location --request DELETE 'http://localhost:3002/item/:id'
```

## Register new user

```
curl --location 'http://localhost:3002/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "zvx",
    "password": "12345",
    "email": "zvx@gmail.com"
}'
```

## Login user

```
curl --location 'http://localhost:3002/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "zvx@gmail.com",
    "password": "12345"
}'
```

## Get Orders

```
curl --location 'http://localhost:3002/order' \
--header 'Authorization: Bearer example.bearer.token'
```