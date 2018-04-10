import {
	GraphQLString,
	GraphQLBoolean,
	GrpahQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';
import AgeType from './../Types/age';
import { insertSql, insertMongo } from './Helpers/insert';

export default {
	'add': {
		type: AgeType,
		args: {
			name: { type: GraphQLString },
			deleted: { type: GraphQLBoolean }
		},
		resolve: async (parentValues, args) => {
			try{
				return await insertMongo('age', {
					sqlId: await insertSql('ageType', { 
						name: args.name, Deleted: (args.deleted) ? 1 : 0 
					}, 'ID'),
					name: args.name,
					Deleted: args.deleted
				});
			}catch(e){
				throw new Error(e);
			}
		}
	}
};