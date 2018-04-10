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

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _area = require('./../area');

var _area2 = _interopRequireDefault(_area);

var _district = require('./../district');

var _district2 = _interopRequireDefault(_district);

var _city = require('./../city');

var _city2 = _interopRequireDefault(_city);

var _state = require('./../state');

var _state2 = _interopRequireDefault(_state);

var _country = require('./../country');

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AreaModel = _mongoose2.default.model('area');
var CityModel = _mongoose2.default.model('city');
var DistrictModel = _mongoose2.default.model('district');
var StateModel = _mongoose2.default.model('state');
var CountryModel = _mongoose2.default.model('country');

exports.default = new _graphql.GraphQLObjectType({
	name: 'Address',
	fields: function fields() {
		return {
			street: { type: _graphql.GraphQLString },
			area: {
				type: _graphql.GraphQLString
			},
			areaData: {
				type: _area2.default,
				resolve: function () {
					var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parentValues) {
						return _regenerator2.default.wrap(function _callee$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:
										_context.next = 2;
										return AreaModel.findOne({ _id: _mongoose2.default.mongo.ObjectId(parentValues.area) }).exec();

									case 2:
										return _context.abrupt('return', _context.sent);

									case 3:
									case 'end':
										return _context.stop();
								}
							}
						}, _callee, undefined);
					}));

					return function resolve(_x) {
						return _ref.apply(this, arguments);
					};
				}()
			},
			city: {
				type: _graphql.GraphQLString
			},
			cityData: {
				type: _city2.default,
				resolve: function () {
					var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(parentValues) {
						return _regenerator2.default.wrap(function _callee2$(_context2) {
							while (1) {
								switch (_context2.prev = _context2.next) {
									case 0:
										_context2.next = 2;
										return CityModel.findOne({ _id: _mongoose2.default.mongo.ObjectId(parentValues.city) }).exec();

									case 2:
										return _context2.abrupt('return', _context2.sent);

									case 3:
									case 'end':
										return _context2.stop();
								}
							}
						}, _callee2, undefined);
					}));

					return function resolve(_x2) {
						return _ref2.apply(this, arguments);
					};
				}()
			},
			district: {
				type: _graphql.GraphQLString
			},
			districtData: {
				type: _district2.default,
				resolve: function () {
					var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(parentValues) {
						return _regenerator2.default.wrap(function _callee3$(_context3) {
							while (1) {
								switch (_context3.prev = _context3.next) {
									case 0:
										_context3.next = 2;
										return DistrictModel.findOne({ _id: _mongoose2.default.mongo.ObjectId(parentValues.district) }).exec();

									case 2:
										return _context3.abrupt('return', _context3.sent);

									case 3:
									case 'end':
										return _context3.stop();
								}
							}
						}, _callee3, undefined);
					}));

					return function resolve(_x3) {
						return _ref3.apply(this, arguments);
					};
				}()
			},
			state: {
				type: _graphql.GraphQLString
			},
			stateData: {
				type: _state2.default,
				resolve: function () {
					var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(parentValues) {
						return _regenerator2.default.wrap(function _callee4$(_context4) {
							while (1) {
								switch (_context4.prev = _context4.next) {
									case 0:
										_context4.next = 2;
										return StateModel.findOne({ _id: _mongoose2.default.mongo.ObjectId(parentValues.state) }).exec();

									case 2:
										return _context4.abrupt('return', _context4.sent);

									case 3:
									case 'end':
										return _context4.stop();
								}
							}
						}, _callee4, undefined);
					}));

					return function resolve(_x4) {
						return _ref4.apply(this, arguments);
					};
				}()
			},
			country: {
				type: _graphql.GraphQLString
			},
			countryData: {
				type: _country2.default,
				resolve: function () {
					var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(parentValues) {
						return _regenerator2.default.wrap(function _callee5$(_context5) {
							while (1) {
								switch (_context5.prev = _context5.next) {
									case 0:
										_context5.next = 2;
										return CountryModel.findOne({ _id: _mongoose2.default.mongo.ObjectId(parentValues.country) }).exec();

									case 2:
										return _context5.abrupt('return', _context5.sent);

									case 3:
									case 'end':
										return _context5.stop();
								}
							}
						}, _callee5, undefined);
					}));

					return function resolve(_x5) {
						return _ref5.apply(this, arguments);
					};
				}()
			},
			pincode: { type: _graphql.GraphQLString },
			phone: { type: _graphql.GraphQLString },
			email: { type: _graphql.GraphQLString }
		};
	}
});