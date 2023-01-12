'use strict'

const controller = require('../controllers/appController');

module.exports = (app) => {
    app.route('/root').get(controller.root);

}