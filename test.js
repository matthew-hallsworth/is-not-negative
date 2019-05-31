import test from 'ava';
import isNotNegative from '.';

test('Basic usage of lib', t => {
	t.false(isNotNegative(-1));
	t.true(isNotNegative(0));
	t.true(isNotNegative(1));
	t.true(isNotNegative('-1'));
	t.false(isNotNegative(Number(-1)));
});
