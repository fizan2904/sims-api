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

var _age = require('./../Types/age');

var _age2 = _interopRequireDefault(_age);

var _insert = require('./Helpers/insert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	'add': {
		type: _age2.default,
		args: {
			name: { type: _graphql.GraphQLString },
			deleted: { type: _graphql.GraphQLBoolean }
		},
		resolve: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parentValues, args) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;
								_context.t0 = _insert.insertMongo;
								_context.next = 4;
								return (0, _insert.insertSql)('ageType', {
									name: args.name, Deleted: args.deleted ? 1 : 0
								}, 'ID');

							case 4:
								_context.t1 = _context.sent;
								_context.t2 = args.name;
								_context.t3 = args.deleted;
								_context.t4 = {
									sqlId: _context.t1,
									name: _context.t2,
									Deleted: _context.t3
								};
								_context.next = 10;
								return (0, _context.t0)('age', _context.t4);

							case 10:
								return _context.abrupt('return', _context.sent);

							case 13:
								_context.prev = 13;
								_context.t5 = _context['catch'](0);
								throw new Error(_context.t5);

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