'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mssql = require('mssql');

var _mssql2 = _interopRequireDefault(_mssql);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _apolloServerExpress = require('apollo-server-express');

var _Models = require('./Models');

var _Models2 = _interopRequireDefault(_Models);

var _Schema = require('./GraphQL/Schema');

var _Schema2 = _interopRequireDefault(_Schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _compression2.default)());
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

_mongoose2.default.connect('mongodb://localhost/sims').then(function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return _mssql2.default.connect(_config2.default);

					case 3:
						app.listen(process.env.PORT || 4000);
						console.log('All server started successfully');
						_context.next = 10;
						break;

					case 7:
						_context.prev = 7;
						_context.t0 = _context['catch'](0);

						console.log(_context.t0);

					case 10:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[0, 7]]);
	}));

	function success() {
		return _ref.apply(this, arguments);
	}

	return success;
}());

app.all('/graph', (0, _apolloServerExpress.graphqlExpress)(function (req) {
	return {
		schema: _Schema2.default
	};
}));

app.all('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({
	endpointURL: '/graph'
}));