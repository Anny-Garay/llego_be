const Amigo = require('../models/Amigo.js')

exports.getAllEventos = async() => {
    return await Amigo.find()
}

exports.getEventoById = async(id) => {
    return await Amigo.findById(id);
}

exports.insertAmigo = async(data) => {
    let amigo = new Amigo(data);
    return await amigo.save();
}