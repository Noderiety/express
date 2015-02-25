// The Thread model

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    threadSchema;

threadSchema = new Schema({
    title:  {type: String, required: true},
    postdate: {type: Date, default: Date.now},
    author: {type: String, default: 'Anon'}
});

module.exports = mongoose.model('Thread', threadSchema);
