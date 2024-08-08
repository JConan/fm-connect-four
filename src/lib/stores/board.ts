import { derived, writable } from 'svelte/store';

export type PlayerColor = 'red' | 'yellow';
export type BoardGrid = (PlayerColor | undefined)[];
export type BoardState = {
	turn: PlayerColor;
	grid: BoardGrid;
};

const initialBoardGrid: BoardGrid = Array<PlayerColor | undefined>(7 * 6).fill(undefined);
const initialPlayerTurn: PlayerColor = 'red';
const turn = writable<PlayerColor>(initialPlayerTurn);
const boardGrid = writable(initialBoardGrid);

export const boardStore = derived([boardGrid, turn], ([$boardGrid, $turn]) => {
	const boardState: BoardState = {
		grid: $boardGrid,
		turn: $turn
	};
	return boardState;
});

export function setCounter(data: { indexColumn: number }) {
	return new Promise((resolve) => {
		boardGrid.update(($boardGrid) => {
			const boardGrid = [...$boardGrid];

			const emptyColumn = $boardGrid
				.map((value, index) => ({
					value,
					column: index % 7,
					index
				}))
				.filter((cell) => cell.column === data.indexColumn && cell.value === undefined)
				.pop();

			if (emptyColumn) {
				turn.update(($turn) => {
					boardGrid[emptyColumn.index] = $turn;
					return $turn === 'red' ? 'yellow' : 'red';
				});
				resolve(true);
				return boardGrid;
			}
			resolve(false);
			return $boardGrid;
		});
	});
}

export function resetBoard() {
	boardGrid.set(initialBoardGrid);
	turn.set(initialPlayerTurn);
}
