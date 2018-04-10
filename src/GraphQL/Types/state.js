import {
	GraphQLObjectType,
	GraphQLBoolean,
	GraphQLString
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
	name: 'State',
	fields: () => ({
		_id: { type: GraphQLString },
		sqlId: { type: GraphQLString },
		countryId: { type: GraphQLString },
		name: { type: GraphQLString },
		createdAt: { type: GraphQLString },
		updatedAt: { type: GraphQLString },
		blocked: { type: GraphQLBoolean },
		operatorId: { type: GraphQLString },
	})
});