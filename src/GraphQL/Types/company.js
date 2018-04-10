import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
	name: 'Company',
	fields: () => ({
		_id: { type: GraphQLString },
		sqlId: { type: GraphQLString },
		categoryId: { type: GraphQLString },
		companyType: { type: GraphQLString },
		taxIncluded: { type: GraphQLBoolean },
		name: { type: GraphQLString },
		blocked: { type: GraphQLBoolean },
		createdAt: { type: GraphQLDate },
		updatedAt: { type: GraphQLDate }
	})
});