require("../models/db");
const Usuario = require('../models/Usuario');
const jwt = require("jsonwebtoken")
const secret = "mysecret";

module.exports = {
                    main(req, res){
                        return res.json({message:"Teste 1"});
                    },                
                    async index(req, res){
                        const user = await Usuario.find({});
                        res.json(user);
                    },
                    async create(req, res){
                        
                        const {nome, email, tipo, senha} = req.body;
                        
                        let data ={};

                        let user = await Usuario.findOne({email:email});                        

                        if(!user){
                            data = {nome, email, tipo, senha};
                            user = await Usuario.create(data);

                            return res.status(200).json(
                                
                                {                            
                                error: false,
                                message: "Ok cadastrado"                                  
                            }                            
                            ) 
                        }                        
                        else{                          
                            return res.status(500).json(
                               
                                {                            
                                error: true,
                                message: "Usuario já cadastrado",                                                               
                            }
                                                        
                            ) 
                        
                    }
                    },
                    async details (req, res){    
                        await Usuario.findOne({_id:req.params._id})
                        .then((user) => {
                            return res.json(user);
                        }).catch ((erro) => {
                            return res.status (400).json({
                            error: true,
                            message: "Nenhum usuario encontrado ! "
                            })
                        })
                    },
                    async delete (req,res){
                        const {_id} = req.params;
                        const user = await Usuario.findByIdAndDelete({_id})
                        return res.json(user);                   
                    },
                    async update (req,res){
                        const { _id, nome, email, tipo, senha} = req.body;
                        const data = {nome, email, tipo, senha};
                        
                        const user = await Usuario.findByIdAndUpdate({_id},data,{new: true});

                        return res.json(user);
                    }, 
                    async login (req, res){
                        const {email, senha} = req.body;
                        Usuario.findOne({email:email, tipo:1}, function(err,user){
                            if (err){
                                console.log(err);
                                res.status(200).json({erro: "Erro no servidor. Por favor tente novamente"});
                            }
                            else if (!user){
                                res.status(200).json({status:2, error: "Email e senha não conferem"});
                            }
                            else{
                                const payload = {email};
                                const token = jwt.sign(payload, secret,{
                                    expiresIn: '24h'
                                })
                                res.cookie ('token',token, {httpOnly: true});
                                res.status(200).json({status:1, auth:true, token: token, _id: user._id, nome:user.nome, })
                            }
                        })
                    }
}
      