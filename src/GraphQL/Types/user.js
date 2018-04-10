import {
	GraphQLObjectType,
	GraphQLString
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		_id: { type: GraphQLString },
		username: { type: GraphQLString },
		createdAt: { type: GraphQLDate},
		updatedAt: { type: GraphQLDate }
	})
});