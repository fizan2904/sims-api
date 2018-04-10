'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _Mutations = require('./Mutations');

var _Mutations2 = _interopRequireDefault(_Mutations);

var _Queries = require('./Queries');

var _Queries2 = _interopRequireDefault(_Queries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLSchema({
	query: _Queries2.default,
	mutation: _Mutations2.default
});