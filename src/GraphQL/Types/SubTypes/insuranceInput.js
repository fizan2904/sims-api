import {
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLInputObjectType({
	name: 'insuranceInput',
	fields: () => ({
		insuranceName: { type: GraphQLString },
		tpaName: { type: GraphQLString },
		branch: { type: GraphQLString },
		policyNo: { type: GraphQLString },
		employeeName: { type: GraphQLString },
		contactNo: { type: GraphQLInt },
		person: { type: GraphQLString },
		relation: { type: GraphQLString },
		type: { type: GraphQLString },
		ref: { type: GraphQLString },
		issuedOn: { type: GraphQLDate },
		expiryDate: { type: GraphQLDate }
	})
});