require("../models/db");
require("../models/Formulario");

const mongoose = require('mongoose');

const Formulario = mongoose.model('formulario');


module.exports = {
                    main(req, res){
                        res.json({message:"Teste 2 Form"});
                    },                
                    async index(req, res){
                        const form = await Formulario.find({});
                        res.json(form);
                    },
                    async create(req, res){                        
    
                        const {apreendido, numcrr, placa, guincheiro, pfxguincho, ftcrr} = req.body;                                       

                        let data ={}; 

                        data = {apreendido, numcrr, placa, guincheiro, pfxguincho, ftcrr};

                        let form = await Formulario.create({
                            apreendido: req.body.apreendido,
                            numcrr: req.body.numcrr,                            
                            placa: req.body.placa,
                            guincheiro: req.body.guincheiro,
                            pfXguincho: req.body.pfXguincho,
                            ftcrr: req.body.ftcrr,
                                                    
                        })
                        .then(function () {
                                        
                            res.redirect('/admin/formularios/');
                        })         
                        .catch ((erro) => {
                            return res.status (400).json({
                            error: true,
                            message: "Não foi possivel adcionar o Formulário! "
                            })
                        })
                    },
                    async details (req, res){    
                        await Formulario.findOne({_id:req.params._id})
                        .then((form) => {
                            return res.json(form);
                        }).catch ((erro) => {
                            return res.status (400).json({
                            error: true,
                            message: "Nenhum Formulario encontrado ! "
                            })
                        })
                    },
                    async delete (req,res){
                        const {_id} = req.params;
                        const form = await Formulario.findByIdAndDelete({_id})
                        return res.json(form);                   
                    },
                    async update (req,res){
                        const { _id, apreendido, numcrr, placa, guincheiro, pfxguincho, ftcrr} = req.body;
                        const data = {apreendido, numcrr, placa, guincheiro, pfxguincho, ftcrr};
                        
                        const form = await Formulario.findByIdAndUpdate({_id},data,{new: true});

                        return res.json(form);
                    },
                    async photoCrr (req,res){
                        const { _id, apreendido, numcrr, placa, guincheiro, pfxguincho, ftcrr} = req.body;
                        const data = {apreendido, numcrr, placa, guincheiro, pfxguincho, ftcrr};
                        
                        const form = await Formulario.findByIdAndUpdate({_id},data,{new: true});

                        return res.json(form);
                    },               
}


      /*exports.postFormularioo = (upload.single('ftcrr'), async (req, res) => {
        Formulario.create({
            aprendido: req.body.aprendido,
            numcrr: req.body.numcrr,
            ftcrr: req.file.ftcrr,
            placa: req.body.placa,
            guincheiro: req.body.guincheiro,
            pfXguincho: req.body.pfXguincho
        })
            .then(function () {
                const imagem = Imagem.create({ image: req.file.filename, crr: req.body.numcrr });

                res.redirect('/listformulario/');
            })
            .catch(function () {
                res.send("Houve um Erro" + erro);
            });
    });*/