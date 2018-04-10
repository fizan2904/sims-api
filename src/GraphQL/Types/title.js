import {
	GraphQLObjectType,
	GraphQLBoolean,
	GraphQLString
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
	name: 'Title',
	fields: () => ({
		_id: { type: GraphQLString },
		sqlId: { type: GraphQLString },
		name: { type: GraphQLString },
		createdAt: { type: GraphQLDate },
		updatedAt: { type: GraphQLDate },
		blocked: { type: GraphQLBoolean }
	})
});