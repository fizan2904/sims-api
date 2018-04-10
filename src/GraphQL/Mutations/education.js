import {
	GraphQLString,
	GraphQLBoolean,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import EducationType from './../Types/education';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: EducationType,
		args: {
			name: { type: GraphQLString },
			addedBy: { type: GraphQLString },
			updatedBy: { type: GraphQLString },
			blocked: { type: GraphQLBoolean }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('Education', {
					name: args.name,
					StartDateTime: new Date().toISOString(),
					LastUpdated: new Date().toISOString(),
					addedby: args.addedBy,
					updatedby: args.updatedBy,
					Blocked: (args.blocked) ? 1 : 0,
				}, 'ID');
				args.sqlId = sqlId;
				return await insertMongo('education', args);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}