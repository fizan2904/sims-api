'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _graphqlDate = require('graphql-date');

var _graphqlDate2 = _interopRequireDefault(_graphqlDate);

var _addressInput = require('./addressInput');

var _addressInput2 = _interopRequireDefault(_addressInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLInputObjectType({
	name: 'referenceInput',
	fields: function fields() {
		return {
			source: { type: _graphql.GraphQLString },
			referedDoctorName: { type: _graphql.GraphQLString },
			address: { type: _addressInput2.default },
			cellNo: { type: _graphql.GraphQLInt }
		};
	}
});