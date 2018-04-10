'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _age = require('./Mutations/age');

var _age2 = _interopRequireDefault(_age);

var _area = require('./Mutations/area');

var _area2 = _interopRequireDefault(_area);

var _bloodGroup = require('./Mutations/bloodGroup');

var _bloodGroup2 = _interopRequireDefault(_bloodGroup);

var _campMaster = require('./Mutations/campMaster');

var _campMaster2 = _interopRequireDefault(_campMaster);

var _city = require('./Mutations/city');

var _city2 = _interopRequireDefault(_city);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
	name: 'RootMutation',
	fields: {
		addAgeType: _age2.default.add,
		addArea: _area2.default.add,
		addBloodGroup: _bloodGroup2.default.add,
		addCampMaster: _campMaster2.default.add,
		addCity: _city2.default.add
	}
});