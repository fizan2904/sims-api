import {
	GraphQLString,
	GraphQLBoolean,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import CampMasterType from './../Types/campMaster';
import { insertSql, insertMongo } from './Helpers/insert';

export default {
	'add': {
		type: CampMasterType,
		args: {
			name: { type: GraphQLString },
			blocked: { type: GraphQLBoolean },
			addedBy: { type: GraphQLString }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('campmaster', {
					name: args.name,
					blocked: (args.blocked) ? 1 : 0,
					addedby: args.addedBy,
					addedon: new Date().toISOString()
				}, 'ID');
				args.sqlId = sqlId;
				return await insertMongo('campmaster', args);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}