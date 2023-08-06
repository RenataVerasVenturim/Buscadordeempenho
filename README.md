<h1 align="center">Google Sheets como base de dados com Node.js <br><i>(Google Sheets as a Database with Node.js)</i></h1>
 <p align="center"><a href="https://renataverasventurim.github.io/Interface_usuario/"><i>Acessar interface do usuário</i></a></p>
 
<p align="center">O projeto consiste em diminuir demandas de e-mails de fornecedores que buscam informações sobre status de empenhos (liquidação e pagamento). O objetivo é utilizar a programação para fornecer acesso à informações via um buscador. A solução encontrada foi utilizar a base de dados já em uso que é a Planilha Google Sheets do Drive. O acesso se deu, em fase inicial, via servidor local utilizando npm express do node.js e autenticação do Google Cloud. Outra npm utilizada foi a googleapis.</p>

<h2>Interface do usuário (HTML e CSS)</h2>
<p align="center"><img src="https://github.com/RenataVerasVenturim/Google_Sheets_as_Database/assets/129551549/bb5afb31-83ba-4f5f-ad16-e93f1196db17">
</p>

<h2>Pré-requisitos:</h2>
<ul>
<li>VS CODE
<li>Google Cloud
<li>Node.js
<li>Planilha sheets
</ul>

<h2>Instalação - Terminal</h2>
<ul>
  <li>npm install</li>
  <li>npm init -y</li>
  <li> npm i express</li>
  <li>npm i googleapis</li>
  <li> npm i fs
  <li>npm i nodemon</li> //optativo. utilizei para agilizar o desenvolvimento
  <li>npx nodemon index.js ou node index.js</li> //o nodemon é para resetar o servidor local de forma contínua (agilizou o desenvolvimento do projeto).
</ul>

<h2>Chaves de autenticação Google Cloud</h2>
<p>Você deverá criar chaves de autenticação e permissão de acesso à planilha sheets via Google cloud. Um arquivos .json será enviado e você poderá, nesa fase de implementação em um servidor local, utilizá-las no código. (não esqueça de alterar, no código no projeto baixado,sua private key, seu id da sua planilha  sheets (fica entre "d" e "edit") e o client_email). Na fase de implementação em um servidor público, você utilizará variáveis de ambiente para proteção desses dados sensíveis.</p>

<h2>Funcionamento</h2>
<p>Input do usuário via form do html recebido pelo servidor local (express do node.js), autenticação no Google Cloud e resposta json renderizada em um html com dados de toda a linha da planilha. Backend em Node.js e Frontend em html e css e javascripts</p>
<p><img src="https://media2.giphy.com/media/pyHhg54LZ0WC9JQLoo/giphy.gif" alt="Projeto da Renata"></p>

<h2>Resposta ao usuário - HTML</h2>
<img src="https://github.com/RenataVerasVenturim/Google_Sheets_as_Database/assets/129551549/75b8e02b-845f-4b85-9889-4e2f1b32dbee">

<h2>Implementação em um servidor público</h2>
<p>Após todos os testes em servidor local, realize o deploy de seu projeto em um servidor público. Você pode ver meu projeto de implementação <a href="https://github.com/RenataVerasVenturim/Data_base_server">AQUI</a></p>
