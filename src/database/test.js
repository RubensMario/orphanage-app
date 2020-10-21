const Database = require('./db');

// Preencher tabela orphanages
Database.then(async (db) => {
  await db.run(`
  INSERT INTO orphanages (
    lat,
    lng,
    name,
    about,
    whatsapp,
    images,
    instructions,
    opening_hours,
    open_on_weekends
  ) VALUES (
    "-9.5985924",
    "-35.7692344",
    "Lar das meninas",
    "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco ou vulnerabilidade social.",
    "82999991111"
    "https://images.unsplash.com/photo-1595009545055-d5ec0bb8d732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    "Venha como se sentir à vontade e traga muito amor e carinho para dar.",
    "Das 8 às 18h",
    "1"
  )
  `);

  // Seleciona e armazena todos os campos "*" da tabela orphanages
  // (processo de consulta)
  const selectedOrphanages = await db.all('SELECT * FROM orphanages');
  console.log(selectedOrphanages);

  // Consultar um orfanato pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
  console.log(orphanage);
});
