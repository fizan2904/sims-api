import {
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';
import SexType from './../Types/sex';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: SexType,
		args: {
			name: { type: GraphQLString },
			blocked: { type: GraphQLString }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('SexType', {
					NAME: args.name,
					STARTDATETIME: new Date().toISOString(),
					Blocked: (args.blocked) ? 1 : 0
				}, 'ID');
				args.sqlId = sqlId;
				return await insertMongo('sex', args);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}