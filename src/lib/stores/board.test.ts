import { get } from 'svelte/store';
import { board, resetBoard, setCounter } from './board';

describe('board store', () => {
	beforeEach(resetBoard);

	it('should have empty values', () => {
		expect(get(board)).toEqual(Array(7 * 6).fill(undefined));
	});

	it('should be able to add a counter in the last line from a column', () => {
		setCounter({ indexColumn: 0, color: 'red' });
		expect(get(board)[7 * (6 - 1)]).toBe('red');
	});

	it('should be able to add two counter on the same column', () => {
		setCounter({ indexColumn: 0, color: 'yellow' });
		setCounter({ indexColumn: 0, color: 'red' });
		expect(get(board)[7 * (5 - 1)]).toBe('red');
		expect(get(board)[7 * (6 - 1)]).toBe('yellow');
	});

	it('should return false if the column is full', async () => {
		for (let i = 0; i < 6; i++)
			expect(await setCounter({ indexColumn: 0, color: 'red' })).toBe(true);

		expect(await setCounter({ indexColumn: 0, color: 'yellow' })).toBe(false);
	});
});
