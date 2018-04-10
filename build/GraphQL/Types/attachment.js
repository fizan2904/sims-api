'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _graphqlDate = require('graphql-date');

var _graphqlDate2 = _interopRequireDefault(_graphqlDate);

var _mssql = require('mssql');

var _mssql2 = _interopRequireDefault(_mssql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
	name: 'Attachment',
	fields: function fields() {
		return {
			userId: { type: _graphql.GraphQLString },
			fieldname: { type: _graphql.GraphQLString },
			originalname: { type: _graphql.GraphQLString },
			encoding: { type: _graphql.GraphQLString },
			mimetype: { type: _graphql.GraphQLString },
			destination: { type: _graphql.GraphQLString },
			filename: { type: _graphql.GraphQLString },
			path: { type: _graphql.GraphQLString },
			size: { type: _graphql.GraphQLString },
			attachmentType: { type: _graphql.GraphQLString },
			createdAt: { type: _graphqlDate2.default },
			updatedAt: { type: _graphqlDate2.default }
		};
	}
});