import { derived, writable } from 'svelte/store';

export type PlayerColor = 'red' | 'yellow';
export type BoardGrid = (PlayerColor | undefined)[];
export type BoardState = {
	turn: PlayerColor;
	grid: BoardGrid;
	activeColumn: number;
};

const initialBoardGrid: BoardGrid = Array<PlayerColor | undefined>(7 * 6).fill(undefined);
const initialPlayerTurn: PlayerColor = 'red';
const turn = writable<PlayerColor>(initialPlayerTurn);
const boardGrid = writable(initialBoardGrid);
const activeColumn = writable(0);
export const gameCounterStore = writable(0);
export const winner = writable<PlayerColor | undefined>();
export const isPause = writable(false);

export const boardStore = derived(
	[boardGrid, turn, activeColumn],
	([$boardGrid, $turn, $activeColumn]) => {
		const boardState: BoardState = {
			grid: $boardGrid,
			turn: $turn,
			activeColumn: $activeColumn
		};
		return boardState;
	}
);

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
	activeColumn.set(0);
	gameCounterStore.update(($counter) => $counter + 1);
}

export function setActiveColumn(index: number) {
	activeColumn.set(index % 7);
}
