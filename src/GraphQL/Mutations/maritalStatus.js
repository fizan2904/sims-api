import {
	GraphQLString,
	GraphQLBoolean,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import MaritalStatusType from './../Types/maritalstatus';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: MaritalStatusType,
		args: {
			name: { type: GraphQLString },
			blocked: { type: GraphQLBoolean }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('MARITALSTATUS', {
					Name: args.name,
					STARTDATETIME: new Date().toISOString(),
					Blocked: (args.blocked) ? 1 : 0
				}, 'ID');
				args.sqlId = sqlId;
				return await insertMongo('maritalstatus', args);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}