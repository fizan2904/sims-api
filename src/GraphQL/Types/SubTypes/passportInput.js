import {
	GraphQLString,
	GraphQLInputObjectType
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLInputObjectType({
	name: 'passportInput',
	fields: () => ({
		passportNo: { type: GraphQLString },
		issueDate: { type: GraphQLDate },
		expiryDate: { type: GraphQLDate },
		issuedAt: { type: GraphQLString },
		nationality: { type: GraphQLString }
	})
});