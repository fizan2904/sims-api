import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean
} from 'graphql';
import sql from 'mssql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
	name: 'Age',
	fields: () => ({
		_id: { type: GraphQLString },
		sqlId: { type: GraphQLString },
		name: { type: GraphQLString },
		deleted: { type: GraphQLBoolean },
		createdAt: { type: GraphQLDate },
		updatedAt: { type: GraphQLDate }
	})
});