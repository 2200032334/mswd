// Import the MongoClient class
const MongoClient = require('mongodb').MongoClient;

// Define the connection URL
const url = 'mongodb://localhost:27017';

// Define the database name
const dbName = 'mydatabase';

// Create a new MongoClient instance
const client = new MongoClient(url, function(err, client) {
 // If there's an error, print it
 if (err) console.log(err);
 else {
    // Database connection established, print the connected message
    console.log(Connected to ${dbName} database.);

    // Perform database operations here
    const db = client.db(dbName);
    const col = db.collection('mycollection');
    col.findOne({}, function(err, item) {
      console.log(item);

      // Close the connection
      client.close();
    });
 }
});

// Connect to the MongoDB server
client.connect();