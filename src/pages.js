// Módulo com middlewares com o conteúdo para preencher as páginas

module.exports = {
  index(req, res) {
    // Escolhe nome da cidade a ser impresso na página index
    return res.render('index');
  },

  orphanage(req, res) {
    return res.render('orphanage');
  },

  orphanages(req, res) {
    return res.render('orphanages');
  },

  createOrphanage(req, res) {
    return res.render('create-orphanage');
  },
};
