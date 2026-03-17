const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (replace 'your_database_url' with your MongoDB connection string)
mongoose.connect('your_database_url', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());
app.use(cors());

// ... (other middleware and routes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
