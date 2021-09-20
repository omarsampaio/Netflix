const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
  titulo: {
    type: String,
    required: true,
  },
  capa: String,
  logo: String,
  generos: Array,
  thumb: String,
  cenas_momentos: Array,
  descricao: String,
  elenco: Array,
  atores: Array,
  ano: Number,
  detalhes: Object,
  premiacoes: [Object],
});

module.exports = Filme;
