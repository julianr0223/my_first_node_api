module.exports = (app) => {
    const machineController = require('../controllers/machine.controller')

    app.post('/machines', machineController.create)

    app.get('/machines', machineController.findAll)
}