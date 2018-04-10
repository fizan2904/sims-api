import {
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt
} from 'graphql';
import StateType from './../Types/state';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: StateType,
		args: {
			countryId: { type: GraphQLString },
			countrySqlId: { type: GraphQLInt },
			name: { type: GraphQLString },
			blocked: { type: GraphQLBoolean },
			operatorId: { type: GraphQLString }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('State', {
					Name: args.name,
					CountryId: args.countrySqlId,
					StartDateTime: new Date().toISOString(),
					Blocked: (args.blocked) ? 1 : 0,
					operatorid: args.operatorId
				}, 'id');
				args.sqlId = sqlId;
				delete args.countrySqlId;
				return await insertMongo('state', args);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}