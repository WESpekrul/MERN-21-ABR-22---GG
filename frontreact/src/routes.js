import React from 'react';

//import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { BrowserRouter, Routes, Route,} from 'react-router-dom';

import Dashboard from './pages/admin/dashboard';
import Formularios from './pages/admin/formuCRR';
import FormularioEditar from './pages/admin/formuCRR/crreditar';
import FormularioCadastrar from './pages/admin/formuCRR/crrcadastrar';
import Usuarios from './pages/admin/usuarios';
import UsuarioEditar from './pages/admin/usuarios/usuarioeditar';
import UsuarioCadastrar from './pages/admin/usuarios/usuariocadastrar';
import Login from './pages/admin/login';
import Home from './pages/client/painel';

import Imagem from './pages/admin/imagem';
import ImagemCadastrar from './pages/admin/imagem/imgcadastrar';


function Rota (){ 

    return(
        <BrowserRouter>              
            <Routes>
                {/*Rota Cliente*/}
                <Route path='/admin' exact element={<Home/>} />
                 {/*Rota Admin*/}
                <Route path="/" exact element={<Dashboard/>}/>

                <Route path='/admin/login' exact element={<Login/>} />

                <Route path="/admin/formularios" exact element={<Formularios/>}/>
                <Route path="/admin/formulario/cadastrar" exact element={<FormularioCadastrar/>} />
                <Route path="/admin/fomulario/editar/:_id" exact element={<FormularioEditar/>}/>
                                    
                <Route path="/admin/usuarios" exact element={<Usuarios/>}/>
                <Route path="/admin/usuarios/cadastrar" exact element={<UsuarioCadastrar/>}/>
                <Route path="/admin/usuarios/editar/:_id" exact element={<UsuarioEditar/>} />   

                <Route path="/admin/imagem" exact element={<Imagem/>}/>
                <Route path="/admin/imagem/cadastrar" exact element={<ImagemCadastrar/>}/>
                


                
            </Routes>
        </BrowserRouter>
    )};

export default Rota;