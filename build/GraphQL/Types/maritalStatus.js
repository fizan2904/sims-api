'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _graphqlDate = require('graphql-date');

var _graphqlDate2 = _interopRequireDefault(_graphqlDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
	name: 'MaritalStatus',
	fields: function fields() {
		return {
			_id: { type: _graphql.GraphQLString },
			sqlId: { type: _graphql.GraphQLString },
			name: { type: _graphql.GraphQLString },
			blocked: { type: _graphql.GraphQLBoolean },
			createdAt: { type: _graphqlDate2.default },
			updatedAt: { type: _graphqlDate2.default }
		};
	}
});