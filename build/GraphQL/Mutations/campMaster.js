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

var _campMaster = require('./../Types/campMaster');

var _campMaster2 = _interopRequireDefault(_campMaster);

var _insert = require('./Helpers/insert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	'add': {
		type: _campMaster2.default,
		args: {
			name: { type: _graphql.GraphQLString },
			blocked: { type: _graphql.GraphQLBoolean },
			addedBy: { type: _graphql.GraphQLString }
		},
		resolve: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parentValues, args) {
				var sqlId;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return (0, _insert.insertSql)('campmaster', {
									name: args.name,
									blocked: args.blocked ? 1 : 0,
									addedby: args.addedBy,
									addedon: new Date().toISOString()
								}, 'ID');

							case 3:
								sqlId = _context.sent;

								args.sqlId = sqlId;
								_context.next = 7;
								return (0, _insert.insertMongo)('campmaster', args);

							case 7:
								return _context.abrupt('return', _context.sent);

							case 10:
								_context.prev = 10;
								_context.t0 = _context['catch'](0);
								throw new Error(_context.t0);

							case 13:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, undefined, [[0, 10]]);
			}));

			return function resolve(_x, _x2) {
				return _ref.apply(this, arguments);
			};
		}()
	}
};