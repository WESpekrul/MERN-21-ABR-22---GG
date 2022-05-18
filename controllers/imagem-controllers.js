require("../models/db");
require("../models/Imagem");

const mongoose = require('mongoose');
const Imagem = mongoose.model('imagem');

module.exports = {
                    main(req, res){
                        res.json({message:"Teste 3 Form"});
                    },                
                    async index(req, res){
                        const form = await Imagem.find({});
                        res.json(form);
                    },
                    async create(req, res){                        
    
                        const {apreendido, numcrr, ftcrr} = req.body;                        
                        
                        let data ={}; 

                        data = {apreendido, numcrr, ftcrr};

                        let form = await Imagem.create({
                            apreendido: req.body.apreendido,
                            ftcrr: req.body.ftcrr,
                            numcrr: req.body.numcrr
                                                    
                        })
                        .then((data) => {return res.status(200).json({                            
                            error: false,
                            message: "Ok cadastrado"}                                  
                        )})          
                        .catch ((erro) => {
                            return res.status (400).json({
                            error: true,
                            message: "Não foi possivel adcionar Imagem! "
                            })
                        })
                    },
                    async details (req, res){    
                        await Imagem.findOne({_id:req.params._id})
                        .then((form) => {
                            return res.json(form);
                        }).catch ((erro) => {
                            return res.status (400).json({
                            error: true,
                            message: "Nenhuma Imagem encontrado ! "
                            })
                        })
                    },
                    async delete (req,res){
                        const {_id} = req.params;
                        const form = await Imagem.findByIdAndDelete({_id})
                        return res.json(form);                   
                    },
                    async update (req,res){
                        const {imagem, numcrr} = req.body;
                        const data = {imagem, numcrr};
                        
                        const form = await Imagem.findByIdAndUpdate({_id},data,{new: true});

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
      