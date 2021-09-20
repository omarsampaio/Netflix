const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const database = require('./src/services/database');
const cors = require('cors');
const app = express();

const FilmeRoutes = require('./src/routes/filmes.routes');
const usuarioRoutes = require('./src/routes/usuarios.routes');
const episodeosRoutes = require('./src/routes/episodeos.routes');

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/', FilmeRoutes);
app.use('/usuario',usuarioRoutes);
app.use('/episodeo',episodeosRoutes);


app.listen(8000, () => {
  console.log('Meu servidor está funcionando');
});
