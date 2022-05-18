require("dotenv").config();

const express = require('express')
const app = express()
const path = require('path');

const routes = require ('./routes/routes')
const cookieParser = require ('cookie-parser')
const cors = require ('cors')

const morgan = require ("morgan")

app.use(cookieParser())
app.use(cors())

//Config Template Engine

//Config Body-Parser
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(express.json())
app.use(routes)


app.use('/uploads', express.static('/public/uploads/'))

//Arquivos CSS Publicos
app.use('/public', express.static(__dirname +  '/public/uploads/'))
app.use(express.static('public',))

app.use("/files", express.static(path.resolve(__dirname, "..","public","uploads")))
app.use(express.static('files',))


app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});
