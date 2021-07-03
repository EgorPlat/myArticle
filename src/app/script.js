window.$ = window.jQuery = require('jquery'); // not sure if you need this at all
window.Bootstrap = require('bootstrap');

// server //

const express = require("express");
   
const app = express();
   
// создаем парсер для данных в формате json
const jsonParser = express.json();
 
// настройка CORS
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
   next();  // передаем обработку запроса методу app.post("/postuser"...
 });
  
// обработчик по маршруту localhost:3000/postuser
app.post("/registration", jsonParser, function (request, response) {
 
    // если не переданы данные, возвращаем ошибку
    if(!request.body) return response.sendStatus(400);
     
    // получаем данные
    let username = request.body.name;
    let userlogin = request.body.login;
    let userpassword = request.body.password;
     
    // отправка данных обратно клиенту
    response.json({"name": username, "login": userlogin, "password": userpassword});
});
  
app.listen(3000);

// server //