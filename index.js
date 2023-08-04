/*Objetivo: Criar um servidor local para teste */
/*Declaração das variáveis */
/*Entrada de dados */

const { google } = require('googleapis');
const express = require('express');
const server = express();
const port = 5500;

// Configurar a pasta "public" para servir arquivos estáticos
server.use(express.static('public'));

/*Saída de dados*/

// Ouvir conexões da porta especificada
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

/*Objetivo: enviar requisição do cliente para servidor e servidor buscar no sheets */
/*Entrada de dados */

// Configuração do ID da planilha
const SPREADSHEET_ID = '1EVxOlPK30nOJaI-an7dH5s7n4mQhRSq4UWpRBYxczx8';
//planilha não editável:1do17u9OwnWRzyCMaDWWK5d0SjZqxbkFFdSF877zlCW0;
// Credenciais do Google Sheets
const credentials = {
  client_email: 'situacao-empenho@vscode-project-389502.iam.gserviceaccount.com',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCXS3sMaK/QOve5\nHaASqFDGzeUHJYSaF5J9qh2qsLpN21wLE6aKm10AGqjDUmxK9xvjGYXMpIA2/pw1\nqtsyhYqdLNEK7eFBiMmZcBW9jvBfjO+Ot/1t13tByzhw+slhpOs59hcnBLr3biE7\nXpcmakKjomGwgu0AfhecAEF/T/gGeXYR6hM2vwSXuyAfsf8+/q1dsHQMQXriJy46\nI+3QhsoWlNTb9KeiasEtXyNF+MG6QhzI3vZuqhWBNwYptGalrB9uhG9/MvDxCEP3\nTKVUByCqgM9L7UGCs3+xYKGQLoteIl6LCH8rVFR8Zu4SKn8rQ8irWr0KddCgtHn/\nIfbf+N55AgMBAAECggEAA1pPMhmJI+KFUNs2NpOiTqA2HhrCaIPIjEkJJUTgrA8G\nEtIZqQ1ZBJfn+4QdFZWKTwBmyv/Y6N8Vk8mN1/3GR5tm+oixADnJdewE9KbGmZIk\nUOkE5bqWZwEw5q1ivxY03EZMLGIvc9eYnESJXEw93nsfvRX5relyw9NBoFJOWx5X\nOii2ikCbamwymWZy/KujFsKX+qAMAb11XPCUn7OekFaYkoXH9cUFnOBcVYMLECc/\nw+3umNHjVHkS5LbER9UbuMCs67uiT/EwUtWM4Veqjflr8r9zD3hU9q7x5ZuDqkRJ\n6BlF+gAdqQAXq4gjkm9mZBZKZeqX1hfh2EtX6lPi7QKBgQDJrFoGWVARDbAlxRkj\nH4sO2de0qhAYBGbOd/fFi30eeIaELOv8nAnZPbh4lbmmTILEpEeqraxgHFMZcrMY\nY7tgs7pPusr0AHWVaGLAeAoARn+0j2wf6MatePnPCxaZR80fXU4B0JuJDS9A1G8R\nyXfAaVuMiWgsgnew1hJytieBfwKBgQDADPgZ+UIAsgGhww6J5u+T/Idbk8dHZ+wh\nDetABCDVDEEJkWrStKbvPWPS9XQP/tHd5iDAQIYODVTZEaqzRWWwefhsMhCNFY9J\nMze8v3RcU46LOWiL2KqG1WnznqOAfd6HcGKExKSGYCkpz7c8v5OZLovEEBEmurIS\n3jsikZ2sBwKBgQCIvxsT7v+BcLyd/7V5wWuzGDdRQ3dCMcnb+jDBfEHMpYDgou0p\nDk0HRviMm0mU35BT8ei+bKDTUqFuQf36bbWibnvIkCoJpT4VnwBG7Z4qbaMuNYnl\nYRtGiR8qKqSaLruBpuy8Ak1UcuI1nVXqw6c1irsO4iUG+Thbaex8Z9MF1QKBgQCE\nHWffllUNXWc5/JFX1IIjb6k+Gl8QhDEwW/7lvvFHHnLvPhYadSQRmE2/phL9nfKJ\nj/Ifz0NpD0q7OSgQw0C9MmrvI1G3fIlhddZ2Bc7qZKC+rfN5oMdOkimc6hjYH76h\ntXJQm2YC+svWc4o+RBwpWJfVfKgP2Ib/69kKYtnwqQKBgQDHooys5DcsmUKeUApo\ncbyyzuh/H7vTNRBAHQoT8BMvjmNCK/bEMCl0MWZVp2TLdrqvrCC2GP6Y2xzLAeux\n20M+B/7TLqanZxopAXeJCY/GRNFSVO1IY+ddoU8cuP15iqoVzZuRO+lakpjQpzpd\n4TwUiNtz9ijfUks5E9p1MH/0uA==\n-----END PRIVATE KEY-----\n',
};

// Autenticação usando OAuth 2.0
async function authenticateGoogleSheets() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Planilha de Controle', // Substitua "Sheet1" pelo nome da sua folha de planilha, se for diferente
    });

    console.log('Autenticação com o Google Sheets bem-sucedida.');
    return response.data;
  } catch (error) {
    console.error('Erro na autenticação com o Google Sheets:', error);
    throw error;
  }
}


// Rota para buscar informações do empenho

server.get('/empenhos', async (req, res) => {
  try {
    const numeroEmpenho = req.query.numeroEmpenho;
    const numeroEmpenhoCleaned = numeroEmpenho.trim().toUpperCase(); // Remover espaços e transformar em maiúsculas
    console.log('Número do empenho recebido:', numeroEmpenhoCleaned);

    const sheetData = await authenticateGoogleSheets();
    console.log('Dados da planilha carregados.');

    const rows = sheetData.values;

    // Filtrar as informações para encontrar o empenho correspondente
    const empenhoEncontrado = rows.find((row) => {
      const valorDaPlanilha = row[1].trim().toUpperCase(); // Remover espaços e transformar em maiúsculas
      console.log('Valor da planilha:', valorDaPlanilha);
      console.log('Valor a ser comparado:', numeroEmpenhoCleaned);

      return valorDaPlanilha === numeroEmpenhoCleaned;
    });

    if (empenhoEncontrado) {
      const explanations = ["Número do processo", "Número do empenho","Ano do empenho","Nº Nota fiscal","Responsável pela liquidação","Comprovante de liquidação realizada","Status do empenho","Bloco de assinatura","Solicitação de recurso (para casos de arrecadação própria)","Comprovante de pagamento (ordem bancária)","Data de pagamento realizado","Observações"];
      const empenhoResponse = explanations.map((explanation, index) => {
        return explanation + ": " + empenhoEncontrado[index];
      });
    
      const formattedResponse = empenhoResponse.join("<br>"); // Adiciona quebra de linha entre cada explicação
  res.send(formattedResponse); // Envia a resposta como uma string HTML com quebras de linha
} else {
        console.log('Empenho não encontrado:', numeroEmpenho);
        res.status(404).send(`Empenho ${numeroEmpenho} não encontrado na planilha.`);
      
    }
  } catch (error) {
    console.error('Erro ao buscar informações do empenho:', error);
    res.status(500).send('Erro ao buscar informações do empenho. Por favor, tente novamente mais tarde.');
  }
});
