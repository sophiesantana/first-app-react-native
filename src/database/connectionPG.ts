import { DataSource } from "typeorm";
require('dotenv').config();

const AppDataSource = new DataSource({
    schema: 'deliveryApp',
    type: 'postgres',
    host: process.env.HOST,
    port: 5432,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.NAME_DATABASE,
    entities: [`src/application/entities/*.{ts,js}`],
    migrations: [`src/database/migrations/*.{ts,js}`]
});

export default AppDataSource;