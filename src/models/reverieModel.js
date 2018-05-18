'use strice';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HostSchema = new Schema({
    robot: {
        type: object,
        required: 'Enter host attributes',
        properties: [{
            id: {
                type: string,
                required: 'unique id for a for a specific host'
            },
            date_added: {
                type: string,
                required: 'date added the the inventory system'
                    //default: Date.now
            },
            first_active: {
                type: string,
                required: "date the robot was first activated"
            },
            current_name: {
                type: string,
                required: 'name the host calls itself, first and last name'
            },
            height: {
                type: number,
                required: 'height, in inches'
            },
            weight: {
                type: number,
                required: 'weight, in pounds'
            },
            intelligence_metric: {
                type: number,
                required: 'scale of 1 to 20, where 20 is the max intelligence'
            }
        }]
    }
});

module.exports = mongoose.model('Hosts', HostSchema);