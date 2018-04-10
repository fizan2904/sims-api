'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _graphqlDate = require('graphql-date');

var _graphqlDate2 = _interopRequireDefault(_graphqlDate);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLInputObjectType({
	name: 'AddressInput',
	fields: function fields() {
		return {
			street: { type: _graphql.GraphQLString },
			area: {
				type: _graphql.GraphQLString
			},
			city: {
				type: _graphql.GraphQLString
			},
			district: {
				type: _graphql.GraphQLString
			},
			state: {
				type: _graphql.GraphQLString
			},
			country: {
				type: _graphql.GraphQLString
			},
			pincode: { type: _graphql.GraphQLString },
			phone: { type: _graphql.GraphQLString },
			email: { type: _graphql.GraphQLString }
		};
	}
});