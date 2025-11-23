const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/api/employees', (req, res) => {
  res.json([
    { id: 1, name: "John Doe", salary: 50000 },
    { id: 2, name: "Jane Smith", salary: 60000 }
  ]);
});

app.listen(port, () => {
  console.log(`Employee Payroll API running on port ${port}`);
});
