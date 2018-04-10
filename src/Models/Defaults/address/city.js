import mongoose from 'mongoose';

mongoose.model('city',
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		name: {
			type: String,
			required: true
		},
		districtId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'district'
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