import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';
import mongoose from 'mongoose';

export default new GraphQLInputObjectType({
	name: 'AddressInput',
	fields: () => ({
		street: { type: GraphQLString },
		area: { 
			type: GraphQLString 
		},
		city: { 
			type: GraphQLString 
		},
		district: { 
			type: GraphQLString 
		},
		state: { 
			type: GraphQLString 
		},
		country: { 
			type: GraphQLString 
		},
		pincode: { type: GraphQLString },
		phone: { type: GraphQLString },
		email: { type: GraphQLString }
	})
});