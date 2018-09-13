import test from 'ava';
import is-not-negative from '.';

test(t => {
	t.false(is-not-negative(-1));
	t.true(is-not-negative(0));
	t.true(is-not-negative(1));
	t.true(is-not-negative('-1'));
	t.false(is-not-negative(Number(-1)));
});
