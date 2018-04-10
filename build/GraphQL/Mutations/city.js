'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphql = require('graphql');

var _graphqlDate = require('graphql-date');

var _graphqlDate2 = _interopRequireDefault(_graphqlDate);

var _city = require('./../Types/city');

var _city2 = _interopRequireDefault(_city);

var _insert = require('./Helpers/insert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	'add': {
		type: _city2.default,
		args: {
			districtSqlId: { type: _graphql.GraphQLString },
			districtId: { type: _graphql.GraphQLString },
			stateSqlId: { type: _graphql.GraphQLString },
			countrySqlId: { type: _graphql.GraphQLString },
			name: { type: _graphql.GraphQLString },
			blocked: { type: _graphql.GraphQLBoolean },
			operatorSqlId: { type: _graphql.GraphQLString },
			operatorId: { type: _graphql.GraphQLString }
		},
		resolve: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parentValues, args) {
				var sqlId, MongoArgs;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return (0, _insert.insertSql)('City', {
									Districtid: args.districtSqlId,
									StateId: args.stateSqlId,
									CountryId: args.countrySqlId,
									Name: args.name,
									StartDateTime: new Date().toISOString(),
									blocked: args.blocked ? 1 : 0,
									operatorid: args.operatorSqlId
								});

							case 3:
								sqlId = _context.sent;

								args.sqlId = sqlId;
								args.districtId = mongoose.mongo.ObjectId(districtId);
								_context.next = 8;
								return (0, _insert.deleteKeys)(args, ['districtSqlId', 'stateSqlId', 'countrySqlId', 'operatorSqlId']);

							case 8:
								MongoArgs = _context.sent;
								_context.next = 11;
								return (0, _insert.insertMongo)('city', MongoArgs);

							case 11:
								return _context.abrupt('return', _context.sent);

							case 14:
								_context.prev = 14;
								_context.t0 = _context['catch'](0);
								throw new Error(_context.t0);

							case 17:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, undefined, [[0, 14]]);
			}));

			return function resolve(_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}()
	}
};