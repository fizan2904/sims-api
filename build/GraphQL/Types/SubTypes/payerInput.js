'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLInputObjectType({
	name: 'payerInfoInput',
	fields: function fields() {
		return {
			name: { type: _graphql.GraphQLString },
			branch: { type: _graphql.GraphQLString },
			employeeId: { type: _graphql.GraphQLString },
			relation: {
				type: _graphql.GraphQLString
			},
			employeeName: { type: _graphql.GraphQLString },
			designation: { type: _graphql.GraphQLString },
			address: { type: _graphql.GraphQLString }
		};
	}
});