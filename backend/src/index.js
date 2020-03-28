const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);


app.listen(3333);


/**
*Rotas e Recursos
*Rotas => é o endereço direcionado na url para direcionar a pagina a ser aberta
*Recursos => é o dados apresentado apos a /, para direcionar a pagina a ser aberta
*
**/


/**
*Métodos HTTP:
*GET: Buscar/listar uma informação do back-end
*POST: Criar uma informação no back-end
*PUT: Alterar uma informação no back-end
*DELETE: Deletar uma informação no back-end
*
*/


/**
 * Tipos de Parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após o símbolo de "?" (Filtros,paginação)
 * Route Params: Parâmetros para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */


 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, Couchdb, etc
  * 
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */
