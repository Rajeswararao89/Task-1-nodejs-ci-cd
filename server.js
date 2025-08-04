const express = require('express');
const app = express();
const port = 3200;

// In-memory "database"
let products = [
  { id: 1, name: 'Phone', price: 500 },
  { id: 2, name: 'Laptop', price: 1000 }
];

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('íº€ CI/CD Product API is live!');
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Add a new product
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required.' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`íº€ Server running at http://localhost:${port}`);
});

