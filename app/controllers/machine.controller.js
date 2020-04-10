const Machine = require('../models/machine')

// crear maquina
exports.create = (req, res) => {
        // Validate request
        if (!req.body.name) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
    
        const machine = new Machine({
            name: req.body.name,
            category: req.body.category,
            hp: req.body.hp,
            challenge_level: req.body.callenge_level
        })
    
        machine.save()
            .then(data => res.send(data))
            .catch(err => res.status(500).send({
                message: err.message || 'Ocurrió un error mientras guardaba Machine'
            }))
}

exports.findAll = (req, res) => {
    Machine.find()
        .then(machines => res.send(machines))
        .catch(err => res.status(500).send(
            {
                message: err.message || "Ocurrió un error al consultar Machines"
            }
        ))
}
