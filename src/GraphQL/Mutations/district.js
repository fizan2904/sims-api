import {
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';
import DistrictType from './../Types/district';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: DistrictType,
		args: {
			name: { type: GraphQLString },
			stateId: { type: GraphQLString },
			stateSqlId: { type: GraphQLInt },
			blocked: { type: GraphQLBoolean },
			operatorId: { type: GraphQLString },
			operatorSqlId: { type: GraphQLInt },
			countrySqlId: { type: GraphQLInt },
			deleted: { type: GraphQLBoolean },
			blocked: { type: GraphQLBoolean },
			operatorId: { type: GraphQLString }
			operatorSqlId: { type: GraphQLInt }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('district', {
					StateId: args.StateSqlId,
					CountryId: args.CountrySqlId,
					Name: args.name,
					StartDateTime: new Date().toISOString(),
					Deleted: (args.deleted) ? 1 : 0,
					BLOCKED: (args.blocked) ? 1 : 0,
					operatorid: args.operatorSqlid
				}, 'ID');
				args.sqlId = sqlId;
				args.stateId = mongoose.mongo.ObjectId(stateId);
				args.operatorId = mongoose.mongo.ObjectId(operatorId);
				const MongoArgs = await deleteKeys(['stateSqlId', 'operatorSqlId', 'countrySqlId']);
				return await insertMongo('district', MongoArgs);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}