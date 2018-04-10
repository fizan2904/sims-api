'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _graphqlDate = require('graphql-date');

var _graphqlDate2 = _interopRequireDefault(_graphqlDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLObjectType({
	name: 'RefSourceDetail',
	fields: function fields() {
		return {
			_id: { type: _graphql.GraphQLString },
			sqlId: { type: _graphql.GraphQLString },
			refSourceId: { type: _graphql.GraphQLString },
			name: { type: _graphql.GraphQLString },
			blocked: { type: _graphql.GraphQLBoolean },
			addedBy: { type: _graphql.GraphQLString },
			modifiedBy: { type: _graphql.GraphQLString },
			domestic: { type: _graphql.GraphQLBoolean },
			domestic_per: { type: _graphql.GraphQLString },
			international_per: { type: _graphql.GraphQLString },
			validFrom: { type: _graphqlDate2.default },
			validTo: { type: _graphqlDate2.default },
			place: { type: _graphql.GraphQLString },
			address1: { type: _graphql.GraphQLString },
			address2: { type: _graphql.GraphQLString },
			panNo: { type: _graphql.GraphQLString },
			remarks: { type: _graphql.GraphQLString },
			code: { type: _graphql.GraphQLString },
			favourOf: { type: _graphql.GraphQLString },
			acNo: { type: _graphql.GraphQLString },
			ifsccode: { type: _graphql.GraphQLString },
			bankName: { type: _graphql.GraphQLString },
			simsCoordinator: { type: _graphql.GraphQLString },
			chequeDoctor: { type: _graphql.GraphQLString },
			createdAt: { type: _graphqlDate2.default },
			updatedAt: { type: _graphqlDate2.default }
		};
	}
});