import {
	GraphQLInputObjectType,
	GraphQLString
} from 'graphql';
import mongoose from 'mongoose';

export default new GraphQLInputObjectType({
	name: 'payerInfoInput',
	fields: () => ({
		name: { type: GraphQLString },
		branch: { type: GraphQLString },
		employeeId: { type: GraphQLString },
		relation: { 
			type: GraphQLString 
		},
		employeeName: { type: GraphQLString },
		designation: { type: GraphQLString },
		address: { type: GraphQLString }
	})
});