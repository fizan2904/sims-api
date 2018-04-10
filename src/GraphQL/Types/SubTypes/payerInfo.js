import {
	GraphQLObjectType,
	GraphQLString
} from 'graphql';
import mongoose from 'mongoose';

const RelationModel = mongoose.model('relation');

import RelationType from './../relation';

export default new GraphQLObjectType({
	name: 'payerInfo',
	fields: () => ({
		name: { type: GraphQLString },
		branch: { type: GraphQLString },
		employeeId: { type: GraphQLString },
		relation: { 
			type: GraphQLString 
		},
		relationData: {
			type: RelationType,
			resolve: async (parentValues) => {
				return await RelationModel.findOne({ _id: mongoose.mongo.ObjectId(relation) }).exec();
			}
		},
		employeeName: { type: GraphQLString },
		designation: { type: GraphQLString },
		address: { type: GraphQLString }
	})
});