import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';
import mongoose from 'mongoose';
import sql from 'mssql';

const PatientModel = mongoose.model('patient');

import AddressType from './SubTypes/address';
import PassportType from './SubTypes/passport';
import ReferenceType from './SubTypes/reference';
import InsuranceType from './SubTypes/insurance';
import PayerInfoType from './SubTypes/payerInfo';

export default new GraphQLObjectType({
	name: 'Patient',
	fields: () => ({
		_id: { type: GraphQLString },
		registrationNo: { type: GraphQLString },
		title: { type: GraphQLString },
		firstName: { type: GraphQLString },
		middleName: { type: GraphQLString },
		lastName: { type: GraphQLString },
		mothersMaidenName: { type: GraphQLString },
		fatherName: { type: GraphQLString },
		dob: { type: GraphQLDate },
		age: { type: GraphQLInt },
		ageType: { type: GraphQLString },
		sex: { type: GraphQLString },
		maritalStatus: { type: GraphQLString },
		education: { type: GraphQLString },
		occupation: { type: GraphQLString },
		presentAddress: { type: AddressType },
		permanentAddress: { type: AddressType },
		operatorId: { type: GraphQLString },
		passport: { type: PassportType },
		reference: { type: ReferenceType },
		vip: { type: GraphQLBoolean },
		vipName: { type: GraphQLString },
		vipRemarks: { type: GraphQLString },
		insurance: { type: InsuranceType },
		payerInfo: { type: PayerInfoType },
		issueAuthorityCode: { type: GraphQLString },
		regType: { type: GraphQLString },
		regAmount: { type: GraphQLInt },
		cancelledBy: { type: GraphQLString },
		cancelledReason: { type: GraphQLString },
		branch: { type: GraphQLString },
		receiptType: { type: GraphQLString },
		modeOfPay: { type: GraphQLString },
		receiptNo: { type: GraphQLString }
	})
});