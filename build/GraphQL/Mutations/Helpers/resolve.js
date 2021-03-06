'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.QueryAddress = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mssql = require('mssql');

var _mssql2 = _interopRequireDefault(_mssql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModelNames = ['area', 'city', 'district', 'state', 'country'];

var Models = {};

ModelNames.forEach(function (el) {
	return Models[el] = _mongoose2.default.model(el);
});

var QueryAddress = exports.QueryAddress = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(from, to, mongoId) {
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						return _context2.abrupt('return', new _promise2.default(function () {
							var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
								return _regenerator2.default.wrap(function _callee$(_context) {
									while (1) {
										switch (_context.prev = _context.next) {
											case 0:
												_context.prev = 0;
												_context.next = 6;
												break;

											case 3:
												_context.prev = 3;
												_context.t0 = _context['catch'](0);
												return _context.abrupt('return', reject(_context.t0));

											case 6:
											case 'end':
												return _context.stop();
										}
									}
								}, _callee, undefined, [[0, 3]]);
							}));

							return function (_x4, _x5) {
								return _ref2.apply(this, arguments);
							};
						}()));

					case 1:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function QueryAddress(_x, _x2, _x3) {
		return _ref.apply(this, arguments);
	};
}();