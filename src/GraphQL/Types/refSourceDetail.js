import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLBoolean
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new GraphQLObjectType({
	name: 'RefSourceDetail',
	fields: () => ({
		_id: { type: GraphQLString },
		sqlId: { type: GraphQLString },
		refSourceId: { type: GraphQLString },
		name: { type: GraphQLString },
		blocked: { type: GraphQLBoolean },
		addedBy: { type: GraphQLString },
		modifiedBy: { type: GraphQLString },
		domestic: { type: GraphQLBoolean },
		domestic_per: { type: GraphQLString },
		international_per: { type: GraphQLString },
		validFrom: { type: GraphQLDate },
		validTo: { type: GraphQLDate },
		place: { type: GraphQLString },
		address1: { type: GraphQLString },
		address2: { type: GraphQLString },
		panNo: { type: GraphQLString },
		remarks: { type: GraphQLString },
		code: { type: GraphQLString },
		favourOf: { type: GraphQLString },
		acNo: { type: GraphQLString },
		ifsccode: { type: GraphQLString },
		bankName: { type: GraphQLString },
		simsCoordinator: { type: GraphQLString },
		chequeDoctor: { type: GraphQLString },
		createdAt: { type: GraphQLDate },
		updatedAt: { type: GraphQLDate }
	})
});