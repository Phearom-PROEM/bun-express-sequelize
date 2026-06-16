// import sequelize from "./database";
// await sequelize.sync({ alter: true });
import mysql from "mysql2/promise";
// import dotenv from "dotenv";

// Auto Create Database 
const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});
await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`
);

console.log("Database created or already exists.");

await connection.end();
