import {
	GraphQLString,
	GraphQLBoolean
} from 'graphql';
import PatientType from './../Types/patient';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';
import AddressInputType from './../Types/addressInput';
import PassportInputType from './../Types/passportInput';
import InsuranceInputType from './../Types/insuranceInput';
import PayerInputType from './../Types/payerInput';
import ReferenceInputType from './../Types/referenceInput';

export default {
	'add': {
		type: PatientType,
		args: {
			attachmentId: { type: GraphQLString },
			registrationNo: { type: GraphQLString },
			title: { type: GraphQLString },
			firstName: { type: GraphQLString },
			middleName: { type: GraphQLString },
			lastName: { type: GraphQLString },
			mothersMaidenName: { type: GraphQLString },
			fatherName: { type: GraphQLString },
			dob: { type: GraphQLString },
			age: { type: GraphQLString },
			ageType: { type: GraphQLString },
			sex: { type: GraphQLString },
			maritalStatus: { type: GraphQLString },
			education: { type: GraphQLString },
			occupation: { type: GraphQLString },
			presentAddress: { type: AddressInputType },
			permanentAddress: { type: AddressInputType },
			operatorId: { type: GraphQLString },
			passport: { type: PassportInputType },
			reference: { type: ReferenceInputType },
			vip: { type: GraphQLString },
			vipName: { type: GraphQLString },
			vipRemarks: { type: GraphQLString },
			insurance: { type: InsuranceInputType },
			payerInfo: { type: PayerInputType },
			issueAuthorityCode: { type: GraphQLString },
			regType: { type: GraphQLString },
			regAmount: { type: GraphQLString },
			cancelledBy: { type: GraphQLString },
			cancelledReason: { type: GraphQLString },
			branch: { type: GraphQLString },
			receiptType: { type: GraphQLString },
			modeOfPay: { type: GraphQLString },
			receiptNo: { type: GraphQLString }
		}
	}
}