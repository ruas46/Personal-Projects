# Forum functionalities demonstration

* Technologies:
  * NodeJS
  * MongoDB
  * PostgreSQL
  * VueJS

* Features:
  * CRUD operations for Users, Categories and Articles
    * Users with soft delete
  * Loguin with type Admin / User
  * Authentication Token JWT
  * Scheduled generation of system statistics in mongoDB
  * Front API Desktop/Mobile
  * Menu generated in tree structure
  * Pagination


# How Start
### Install Knex.js Global
npm i -g knex

### Start MongoDB:
mongod

### Start PostgreSQL:
psql -U postgres

### Create Database:
CREATE DATABASE forum;

### Install Backend dependencies (run inside backend folder)
npm i

### Install Frontend dependencies (run inside frontend folder)
npm i

### Start Backend (run inside backend folder)
npm start

### Start Frontend (run inside frontend folder)
npm run server -- --port 8090

### Insert the Authentication Token JWT
rename env_file to .env
put your token on authSecret and Database informations