const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve tudo da pasta atual
app.use(express.static(__dirname));
app.use(express.json());

// Rota principal - procura seu arquivo de editor
app.get('/', (req, res) => {
  const possiveis = ['index.html', 'editor.html', 'partitura.html', 'app.html'];
  
  for (const arquivo of possiveis) {
    if (fs.existsSync(path.join(__dirname, arquivo))) {
      return res.sendFile(path.join(__dirname, arquivo));
    }
  }
  // Se não achar nenhum, lista o que tem
  res.send('<h1>Coloca seu arquivo do editor aqui na pasta como index.html</h1>');
});

app.listen(PORT, () => {
  console.log(`====================================`);
  console.log(`GURY EDITOR RODANDO`);
  console.log(`http://localhost:${PORT}`);
  console.log(`====================================`);
});