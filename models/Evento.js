const mongoose = require( 'mongoose' )
const Schema   = mongoose.Schema;
const evento = new Schema({
    nombre : String,
    lugar : String,
    fecha : String,
    notas : String
})
module.exports = mongoose.model('Evento', evento);