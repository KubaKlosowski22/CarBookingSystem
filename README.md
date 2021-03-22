# Rent a car api 

## Prerequisites
npm, node, mysql2, knex

## Instalation

 - clone repository
 - `npm install`
 - `cp .env.dist .env`
 - update .env with correct credentials
 - `knex migrate:latest`

## Run

 - `npm start` or `node app.js`

## Endpoints

- **POST** - /api/auth/token

- **GET** - /api/users
- **GET** - /api/users/:id
- **POST** -/api/users
- **DELETE** -/api/users:id

- **GET** - /api/cars
- **GET** - /api/cars/:id
- **POST** -/api/cars
- **DELETE** -/api/cars/:id

- **GET** - /api/rent
- **GET** - /api/rent/:id
- **POST** -/api/rent
- **PATCH** -/api/rent/cancel-rent/:id
