<h1 align="center">Google Sheets como base de dados com Node.js <br><i>(Google Sheets as a Database with Node.js)</i></h1>
 <p align="center"><a href="https://renataverasventurim.github.io/Interface_usuario/"><i>Acessar interface do usuário</i></a></p>
 
<p>O projeto consiste em diminuir demandas de e-mails de fornecedores que buscam informações sobre status de empenhos (liquidação e pagamento). O objetivo é utilizar a programação para fornecer acesso à informações via um buscador. A solução encontrada foi utilizar a base de dados já em uso que é a Planilha Google Sheets do Drive. O acesso se deu, em fase inicial, via servidor local utilizando npm express do node.js e autenticação do Google Cloud. Outra npm utilizada foi a googleapis.</p>
    
<h2>Instalação</h2>
    <ul>
    <li> Node.js</li>
    <li> Vs Code</li>
    </ul>    
    

<h2>Comandos do terminal: </h2>
    <ul>
      <li>npm i -g </li>
      <li>npm init // criação do package.json </li>
      <li>npm i express // instalar pacote</li>
      <li>npm i googleapis //instalar pacote</li>
      <li>node index.js // executar códigos </li>
    </ul>
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGR3OHVhcHduN3FkZjM0ZnVqbGFqeWR3MzlqMHNpaWU2ZGY3dnlxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3hPRHBN0BiU1Gzvche/giphy.gif" alt="servidor local express">
  
<p>Interface do usuário (HTML e CSS)</p>
  <img src="https://github.com/RenataVerasVenturim/Google_Sheets_as_Database/assets/129551549/a40f6252-9051-44f4-ab70-80629ad8e832">
   

<h2>Funcionamento</h2>
<p>Requisição via Node.js , autenticação no Google Cloud e response via json com dados d3 toda a linha da planilha</p>
<p><img src="https://s11.gifyu.com/images/ScgHI.gif" alt="" height="200px"></p>

  </body>
</html>
