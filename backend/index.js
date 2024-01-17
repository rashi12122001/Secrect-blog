import express from "express";
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Router from './ROUTES/Routes.js';

dotenv.config();

const app = express();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

const PORT=8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));