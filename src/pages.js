// Módulo com middlewares com o conteúdo para preencher as páginas

const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
  index(req, res) {
    return res.render('index');
  },

  async orphanage(req, res) {
    // O id passado como query é obtido em page-orphanages dos span hidden
    // que, por sua vez, são alimentados pela rota de orphanage, abaixo desta
    const id = req.query.id;

    try {
      const db = await Database;
      // orphanage é um array com um único objeto
      const results = await db.all(
        `SELECT * FROM orphanages WHERE id = "${id}"`
      );
      const orphanage = results[0];

      // Separar a cada vírgula criando elemento de array
      orphanage.images = orphanage.images.split(',');
      // Criar propriedade firstImage
      orphanage.firstImage = orphanage.images[0];

      // Transformar variável com valores 0 ou 1 em boolean
      orphanage.open_on_weekends == '0'
        ? (orphanage.open_on_weekends = false)
        : (orphanage.open_on_weekends = true);

      return res.render('orphanage', { orphanage });
    } catch (error) {
      console.log(error);
      return res.send('Erro no banco de dados!');
    }
  },

  // res.render('página',{dados_para_página})
  async orphanages(req, res) {
    try {
      const db = await Database;
      const orphanages = await db.all('SELECT * FROM orphanages');
      return res.render('orphanages', { orphanages });
    } catch (error) {
      console.log(error);
      return res.send('Erro no banco de dados!');
    }
  },

  createOrphanage(req, res) {
    return res.render('create-orphanage');
  },
};
