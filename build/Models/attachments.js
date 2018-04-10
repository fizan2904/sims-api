'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.model('attachments', _mongoose2.default.Schema({
	name: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	fileType: [{
		type: String,
		enum: ['prescription', 'aadhar', 'identity', 'photo']
	}]
}, {
	timestamps: true
}));