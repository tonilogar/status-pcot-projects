const { Schema, model } = require('mongoose');

//
const ProjectSchema = new Schema({
    projectName: { type: String, required: true }
});

module.exports = model('project', ProjectSchema);