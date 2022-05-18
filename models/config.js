const multer = require('multer');
const path = require('path'); 
const aws = require ('aws-sdk');
const multerS3 = require('multer-s3');

module.exports = {
    dest: path.resolve(__dirname, "..","public","uploads"),
    storage:  multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..","public","uploads"));
        },
        filename: (req, file, cb) =>{
        console.log(file);
        file.key=Date.now().toString()+ "_CRR_GG_" + file.originalname;
        cb(null, file.key)
        }
        
        
    }),
    limits: {
        fileSize: (2 * 1024 * 1024),

    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];        
        if (allowedMimes.includes(file.mimetype)) {
            cb (null, true);
        } else {
            cb(new Error ('Tipo de Arquivo Invalido'));
        }

    },
    /*
    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'pekrul01',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            console.log(file);
            file.key=Date.now().toString()+ "_CRR_GG_" + file.originalname;
            cb(null, file.key)}
    }),*/
};