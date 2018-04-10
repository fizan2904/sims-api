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

var _company = require('./../Types/company');

var _company2 = _interopRequireDefault(_company);

var _insert = require('./Helpers/insert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	'add': {
		type: _company2.default,
		args: {
			name: { type: _graphql.GraphQLString },
			categoryId: { type: _graphql.GraphQLString },
			categorySqlId: { type: _graphql.GraphQLString },
			blocked: { type: _graphql.GraphQLBoolean },
			companyType: { type: _graphql.GraphQLString },
			taxIncluded: { type: _graphql.GraphQLString }
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
								return (0, _insert.insertSql)('Company', {
									Name: args.name,
									CategoryId: args.categorySqlId,
									StartDateTime: new Date().toISOString(),
									Blocked: args.blocked ? 1 : 0,
									COMPANYTYPE: args.companyType,
									TaxIncluded: args.taxIncluded
								}, 'ID');

							case 3:
								sqlId = _context.sent;

								args.sqlId = sqlId;
								_context.next = 7;
								return (0, _insert.deleteKeys)(['categorySqlId']);

							case 7:
								MongoArgs = _context.sent;
								_context.next = 10;
								return (0, _insert.insertMongo)('company', MongoArgs);

							case 10:
								return _context.abrupt('return', _context.sent);

							case 13:
								_context.prev = 13;
								_context.t0 = _context['catch'](0);
								throw new Error(_context.t0);

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, undefined, [[0, 13]]);
			}));

			return function resolve(_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}()
	}
};