import {
	GraphQLString,
	GraphQLBoolean,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import CountryType from './../Types/country';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: CountryType,
		args: {
			name: { type: GraphQLString },
			blocked: { type: GraphQLBoolean },
			operatorId: { type: GraphQLString },
			operatorSqlId: { type: GraphQLString }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('Country', {
					Name: args.name,
					StartDateTime: new Date().toISOString(),
					Blocked: (args.blocked) ? 1 : 0,
					operatorid: args.operatorSqlId,
				}, 'ID');
				args.sqlId = sqlId;
				const MongoArgs = await deleteKeys(['operatorSqlId']);
				return await insertMongo('country', MongoArgs);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}