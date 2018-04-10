import mongoose from 'mongoose';

mongoose.model('district',
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		name: {
			type: String,
			required: true
		},
		stateId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'state'
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