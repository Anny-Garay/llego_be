const mongoose = require( 'mongoose' )
const Schema   = mongoose.Schema;
const amigo = new Schema({
    nombre_completo : String,
    telefono : String,
    cumpleanos : String
})
module.exports = mongoose.model('Amigo', amigo);