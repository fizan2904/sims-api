'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _age = require('./Queries/age');

var _age2 = _interopRequireDefault(_age);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		AgeQuery: _age2.default
	}
});