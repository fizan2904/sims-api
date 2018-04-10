import {
	GraphQLString,
	GraphQLBoolean,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import CompanyType from './../Types/company';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: CompanyType,
		args: {
			name: { type: GraphQLString },
			categoryId: { type: GraphQLString },
			categorySqlId: { type: GraphQLString },
			blocked: { type: GraphQLBoolean },
			companyType: { type: GraphQLString },
			taxIncluded: { type: GraphQLString }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('Company', {
					Name: args.name,
					CategoryId: args.categorySqlId,
					StartDateTime: new Date().toISOString(),
					Blocked: (args.blocked) ? 1 : 0,
					COMPANYTYPE: args.companyType,
					TaxIncluded: args.taxIncluded
				}, 'ID');
				args.sqlId = sqlId;
				const MongoArgs = await deleteKeys(['categorySqlId']);
				return await insertMongo('company', MongoArgs);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}