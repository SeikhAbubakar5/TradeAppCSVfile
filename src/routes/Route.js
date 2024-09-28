const express = require('express');
const router = express.Router();
const multer = require('multer');
const tradeController = require('../controller/controller');


const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads");
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
})

const upload = multer({ storage, });

// Route to upload CSV file
router.post('/upload', upload.single('file'), tradeController.uploadCSV);

// Route to get balance
router.post('/balance', tradeController.getBalanceTS);

module.exports = router;
