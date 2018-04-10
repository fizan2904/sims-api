import mongoose from 'mongoose';

mongoose.model('title',
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		name: {
			type: String,
			required: true,
			unique: true
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