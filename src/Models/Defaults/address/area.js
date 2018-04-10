import mongoose from 'mongoose';

mongoose.model('area', 
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		name: {
			type: String,
			required: true
		},
		cityId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'city'
		},
		blocked: {
			type: Boolean,
			required: true,
			default: false
		},
		operatorId: {
			type: String
		},
		pincode: {
			type: String
		}
	}, {
		timestamps: true
	})
);