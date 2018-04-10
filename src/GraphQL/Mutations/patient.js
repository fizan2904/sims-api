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
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('Patient', {
					REGISTRATIONNO: args.registrationNo,
					REGDATETIME: new Date().toISOString(),
					TITLE: args.title,
					FIRSTNAME: args.firstName,
					MIDDLENAME: args.middleName,
					LASTNAME: args.lastName,
					MOTHERSMAIDENNAME: args.mothersMaidenName,
					DATEOFBIRTH: args.dob,
					AGE: args.age,
					AGETYPE: args.ageType,
					SEX: args.sex,
					MARITALSTATUS: args.maritalStatus,
					EDUCATION: args.education,
					OCCUPATION: args.occupation,
					PStreet: args.presentAddress.street,
					PArea: args.presentAddress.area,
					PCity: args.presentAddress.city,
					PState: args.presentAddress.state,
					PPinCode: args.presentAddress.pincode,
					PPhone: args.presentAddress.phone,
					PEmail: args.presentAddress.email,
					HOWSOURCE: args.reference.source,
					FEEPAID: 0,
					CONSCENTSIGNED: 1,
					OPERATORID: args.operatorId,
					INDIAN: (args.indian) ? 1 : 0,
					COUNTRY: args.passport.nationality,
					PASSPORTNO: args.passport.passportNo,
					ISSUEDATE: (args.passport.issueDate) ? new Date(args.passport.issueDate).toISOString() : null,
					EXPIRYDATE: (args.passport.expiryDate) ? new Date(args.passport.expiryDate).toISOString() : null,
					FATHERSNAME: args.fathername,
					ReferredDocName: args.reference.source,
					REFERREDDOCCITY: args.reference.address.city,
					ReferredDocState: args.reference.address.state,
					ReferredDocPinCode: args.reference.address.pincode,
					ReferredDocPhone: args.reference.address.phone,
					ReferredDocEmail: args.reference.address.email,
					FREE_REASON: (args.freeReason) ? args.freeReason : null,
					INSURANCE: args.insuranceId,
					DELETED: 0,
					DEPTID: 0,
					VIP: 0,
					ISSUEAUTHORITYCODE: (args.issueAuthorityCode) ? args.issueAuthorityCode : null,
					PASSWORD: null,
					STATIONID: null,
					VIPREMARKS: args.vipRemarks,
					CANCELREASON: args.cancelledreason,
					pdistrict: args.presentAddress.district,
					pcountry: args.presentAddress.country,
					PerStreet: args.permanentAddress.street,
					PerArea: args.permanentAddress.area,
					PerCITY: args.permanentAddress.city,
					PERSTATE: args.permanentAddress.state,
					perdistrict: args.permanentAddress.district,
					PerCountry: args.permanentAddress.country,
					PerPINCODE: args.permanentAddress.pincode,
					PerPhone: args.permanentAddress.phone,
					PerEMail: args.permanentAddress.email,
					PASSPORTNATIONALITY: args.passport.nationality,
					SIGNTAKEN: 1,
					REGTYPE: args.regType,
					vipname: args.vipname,
					REGAMT: args.regAmount,
					cancelledreason: args.cancelledreason,
					datetime: new Date().toISOString(),
					branch: (args.branch) ? args.branch : null,
					receipttype: args.receipttype,
					modeofpay: args.modeOfPay,
					receiptno: args.receiptNo,
					amount: args.regAmount,
					dobflag: (args.dobflag) ? 1 : 0,
					instype: args.insurance.type,
					insself: 0,
					inscompanyid: 
					insempname
					insrelation
					instpa
					insbranch
					inspolicyno
					insissuedate
					insexpdate
					inscontno
					inscontperson
					perdoorno
					payempno
					paydes
					payempname
					payrelation
					insinsid
					sameaddress
					campid
				},'REGISTRATIONNO');
			}catch(e){
				throw new Error(e);
			}
		}
	}
}