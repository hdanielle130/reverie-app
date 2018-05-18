'use strict';

var mongoose = require('mongoose'),
    Host = mongoose.model('Hosts');

exports.list_all_hosts = function(req, res) {
    Host.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.create_a_host = function(req, res) {
    var new_task = new Host(req.body);
    new_task.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.view_a_host = function(req, res) {
    Host.findById(req.params.taskId, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update_a_host = function(req, res) {
    Host.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_host = function(req, res) {


    Host.remove({
        _id: req.params.taskId
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Host successfully deleted' });
    });
};