import mongoose from 'mongoose';

mongoose.model('company',
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		name: {
			type: String,
			required: true
		},
		categoryId: {
			type: String
		},
		blocked: {
			type: Boolean,
			required: true,
			default: false
		},
		companyType: {
			type: String
		},
		taxIncluded: {
			type: Boolean,
			required: true,
			default: false
		}
	}, {
		timestamps: true
	})
);