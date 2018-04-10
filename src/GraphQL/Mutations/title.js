import {
	GraphQLString,
	GraphQLBoolean
} from 'graphql';
import TitleType from './../Types/title';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: TitleType,
		args: {
			name: { type: GraphQLString },
			blocked: { type: GraphQLBoolean }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('Title', {
					Name: args.name,
					STARTDATETIME: new Date().toISOString(),
					Blocked: (args.blocked) ? 1 : 0
				}, 'ID');
				args.sqlId = sqlId;
				return await insertMongo('title', args);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}