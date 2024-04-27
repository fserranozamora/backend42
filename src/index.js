const express = require ('express');
const conectarBD = require ('../config/db');
const cors = require ('cors');

const app = express();
const port = 5000;
app.use(express.json());
app.use('/api/clientes', require('../routes/RoutesCliente'));

conectarBD();
app.use(cors());

app.listen(port, () => console.log('Nuestro servidor se encuentra conectado http://localhost:5000', port));
app.get('/', (req, res) => {
    res.send('Bienvenido, nuestro servidor está configurado');
});