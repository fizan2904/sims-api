'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.model('patient', _mongoose2.default.Schema({
	sqlId: {
		type: String,
		required: true
	},
	attachmentId: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'attachments'
	},
	registrationNo: {
		type: String
	},
	title: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'title'
	},
	firstName: {
		type: String,
		required: true
	},
	middleName: {
		type: String
	},
	lastName: {
		type: String
	},
	mothersMaidenName: {
		type: String
	},
	fatherName: {
		type: String
	},
	dob: {
		type: Date
	},
	age: {
		type: Number
	},
	ageType: {
		type: String,
		enum: ['years', 'days', 'months']
	},
	sex: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'sex'
	},
	maritalStatus: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'maritalstatus'
	},
	education: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'education'
	},
	occupation: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'occupation'
	},
	presentAddress: {
		street: { type: String },
		area: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'area'
		},
		city: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'city'
		},
		district: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'district'
		},
		state: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'state'
		},
		country: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'country'
		},
		pincode: {
			type: String
		},
		phone: {
			type: Number
		},
		email: {
			type: String
		}
	},
	permanentAddress: {
		street: { type: String },
		area: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'area'
		},
		city: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'city'
		},
		district: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'district'
		},
		state: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'state'
		},
		country: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'country'
		},
		pincode: {
			type: String
		},
		phone: {
			type: Number
		},
		email: {
			type: String
		}
	},
	operatorId: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'operator'
	},
	passport: {
		passportNo: { type: String },
		issueDate: { type: Date },
		expiryDate: { type: Date },
		issuedAt: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'country'
		},
		nationality: {
			type: String
		}
	},
	reference: {
		source: { type: String },
		referedDoctorName: { type: String },
		address: {
			street: { type: String },
			area: {
				type: _mongoose2.default.Schema.Types.ObjectId,
				ref: 'area'
			},
			city: {
				type: _mongoose2.default.Schema.Types.ObjectId,
				ref: 'city'
			},
			district: {
				type: _mongoose2.default.Schema.Types.ObjectId,
				ref: 'district'
			},
			state: {
				type: _mongoose2.default.Schema.Types.ObjectId,
				ref: 'state'
			},
			country: {
				type: _mongoose2.default.Schema.Types.ObjectId,
				ref: 'country'
			},
			pincode: {
				type: String
			},
			phone: {
				type: Number
			},
			email: {
				type: String
			}
		},
		cellNo: {
			type: Number
		}
	},
	vip: Boolean,
	vipName: String,
	vipRemarks: String,
	insurance: {
		insuranceName: { type: String },
		tpaName: { type: String },
		branch: { type: String },
		policyNo: { type: String },
		employeeName: { type: String },
		contactNo: { type: Number },
		person: { type: String },
		relation: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'relation'
		},
		issuedOn: { type: Date },
		expiryDate: { type: Date }
	},
	payerInfo: {
		name: { type: String },
		branch: { type: String },
		employeeId: { type: String },
		relation: {
			type: _mongoose2.default.Schema.Types.ObjectId,
			ref: 'relation'
		},
		employeeName: { type: String },
		designation: { type: String },
		address: { type: String }
	},
	issueAuthorityCode: { type: String },
	regType: {
		type: String,
		enum: ['cash', 'credit']
	},
	regAmount: {
		type: Number
	},
	cancelledBy: {
		type: String
	},
	cancelledReason: {
		type: String
	},
	branch: {
		type: String
	},
	receiptType: {
		type: String
	},
	modeOfPay: {
		type: String
	},
	receiptNo: {
		type: String
	}
}, {
	timestamps: true
}));