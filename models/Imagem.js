const mongoose = require('mongoose');
const fs = require ('fs');
const path = require ('path'); 
const {promisify} = require ('util'); 

const Imagem = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    size: {
        type: String, required: true
    },
    key: {
        type: String, required: true
    },
    url: {
        type: String, required: true
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
})

Imagem.pre("remove", function(){
    return promisify (fs.unlink)(
        path.resolve(__dirname, "..","public","uploads", this.key)
    );
});

module.exports = mongoose.model('imagem', Imagem);




 
