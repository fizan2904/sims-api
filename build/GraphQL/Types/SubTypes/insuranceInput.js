'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _graphqlDate = require('graphql-date');

var _graphqlDate2 = _interopRequireDefault(_graphqlDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLInputObjectType({
	name: 'insuranceInput',
	fields: function fields() {
		return {
			insuranceName: { type: _graphql.GraphQLString },
			tpaName: { type: _graphql.GraphQLString },
			branch: { type: _graphql.GraphQLString },
			policyNo: { type: _graphql.GraphQLString },
			employeeName: { type: _graphql.GraphQLString },
			contactNo: { type: _graphql.GraphQLInt },
			person: { type: _graphql.GraphQLString },
			relation: { type: _graphql.GraphQLString },
			type: { type: _graphql.GraphQLString },
			ref: { type: _graphql.GraphQLString },
			issuedOn: { type: _graphqlDate2.default },
			expiryDate: { type: _graphqlDate2.default }
		};
	}
});