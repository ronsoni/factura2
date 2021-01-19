import express from 'express';
import consign from 'consign';
 
var cors = require('cors')
var bodyParser=require('body-parser');
cors({credentials: true, origin: true})
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
 

app.use(cors());
// Routes

consign({cwd: __dirname})
  .include('libs/config.js')
  .then('db.js')
  .then('libs/middlewares.js')
  .then('services')
  .then('controllers')
  .then('middleware')
  .then('routes')
  .then('libs/boot.js')
  .into(app);

 