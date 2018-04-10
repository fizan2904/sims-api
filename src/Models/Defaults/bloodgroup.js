import mongoose from 'mongoose';

mongoose.model('bloodgroup', 
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
			required: true
		}
	}, {
		timestamps: true
	})
);