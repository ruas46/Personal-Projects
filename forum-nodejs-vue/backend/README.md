# NodeJS

### Start PostgreSQL:
psql -U postgres

### Create Database:
CREATE DATABASE forum;

### Connect in Database:
\c forum

### Install Knex.js Global
npm i -g knex

### Init Knex in backend folder
knex init

### Create knex migrates files
knex migrate:make create_table_users
knex migrate:make create_table_categories
knex migrate:make create_table_articles
knex migrate:make add_deleted_at_table_users

### Run knex migrates
knex migrate:latest

### Rollback knex migrates
knex migrate:rollback