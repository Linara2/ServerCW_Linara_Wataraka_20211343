const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();

//const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database/traveldb.db', (err) => {
    if (err) {
        console.error('Database connection error:', err);
    }else{
        console.log('Connected to the database.');

        db.run(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                password TEXT NOT NULL
            )
        `, (err) => {
            if (err) {
                console.error('Error creating users table:', err);
            } else {
                console.log('Users table created successfully.');
            }
        });
    }
});