var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({

	postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
	post:String,
	created: { type: Date, defauly: Date.now}

});

module.exports = mongoose.model('Business', BusinessSchema);