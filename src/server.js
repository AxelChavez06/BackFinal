const express = require('express');
const path = require('path');
const productosRouter = require('./routes/productos');
const app = express();

app.use(express.json());

app.use('/api/productos', productosRouter);

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(5000, () => {
  console.log('Servidor en ejecución en http://localhost:5000');
});
