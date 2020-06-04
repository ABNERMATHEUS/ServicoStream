const express = require('express');
const routes  = require('./routes')
const cors = require('cors')
const bodyParser = require("body-parser")

const app = express();


app.use(cors());
app.use(cors({ origin: 'https://mojal.netlify.app' }))

app.use((req,res,next)=>{

    
    res.setHeader('Access-Control-Allow-Originl','*');
    

    //res.setHeader("Access-Control-Allow-Originl", "*");
    //res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json");
    //app.use(cors());

    next();
})

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));
app.use(routes);



app.listen(process.env.PORT || 3333);