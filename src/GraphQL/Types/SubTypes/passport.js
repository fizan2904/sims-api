import {
	GraphQLString,
	GraphQLObjectType
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
	name: 'passport',
	fields: () => ({
		passportNo: { type: GraphQLString },
		issueDate: { type: GraphQLDate },
		expiryDate: { type: GraphQLDate },
		issuedAt: { type: GraphQLString },
		nationality: { type: GraphQLString }
	})
});