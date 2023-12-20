const express = require( 'express' )
const router = express.Router()
const AmigoServices = require('../services/AmigoServices')

router.get( '/listado',async ( req, res ) => {
        let amigos = await AmigoServices.getAllEventos();
        res.json({
            'amigos' : amigos
        })

    res.send( 'Listado de eventos' )
})
router.get( '/detalle/:id', async ( req, res ) => {
    try {
        const amigo = await AmigoServices.getEventoById(req.params.id);
        res.json({
            'amigo' : amigo
        })
    } catch(error) {
        res.json({
            'error':'No existe en id'
        })
    }
})

router.post('/registrar',async (req, res) =>{

    await AmigoServices.insertAmigo(req.body);
    res.json({
        'mensaje' : 'Registrado correctamente'
    })
})


module.exports = router