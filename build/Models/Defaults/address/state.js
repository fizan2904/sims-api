'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.model('state', _mongoose2.default.Schema({
	sqlId: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	countryId: {
		type: _mongoose2.default.Schema.Types.ObjectId,
		ref: 'country'
	},
	blocked: {
		type: Boolean,
		required: true,
		default: false
	},
	operatorId: {
		type: String
	}
}, {
	timestamps: true
}));