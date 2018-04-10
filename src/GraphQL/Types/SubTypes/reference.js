import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';

import AddressType from './address';

export default new GraphQLObjectType({
	name: 'reference',
	fields: () => ({
		source: { type: GraphQLString },
		referedDoctorName: { type: GraphQLString },
		address: { type: AddressType },
		cellNo: { type: GraphQLInt }
	})
});