import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
	name: 'City',
	fields: () => ({
		_id: { type: GraphQLString },
		sqlId: { type: GraphQLString },
		name: { type: GraphQLString },
		blocked: { type: GraphQLBoolean },
		operatorId: { type: GraphQLString },
		districtId: { type: GraphQLString },
		createdAt: { type: GraphQLDate },
		updatedAt: { type: GraphQLDate }
	})
});