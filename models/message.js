var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

var messageSchema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    creationDate: {type: String}
});

messageSchema.post('remove', function(doc){
    User.findById(doc.user, function(err, usr){
        // usr.messages.splice(usr.messages.indexOf(doc));
        usr.messages.pull(doc);
        usr.save();
    })
});
module.exports = mongoose.model('Message', messageSchema);