import {
	GraphQLString,
	GraphQLBoolean,
	GraphQLList
} from 'graphql';
import mongoose from 'mongoose';
import AgeType from './../Types/age';

const AgeModel = mongoose.model('age');

export default {
	type: new GraphQLList(AgeType),
	args: {
		all: { type: GraphQLBoolean },
		_id: { type: GraphQLString },
		name: { type: GraphQLString }
	},
	resolve: async (parentValues, args) => {
		try{
			if(args.all){				
				return await AgeModel.find().exec();
			}else if(args._id){
				return await AgeModel.find({ _id: mongoose.mongo.ObjectId(args._id) }).exec();
			}else if(args.name){
				return await AgeModel.find({ name: args.name }).exec();
			}else{
				throw new Error('Insufficient params');
			}
		}catch(e){
			throw new Error(e);
		}
	}
}