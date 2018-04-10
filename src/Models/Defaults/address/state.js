import mongoose from 'mongoose';

mongoose.model('state', 
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		name: {
			type: String,
			required: true
		},
		countryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'country'
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