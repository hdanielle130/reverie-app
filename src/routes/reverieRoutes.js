'use strict';
module.exports = function(app) {
    var robotInventory = require('../../controllers/reverieController');

    // todoList Routes
    app.route('/reverie_robots')
        .get(robotInventory.list_all_hosts)
        .post(robotInventory.create_a_host);


    app.route('/reverie_robots/:taskId')
        .get(robotInventory.read_a_host)
        .put(robotInventory.update_a_host)
        .delete(robotInventory.delete_a_host);
};