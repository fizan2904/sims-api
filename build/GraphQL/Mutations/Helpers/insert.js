'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteKeys = exports.insertMongo = exports.insertSql = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _mssql = require('mssql');

var _mssql2 = _interopRequireDefault(_mssql);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModelNames = ['age', 'bloodgroup', 'campmaster', 'company', 'education', 'maritalstatus', 'occupation', 'refsource', 'refsourcedetail', 'relation', 'sex', 'title'];
var Models = {};

ModelNames.forEach(function (el) {
	return Models[el] = _mongoose2.default.model(el);
});

var insertSql = exports.insertSql = function insertSql(tableName, params, returnData) {
	return new _promise2.default(function (resolve, reject) {
		try {
			var transaction = new _mssql2.default.Transaction();
			transaction.begin(function (err) {
				if (err) {
					throw err;
				}
				new _mssql2.default.Request().query('\n\t\t\t\t\tINSERT INTO dbo.[' + tableName + '] \n\t\t\t\t\t(' + (0, _keys2.default)(params).join(',') + ') \n\t\t\t\t\tOUTPUT Inserted.' + returnData + ' VALUES \n\t\t\t\t\t(\'' + (0, _values2.default)(params).join("','") + '\')', function (err, result) {
					if (err) {
						throw err;
					}
					transaction.commit(function (err) {
						if (err) {
							throw err;
						}
						return resolve(result.recordset[0][returnData]);
					});
				});
			});
		} catch (e) {
			return reject(e);
		}
	});
};

var insertMongo = exports.insertMongo = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(modelName, params) {
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
												_context.t0 = resolve;
												_context.next = 4;
												return new Models[modelName](params).save();

											case 4:
												_context.t1 = _context.sent;
												return _context.abrupt('return', (0, _context.t0)(_context.t1));

											case 8:
												_context.prev = 8;
												_context.t2 = _context['catch'](0);
												return _context.abrupt('return', reject(_context.t2));

											case 11:
											case 'end':
												return _context.stop();
										}
									}
								}, _callee, undefined, [[0, 8]]);
							}));

							return function (_x3, _x4) {
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

	return function insertMongo(_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();

var deleteKeys = exports.deleteKeys = function () {
	var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(Obj, keys) {
		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						return _context4.abrupt('return', new _promise2.default(function () {
							var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
								return _regenerator2.default.wrap(function _callee3$(_context3) {
									while (1) {
										switch (_context3.prev = _context3.next) {
											case 0:
												_context3.prev = 0;

												keys.forEach(function (key) {
													return delete Obj[key];
												});
												return _context3.abrupt('return', resolve(Obj));

											case 5:
												_context3.prev = 5;
												_context3.t0 = _context3['catch'](0);
												return _context3.abrupt('return', reject(_context3.t0));

											case 8:
											case 'end':
												return _context3.stop();
										}
									}
								}, _callee3, undefined, [[0, 5]]);
							}));

							return function (_x7, _x8) {
								return _ref4.apply(this, arguments);
							};
						}()));

					case 1:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, undefined);
	}));

	return function deleteKeys(_x5, _x6) {
		return _ref3.apply(this, arguments);
	};
}();