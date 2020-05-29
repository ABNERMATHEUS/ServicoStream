const express = require('express');
const routes  = require('./routes')
const cors = require('cors')
const bodyParser = require("body-parser")

const app = express();
app.use(cors())

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));
app.use(routes);



app.listen(process.env.PORT || 3333)