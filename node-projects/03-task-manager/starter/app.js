const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const port = 3000;

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
