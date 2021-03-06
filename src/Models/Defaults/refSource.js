import mongoose from 'mongoose';

mongoose.model('refsource',
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
		}
	}, {
		timestamps: true
	})
);