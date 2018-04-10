import {
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';
import RefSourceDetailType from './../Types/refSourceDetail';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: RefSourceDetailType,
		args: {
			refSourceId: { type: GraphQLString },
			refSourceSqlId: { type: GraphQLInt },
			name: { type: GraphQLString },
			blocked: { type: GraphQLBoolean },
			addedBy: { type: GraphQLString },
			modifiedBy: { type: GraphQLString },
			domestic: { type: GraphQLBoolean },
			domestic_per: { type: GraphQLString },
			international_per: { type: GraphQLString },
			validFrom: { type: GraphQLDate },
			validTo: { type: GraphQLDate },
			place: { type: GraphQLString },
			address1: { type: GraphQLString },
			address2: { type: GraphQLString },
			panNo: { type: GraphQLString },
			remarks: { type: GraphQLString },
			code: { type: GraphQLString },
			favourOf: { type: GraphQLString },
			accNo: { type: GraphQLString },
			ifsccode: { type: GraphQLString },
			bankName: { type: GraphQLString },
			simsCoordinator: { type: GraphQLString },
			chequeDoctor: { type: GraphQLString }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('RefSourceDetails', {
					Refsourceid: args.refsourceSqlid,
					name: args.name,
					blocked: (args.blocked) ? 1 : 0,
					addedby: args.addedby,
					datetime: new Date().toISOString(),
					modifiedby: args.modifiedby,
					domestic: (args.domestic) ? 1 : 0,
					internation: (args.domestic) ? 0 : 1,
					domestic_per: args.domestic_per,
					international_per: args.international_per,
					validfrom: new Date(args.validfrom).toISOString(),
					validto: new Date(args.validto).toISOString(),
					place: args.place,
					address1: args.address1,
					address2: args.address2,
					panno: args.panno,
					remarks: args.remarks,
					code: args.code,
					favourof: args.favourOf,
					acno: args.accNo,
					ifsccode: args.ifsccode,
					bankname: args.bankName,
					simscoordinator: args.simsCoordinator,
					chequedoctor: args.chequeDoctor
				},'ID');
				args.sqlId = sqlId;
				args.RefsourceId = mongoose.mongo.ObjectId(args.refSourceId);
				delete args.refSourceSqlId;
				return await insertMongo('refsourcedetail', args);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}