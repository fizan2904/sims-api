import mongoose from 'mongoose';

mongoose.model('patient',
	mongoose.Schema({
		sqlId: { 
			type: String, 
			required: true 
		},
		attachmentId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'attachments'
		},
		registrationNo: {
			type: String
		},
		title: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'title'
		},
		firstName: {
			type: String,
			required: true
		},
		middleName: {
			type: String,
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
			type: mongoose.Schema.Types.ObjectId,
			ref: 'sex'
		},
		maritalStatus: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'maritalstatus'
		},
		education: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'education'
		},
		occupation: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'occupation'
		},
		presentAddress: {
			street: { type: String },
			area: { 
				type: mongoose.Schema.Types.ObjectId,
				ref: 'area'
			},
			city: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'city'
			},
			district: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'district'
			},
			state: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'state'
			},
			country: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'country'
			},
			pincode: {
				type: String,
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
				type: mongoose.Schema.Types.ObjectId,
				ref: 'area'
			},
			city: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'city'
			},
			district: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'district'
			},
			state: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'state'
			},
			country: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'country'
			},
			pincode: {
				type: String,
			},
			phone: {
				type: Number
			},
			email: {
				type: String
			}
		},
		operatorId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'operator'
		},
		passport: {
			passportNo: { type: String },
			issueDate: { type: Date },
			expiryDate: { type: Date },
			issuedAt: {
				type: mongoose.Schema.Types.ObjectId,
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
					type: mongoose.Schema.Types.ObjectId,
					ref: 'area'
				},
				city: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'city'
				},
				district: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'district'
				},
				state: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'state'
				},
				country: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'country'
				},
				pincode: {
					type: String,
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
			person : { type: String },
			relation: {
				type: mongoose.Schema.Types.ObjectId,
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
				type: mongoose.Schema.Types.ObjectId,
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
			type: Number,
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
	})
);