import mongoose from 'mongoose';

mongoose.model('education',
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		name: {
			type: String,
			required: true
		},
		addedBy: {
			type: String
		},
		updatedBy: {
			type: String
		},
		blocked: {
			type: Boolean,
			required: true,
			default: false
		}
	}, {
		timestamps: true
	})
);