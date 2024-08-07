import { writable } from 'svelte/store';

export type CounterColor = 'red' | 'yellow';

const initialBoard = Array<CounterColor | undefined>(7 * 6).fill(undefined);

const { set, update, subscribe } = writable(initialBoard);
export const board = { subscribe };

export function setCounter(data: { indexColumn: number; color: CounterColor }) {
	return new Promise((resolve) => {
		update(($board) => {
			const board = [...$board];

			const emptyColumn = $board
				.map((value, index) => ({
					value,
					column: index % 7,
					index
				}))
				.filter((cell) => cell.column === data.indexColumn && cell.value === undefined)
				.pop();

			if (emptyColumn) {
				board[emptyColumn.index] = data.color;
				resolve(true);
				return board;
			}
			resolve(false);
			return $board;
		});
	});
}

export function resetBoard() {
	set(initialBoard);
}
