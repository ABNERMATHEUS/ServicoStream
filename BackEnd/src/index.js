const express = require('express');
const routes  = require('./routes')
const cors = require('cors')
const bodyParser = require("body-parser")

const app = express();
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Originl','https://mojal.netlify.app');
    app.use(cors());
    next();
})

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));
app.use(routes);



app.listen(process.env.PORT || 3333);