// Módulo com middlewares com o conteúdo para preencher as páginas

const orphanages = require('./database/fakedata.js');

module.exports = {
  index(req, res) {
    return res.render('index');
  },

  orphanage(req, res) {
    return res.render('orphanage');
  },

  // res.render('página',{dados_para_página})
  orphanages(req, res) {
    return res.render('orphanages', { orphanages });
  },

  createOrphanage(req, res) {
    return res.render('create-orphanage');
  },
};
