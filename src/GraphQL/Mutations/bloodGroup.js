import {
	GraphQLString,
	GraphQLBoolean,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import BloodGroupType from './../Types/bloodGroup';
import { insertSql, insertMongo } from './Helpers/insert';

export default {
	'add': {
		type: BloodGroupType,
		args: {
			name: { type: GraphQLString },
			blocked: { type: GraphQLBoolean }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('bloodgroup', { 
					Name: args.name, 
					Blocked: (args.blocked) ? 1 : 0,
				}, 'id');
				args.sqlId = sqlId;
				return await insertMongo('bloodgroup', args);
			}catch(e){
				throw new Error(e);
			}
		}
	}
};