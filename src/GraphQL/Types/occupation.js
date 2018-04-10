import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
	name: 'Occupation',
	fields: () => ({
		_id: { type: GraphQLString },
		sqlId: { type: GraphQLString },
		name: { type: GraphQLString },
		blocked: { type: GraphQLBoolean },
		createdAt: { type: GraphQLDate },
		updatedAt: { type: GraphQLDate }
	})
});