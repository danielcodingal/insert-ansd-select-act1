// Import the sqlite3 module
var sqlite3 = require('sqlite3').verbose();

// Open a connection to the database (or create it if it doesn't exist)
var db = new sqlite3.Database('example.db', function (err) {
    if (err) {
        return console.error("Error connecting to the database: ", err.message);
    }
    console.log("Connected to the SQLite database.");
});

// SQL query to create a new table called 'users'
var createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  );
`;

// Run the create table query
db.run(createTableQuery, function (err) {
    if (err) {
        return console.error("Error creating table: ", err.message);
    }
    console.log("Users table created successfully.");

    // SQL query to insert values into the 'users' table
    var insertValuesQuery = `
    INSERT INTO users (name, email)
    VALUES 
    ('Alice', 'alice@example.com'),
    ('Bob', 'bob@example.com'),
    ('Charlie', 'charlie@example.com'),
    ('daniel', 'daniel@example.com'),
    ('Luffy', 'luffy@example.com');
    `;

    // Insert values into the table
    db.run(insertValuesQuery, function (err) {
        if (err) {
            return console.error("Error inserting values: ", err.message);
        }
        console.log("Values inserted into the 'users' table.");
    });
});

// Close the database connection
db.close(function (err) {
    if (err) {
        return console.error("Error closing the database: ", err.message);
    }
    console.log("Database connection closed.");
});
