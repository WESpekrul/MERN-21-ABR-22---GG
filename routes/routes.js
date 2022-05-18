const { Router } = require('express');
const express = require('express');
const routes = express.Router();
const Usuario = require ('../controllers/usuario-controllers');
const Formulario = require ('../controllers/formulario-controllers');
const Imagem = require ('../models/Imagem');
const multer = require ('multer');
const multerConfig = require ('../models/config');
const { promisify } = require('util')
const fs = require('fs');
const unlinkAsync = promisify(fs.unlink);


// USUARIO CRUD - CREAT - RELEASE - UPDATE - DELETE

routes.get('/', Usuario.main);
routes.get('/listarusuarios/', Usuario.index);
routes.get('/listarusuario/:_id', Usuario.details);
routes.post('/cadusuario/', Usuario.create);
routes.delete('/delusuario/:_id', Usuario.delete);
routes.put('/editusuario/', Usuario.update);

// ROTA DE LOGIN>>>
routes.post('/login/', Usuario.login);

// FORMULARIO CRUD - CREAT - RELEASE - UPDATE - DELETE

routes.get('/form/', Formulario.main);
routes.get('/listarformularios/', Formulario.index);
routes.get('/listarformulario/:_id', Formulario.details);
routes.post('/cadformulario/', Formulario.create);
routes.delete('/delformulario/:_id', Formulario.delete);
routes.put('/editformulario/', Formulario.update);

routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {
    const {originalname: name, size, key, destination, url: url } = req.file;

    const post = await Imagem.create({
        name,       
        size,
        key,        
        url: destination + '\\' + req.file.filename,
        
    });
    return res.json(post);  
});
routes.get('/posts', async (req ,res) => {
const posts = await Imagem.find(); 

return res.json(posts);

});
routes.delete('/posts/:id', async (req, res) => {     

    const post = await Imagem.findById (req.params.id);    

    await post.remove();

    return res.send(post);   

});
 
module.exports= routes;
