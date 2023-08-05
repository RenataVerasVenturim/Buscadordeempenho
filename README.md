<h1 align="center">Google Sheets como base de dados com Node.js <br><i>(Google Sheets as a Database with Node.js)</i></h1>
 <p align="center"><a href="https://renataverasventurim.github.io/Interface_usuario/"><i>Acessar interface do usuário</i></a></p>
 
<p align="center">O projeto consiste em diminuir demandas de e-mails de fornecedores que buscam informações sobre status de empenhos (liquidação e pagamento). O objetivo é utilizar a programação para fornecer acesso à informações via um buscador. A solução encontrada foi utilizar a base de dados já em uso que é a Planilha Google Sheets do Drive. O acesso se deu, em fase inicial, via servidor local utilizando npm express do node.js e autenticação do Google Cloud. Outra npm utilizada foi a googleapis.</p>

<h2>Interface do usuário (HTML e CSS)</h2>
<img src="https://github.com/RenataVerasVenturim/Google_Sheets_as_Database/assets/129551549/576e54c9-3d18-468a-aadf-2b6c1522d17a">

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
  <li>npm i nodemon</li>
  <li>npx nodemon index.js</li>
</ul>

<h2>Funcionamento</h2>
<p>Requisição via Node.js , autenticação no Google Cloud e response via json renderizada em um html com dados de toda a linha da planilha</p>
<p><img src="https://media2.giphy.com/media/pyHhg54LZ0WC9JQLoo/giphy.gif" alt="Projeto da Renata"></p>

