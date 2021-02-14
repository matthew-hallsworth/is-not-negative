'use strict';
const isNegative = require('is-negative');

module.exports = function (n) {
	if (n === 0) {
    		throw new Error('Zero cannot be positive nor negative; i.e. zero can be not positive or not negative.');
	}
	
	return !isNegative(n);
};
