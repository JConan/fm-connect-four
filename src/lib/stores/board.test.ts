import { get } from 'svelte/store';
import { boardStore, resetBoard, setActiveColumn, setCounter } from './board';

describe('board store', () => {
	beforeEach(resetBoard);

	it('should have empty values', () => {
		expect(get(boardStore).grid).toEqual(Array(7 * 6).fill(undefined));
	});

	it('should be able to add a counter in the last line from a column', () => {
		setCounter({ indexColumn: 0 });
		expect(get(boardStore).grid[7 * (6 - 1)]).toBe('red');
	});

	it('should be able to add two counter on the same column', async () => {
		await setCounter({ indexColumn: 0 });
		await setCounter({ indexColumn: 0 });
		expect(get(boardStore).grid[7 * (5 - 1)]).toBe('yellow');
		expect(get(boardStore).grid[7 * (6 - 1)]).toBe('red');
	});

	it('should return false if the column is full', async () => {
		for (let i = 0; i < 6; i++) expect(await setCounter({ indexColumn: 0 })).toBe(true);

		expect(await setCounter({ indexColumn: 0 })).toBe(false);
	});

	it('should start with red player', () => {
		expect(get(boardStore).turn).toBe('red');
	});

	it('should start with yellow player after the first counter is select', () => {
		setCounter({ indexColumn: 0 });
		expect(get(boardStore).turn).toBe('yellow');
	});

	it('should not change turn if the column is full', async () => {
		for (let i = 0; i < 6; i++) expect(await setCounter({ indexColumn: 0 })).toBe(true);

		await setCounter({ indexColumn: 0 });
		expect(get(boardStore).turn).toBe('red');
	});

	it('should have index 0 as active column', () => {
		expect(get(boardStore).activeColumn).toBe(0);
	});

	it('should be able to set active column by cell index', () => {
		setActiveColumn(2 + 7);
		expect(get(boardStore).activeColumn).toBe(2);
	});
	it('should be able to set active column by its index', () => {
		setActiveColumn(6);
		expect(get(boardStore).activeColumn).toBe(6);
	});
});
