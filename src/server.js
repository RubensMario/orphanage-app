const express = require('express');
const path = require('path');
const pages = require('./pages');

// Iniciar express
const server = express();
// Servir os arquivos estáticos
server.use(express.static('public'));

// Configurar template engine (para modificar HTML dinamicamente via servidor)
// 'views' é uma propriedade do método set do express
// e nome padrão p/ o diretório de arquivos HTML quando se usam tamplate engines
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

// Criar rotas
server.get('/', pages.index);
server.get('/orphanage', pages.orphanage);
server.get('/orphanages', pages.orphanages);
server.get('/create-orphanage', pages.createOrphanage);

server.listen(5500);
