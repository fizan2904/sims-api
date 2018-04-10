import mongoose from 'mongoose';

mongoose.model('refsourcedetail',
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		refSourceId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'refsource'
		},
		name: {
			type: String,
			required: true
		},
		blocked: {
			type: Boolean,
			required: true,
			default: false
		},
		addedBy: {
			type: String
		},
		modifiedBy: {
			type: String
		},
		domestic: {
			type: Boolean,
			required: true,
			default: false
		},
		domestic_per: {
			type: String
		},
		international_per: {
			type: String
		},
		validFrom: {
			type: Date
		},
		validTo: {
			type: Date
		},
		place: {
			type: String
		},
		address1: {
			type: String
		},
		address2: {
			type: String
		},
		panNo: {
			type: String
		},
		remarks: {
			type: String
		},
		code: {
			type: String
		},
		favourOf: {
			type: String
		},
		accNo: {
			type: String
		},
		ifsccode: {
			type: String
		},
		bankName: {
			type: String
		},
		simsCoordinator: {
			type: String
		},
		chequeDoctor: {
			type: String
		}
	}, {
		timestamps: true
	})
)