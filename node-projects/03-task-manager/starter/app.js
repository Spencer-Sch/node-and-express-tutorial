const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');

// middleware

app.use(express.json());

const port = 3000;

app.get('/hello', (req, res) => {
  res.send('Task manager app');
});

app.use('/api/v1/tasks', taskRoutes);

// app.get('/api/v1/tasks');
// app.post('/api/v1/tasks');
// app.get('/api/v1/tasks/:id');
// app.patch('/api/v1/tasks/:id');
// app.delete('/api/v1/tasks/:id');

app.listen(port, console.log(`server is listening on port ${port}...`));
