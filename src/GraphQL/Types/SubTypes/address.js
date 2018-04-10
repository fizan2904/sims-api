import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';
import mongoose from 'mongoose';

const AreaModel = mongoose.model('area');
const CityModel = mongoose.model('city');
const DistrictModel = mongoose.model('district');
const StateModel = mongoose.model('state');
const CountryModel = mongoose.model('country');

import AreaType from './../area';
import DistrictType from './../district';
import CityType from './../city';
import StateType from './../state';
import CountryType from './../country';

export default new GraphQLObjectType({
	name: 'Address',
	fields: () => ({
		street: { type: GraphQLString },
		area: { 
			type: GraphQLString 
		},
		areaData: {
			type: AreaType,
			resolve: async (parentValues) => {
				return await AreaModel.findOne({ _id: mongoose.mongo.ObjectId(parentValues.area) }).exec();
			}
		},
		city: { 
			type: GraphQLString 
		},
		cityData: { 
			type: CityType,
			resolve: async (parentValues) => {
				return await CityModel.findOne({ _id: mongoose.mongo.ObjectId(parentValues.city) }).exec();
			} 
		},
		district: { 
			type: GraphQLString 
		},
		districtData: {
			type: DistrictType,
			resolve: async (parentValues) => {
				return await DistrictModel.findOne({ _id: mongoose.mongo.ObjectId(parentValues.district) }).exec();
			}
		},
		state: { 
			type: GraphQLString 
		},
		stateData: {
			type: StateType,
			resolve: async (parentValues) => {
				return await StateModel.findOne({ _id: mongoose.mongo.ObjectId(parentValues.state) }).exec();
			}
		},
		country: { 
			type: GraphQLString 
		},
		countryData: {
			type: CountryType,
			resolve: async (parentValues) => {
				return await CountryModel.findOne({ _id: mongoose.mongo.ObjectId(parentValues.country) }).exec();
			}
		},
		pincode: { type: GraphQLString },
		phone: { type: GraphQLString },
		email: { type: GraphQLString }
	})
});