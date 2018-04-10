'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphql = require('graphql');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _age = require('./../Types/age');

var _age2 = _interopRequireDefault(_age);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AgeModel = _mongoose2.default.model('age');

exports.default = {
	type: new _graphql.GraphQLList(_age2.default),
	args: {
		all: { type: _graphql.GraphQLBoolean },
		_id: { type: _graphql.GraphQLString },
		name: { type: _graphql.GraphQLString }
	},
	resolve: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parentValues, args) {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;

							if (!args.all) {
								_context.next = 7;
								break;
							}

							_context.next = 4;
							return AgeModel.find().exec();

						case 4:
							return _context.abrupt('return', _context.sent);

						case 7:
							if (!args._id) {
								_context.next = 13;
								break;
							}

							_context.next = 10;
							return AgeModel.find({ _id: _mongoose2.default.mongo.ObjectId(args._id) }).exec();

						case 10:
							return _context.abrupt('return', _context.sent);

						case 13:
							if (!args.name) {
								_context.next = 19;
								break;
							}

							_context.next = 16;
							return AgeModel.find({ name: args.name }).exec();

						case 16:
							return _context.abrupt('return', _context.sent);

						case 19:
							throw new Error('Insufficient params');

						case 20:
							_context.next = 25;
							break;

						case 22:
							_context.prev = 22;
							_context.t0 = _context['catch'](0);
							throw new Error(_context.t0);

						case 25:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined, [[0, 22]]);
		}));

		return function resolve(_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}()
};