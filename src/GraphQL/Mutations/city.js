import {
	GraphQLString,
	GraphQLBoolean,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import CityType from './../Types/city';
import { insertSql, insertMongo, deleteKeys } from './Helpers/insert';

export default {
	'add': {
		type: CityType,
		args: {
			districtSqlId: { type: GraphQLString },
			districtId: { type: GraphQLString },
			stateSqlId: { type: GraphQLString },
			countrySqlId: { type: GraphQLString },
			name: { type: GraphQLString },
			blocked: { type: GraphQLBoolean },
			operatorSqlId: { type: GraphQLString },
			operatorId: { type: GraphQLString }
		},
		resolve: async (parentValues, args) => {
			try{
				const sqlId = await insertSql('City', {
					Districtid: args.districtSqlId,
					StateId: args.stateSqlId,
					CountryId: args.countrySqlId,
					Name: args.name,
					StartDateTime: new Date().toISOString(),
					blocked: (args.blocked) ? 1 : 0,
					operatorid: args.operatorSqlId
				});
				args.sqlId = sqlId;
				args.districtId = mongoose.mongo.ObjectId(districtId);
				const MongoArgs = await deleteKeys(args, ['districtSqlId', 'stateSqlId', 'countrySqlId', 'operatorSqlId']);
				return await insertMongo('city', MongoArgs);
			}catch(e){
				throw new Error(e);
			}
		}
	}
}