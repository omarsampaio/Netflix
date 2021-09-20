const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.post('/login', async (req,res) => {
    try{

        const credencias = req.body;
        const usuario = await Usuario.findOne(credencias);

        if (usuario) {
            res.json({error: false, usuario});
        } else {
            res.json({error: true, message: 'Email ou senha incorretas.'});
        }

    } catch (err) {
        res.json({error: true, message: erro.message})
    }
})

module.exports = router;
