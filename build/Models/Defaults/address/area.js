'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.model('area', _mongoose2.default.Schema({
	sqlId: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	cityId: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'city'
	},
	blocked: {
		type: Boolean,
		required: true,
		default: false
	},
	operatorId: {
		type: String
	},
	pincode: {
		type: String
	}
}, {
	timestamps: true
}));