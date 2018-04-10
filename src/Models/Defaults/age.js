import mongoose from 'mongoose';

mongoose.model('age', 
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		name: {
			type: String,
			required: true
		},
		deleted: {
			type: Boolean,
			required: true,
			default: false
		}
	}, {
		timestamps: true
	})
);