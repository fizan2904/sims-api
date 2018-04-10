import {
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';
import RelationType from './../Types/relation';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: RelationType,
		args: {
			name: { type: GraphQLString },
			blocked: { type: GraphQLBoolean }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('Relation', {
					Name: args.name,
					startdatetime: new Date().toISOString(),
					Blocked: (args.blocked) ? 1 : 0
				}, 'ID');
				args.sqlId = sqlId;
				return await insertMongo('relation', args);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}