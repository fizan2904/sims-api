import mongoose from 'mongoose';

mongoose.model('country', 
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
		},
		operatorId: {
			type: String
		}
	}, {
		timestamps: true
	})
);