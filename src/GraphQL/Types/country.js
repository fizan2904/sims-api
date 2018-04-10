import {
	GraphQLObjectType,
	GraphQLBoolean,
	GraphQLString
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
	name: 'Country',
	fields: () => ({
		_id: { type: GraphQLString },
		sqlId: { type: GraphQLString },
		name: { type: GraphQLString },
		blocked: { type: GraphQLBoolean },
		operatorId: { type: GraphQLString },
		createdAt: { type: GraphQLDate },
		updatedAt: { type: GraphQLDate }
	})
});