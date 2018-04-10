import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';

import AddressInputType from './addressInput';

export default new GraphQLInputObjectType({
	name: 'referenceInput',
	fields: () => ({
		source: { type: GraphQLString },
		referedDoctorName: { type: GraphQLString },
		address: { type: AddressInputType },
		cellNo: { type: GraphQLInt }
	})
});