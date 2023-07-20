const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/task-manager_Database';


MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return;
    }

    console.log("coonected succes");
  
    // The 'client' object contains the connected MongoDB client
    const db = client.db();
  
    // Your code to interact with the database goes here
  
    // Close the connection when done
    client.close();
  });
  