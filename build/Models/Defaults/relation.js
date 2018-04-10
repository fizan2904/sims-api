'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.model('relation', _mongoose2.default.Schema({
	sqlId: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	blocked: {
		type: Boolean,
		required: true,
		default: false
	}
}, {
	timestamps: true
}));