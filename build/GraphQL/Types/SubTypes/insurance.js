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

var _relation = require('./../relation');

var _relation2 = _interopRequireDefault(_relation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RelationModel = _mongoose2.default.model('relation');

exports.default = new _graphql.GraphQLObjectType({
	name: 'insurance',
	fields: function fields() {
		return {
			insuranceName: { type: _graphql.GraphQLString },
			tpaName: { type: _graphql.GraphQLString },
			branch: { type: _graphql.GraphQLString },
			policyNo: { type: _graphql.GraphQLString },
			employeeName: { type: _graphql.GraphQLString },
			contactNo: { type: _graphql.GraphQLInt },
			person: { type: _graphql.GraphQLString },
			relation: {
				type: _graphql.GraphQLString
			},
			relationData: {
				type: _relation2.default,
				resolve: function () {
					var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parentValues) {
						return _regenerator2.default.wrap(function _callee$(_context) {
							while (1) {
								switch (_context.prev = _context.next) {
									case 0:
										_context.next = 2;
										return RelationModel.findOne({ _id: _mongoose2.default.mongo.ObjectId(parentValues.relation) }).exec();

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
			issuedOn: { type: _graphqlDate2.default },
			expiryDate: { type: _graphqlDate2.default }
		};
	}
});