const ejs = require('ejs');
const fs = require('fs');
const data = require('./data/data_html');  // Seus dados

// Gerar o HTML a partir de EJS
ejs.renderFile('views/index.ejs', { homeText: data.homeText }, (err, str) => {
  if (err) {
    console.error('Erro ao renderizar o template:', err);
    return;
  }

  // Salvar o HTML gerado na pasta 'public'
  fs.writeFileSync('public/index.html', str);
  console.log('HTML estático gerado com sucesso!');
});
