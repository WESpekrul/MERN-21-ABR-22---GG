const mongoose = require('mongoose');

const Formulario = new mongoose.Schema({
    apreendido: {
        type: String,
        required: true
    },
    numcrr: {
        type: String,
        required: true
    },    
    placa:{
        type: String,
        required: true
    },
    guincheiro:{
        type: String,
        required: true
    },
    pfxguincho:{
        type: String,
        required: true
    },
    ftcrr:{
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model('formulario', Formulario);