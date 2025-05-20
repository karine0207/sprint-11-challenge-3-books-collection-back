const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());


app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('https://api-books-ac3j.onrender.com/users');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

app.get('/books', async (req, res) => {
  try {
    const response = await axios.get('https://api-books-ac3j.onrender.com/books');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener libros' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
