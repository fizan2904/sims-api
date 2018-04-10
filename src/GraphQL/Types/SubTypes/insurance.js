import {
	GraphQLString,
	GraphQLObjectType,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';
import mongoose from 'mongoose';

const RelationModel = mongoose.model('relation');

import RelationType from './../relation';

export default new GraphQLObjectType({
	name: 'insurance',
	fields: () => ({
		insuranceName: { type: GraphQLString },
		tpaName: { type: GraphQLString },
		branch: { type: GraphQLString },
		policyNo: { type: GraphQLString },
		employeeName: { type: GraphQLString },
		contactNo: { type: GraphQLInt },
		person: { type: GraphQLString },
		relation: { 
			type: GraphQLString 
		},
		relationData: {
			type: RelationType,
			resolve: async (parentValues) => {
				return await RelationModel.findOne({ _id: mongoose.mongo.ObjectId(parentValues.relation) }).exec();
			}
		},
		issuedOn: { type: GraphQLDate },
		expiryDate: { type: GraphQLDate }
	})
});