'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _graphqlDate = require('graphql-date');

var _graphqlDate2 = _interopRequireDefault(_graphqlDate);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mssql = require('mssql');

var _mssql2 = _interopRequireDefault(_mssql);

var _address = require('./SubTypes/address');

var _address2 = _interopRequireDefault(_address);

var _passport = require('./SubTypes/passport');

var _passport2 = _interopRequireDefault(_passport);

var _reference = require('./SubTypes/reference');

var _reference2 = _interopRequireDefault(_reference);

var _insurance = require('./SubTypes/insurance');

var _insurance2 = _interopRequireDefault(_insurance);

var _payerInfo = require('./SubTypes/payerInfo');

var _payerInfo2 = _interopRequireDefault(_payerInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PatientModel = _mongoose2.default.model('patient');

exports.default = new _graphql.GraphQLObjectType({
	name: 'Patient',
	fields: function fields() {
		return {
			_id: { type: _graphql.GraphQLString },
			registrationNo: { type: _graphql.GraphQLString },
			title: { type: _graphql.GraphQLString },
			firstName: { type: _graphql.GraphQLString },
			middleName: { type: _graphql.GraphQLString },
			lastName: { type: _graphql.GraphQLString },
			mothersMaidenName: { type: _graphql.GraphQLString },
			fatherName: { type: _graphql.GraphQLString },
			dob: { type: _graphqlDate2.default },
			age: { type: _graphql.GraphQLInt },
			ageType: { type: _graphql.GraphQLString },
			sex: { type: _graphql.GraphQLString },
			maritalStatus: { type: _graphql.GraphQLString },
			education: { type: _graphql.GraphQLString },
			occupation: { type: _graphql.GraphQLString },
			presentAddress: { type: _address2.default },
			permanentAddress: { type: _address2.default },
			operatorId: { type: _graphql.GraphQLString },
			passport: { type: _passport2.default },
			reference: { type: _reference2.default },
			vip: { type: _graphql.GraphQLBoolean },
			vipName: { type: _graphql.GraphQLString },
			vipRemarks: { type: _graphql.GraphQLString },
			insurance: { type: _insurance2.default },
			payerInfo: { type: _payerInfo2.default },
			issueAuthorityCode: { type: _graphql.GraphQLString },
			regType: { type: _graphql.GraphQLString },
			regAmount: { type: _graphql.GraphQLInt },
			cancelledBy: { type: _graphql.GraphQLString },
			cancelledReason: { type: _graphql.GraphQLString },
			branch: { type: _graphql.GraphQLString },
			receiptType: { type: _graphql.GraphQLString },
			modeOfPay: { type: _graphql.GraphQLString },
			receiptNo: { type: _graphql.GraphQLString }
		};
	}
});