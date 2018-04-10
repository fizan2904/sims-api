'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _graphqlDate = require('graphql-date');

var _graphqlDate2 = _interopRequireDefault(_graphqlDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
	name: 'passport',
	fields: function fields() {
		return {
			passportNo: { type: _graphql.GraphQLString },
			issueDate: { type: _graphqlDate2.default },
			expiryDate: { type: _graphqlDate2.default },
			issuedAt: { type: _graphql.GraphQLString },
			nationality: { type: _graphql.GraphQLString }
		};
	}
});