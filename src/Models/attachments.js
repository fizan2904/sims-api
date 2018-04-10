import mongoose from 'mongoose';

mongoose.model('attachments',
	mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		},
		fileType: [{
			type: String,
			enum: ['prescription', 'aadhar', 'identity', 'photo']
		}]
	}, {
		timestamps: true
	})
);