import mongoose from 'mongoose';

mongoose.model('campmaster',
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		name: {
			type: String,
			required: true
		},
		blocked: {
			type: Boolean,
			required: true,
			default: false
		},
		addedBy: {
			type: String
		}
	}, {
		timestamps: true
	})
);