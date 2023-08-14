const express = require('express');
const server = express();
const morgan = require('morgan');
const PORT = 3001;
const router = require('./routes/index')
const cors = require('cors');

server.use(express.json())
server.use(morgan('dev'));
server.use(cors());
server.use('/', router);
server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});

//const http= require('http')
//const getCharById = require('./controllers/getCharById')
//const getCharDetail= require('./controllers/getCharDetail')
////const characters = require('./utils/data')
//http.createServer((req, res)=>{
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    const {url}= req;
//    const id = url.split('/').at(-1);
//   
//    if(url.includes('onsearch')){
//        getCharById(res, id)
//    }
//    if(url.includes('detail')){
//getCharDetail(res, id);
//    }
//   // const {url}= req;
//   // const id = url.split('/').at(-1);
//   //
//   // let charF = characters.find(char=> char.id === Number(id))
//   // if(charF){
//   //     res.writeHead(200, {'Content-Type': 'application/json'})
//   //     res.end(JSON.stringify(charF))
//   // }
//}).listen(3001, 'localhost')