import {
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';
import AreaType from './../Types/area';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: AreaType,
		args: {
			name: { type: GraphQLString },
			cityId: { type: GraphQLString },
			sqlCityId: { type: GraphQLInt },
			blocked: { type: GraphQLBoolean },
			operatorId: { type: GraphQLString },
			sqlOperatorId: { type: GraphQLInt },
			pincode: { type: GraphQLString }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('Area', { 
					name: args.name, 
					blocked: (args.blocked) ? 1 : 0,
					cityid: args.sqlCityId,
					operatorid: args.sqlOperatorId,
					pincode: args.pincode,
					startdatetime: new Date().toISOString()
				}, 'ID');
				args.sqlId = sqlId;
				const MongoArgs = await deleteKeys(args, ['sqlCityId', 'sqlOperatorId']);
				return await insertMongo('area', MongoArgs);
			}catch(e){
				throw new Error(e);
			}
		}
	}
};