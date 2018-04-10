import {
	GraphQLString,
	GraphQLBoolean,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import OccupationType from './../Types/occupation';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: OccupationType,
		args: {
			name: { type: GraphQLString },
			blocked: { type: GraphQLBoolean }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('occupation', {
					Name: args.name,
					startdatetime: new Date().toISOString(),
					Blocked: (args.blocked) ? 1 : 0
				}, 'ID');
				args.sqlId = sqlId;
				return await insertMongo('occupation', args);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}