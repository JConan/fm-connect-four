<script lang="ts">
	import { base } from '$app/paths';
	import { route } from '$lib/ROUTES';
	import { resetBoard } from '$lib/stores/board';
	import Image from '$lib/components/Image.svelte';
	import { goto } from '$app/navigation';

	let dialog: HTMLDialogElement;

	const onMenu = () => dialog.showModal();
	const onContinue = () => dialog.close();
	const onRestart = () => {
		resetBoard();
		dialog.close();
	};
	const onQuit = () => {
		dialog.close();
		goto(`${base}${route('/')}`);
	};
</script>

<div class="menu">
	<button class="flat-button button-purple" on:click={onMenu}>Menu</button>
	<Image class="logo" name="logo" />
	<button class="flat-button button-purple" on:click={onRestart}> Restart </button>
</div>

<dialog bind:this={dialog}>
	<span>PAUSE</span>
	<button class="text-button raised-button button-white" on:click={onContinue}>Continue game</button
	>
	<button class="text-button raised-button button-white" on:click={onRestart}>Restart</button>
	<button class="text-button raised-button button-red" on:click={onQuit}>Quit Game</button>
</dialog>

<style>
	.menu {
		grid-area: menu;
		display: flex;
		justify-content: space-between;
		margin: 20px 0 10px 0;
	}

	:global(.logo) {
		width: 40px;
		height: 40px;
	}

	dialog[open] {
		padding: 40px 0;
		width: 480px;
		height: 491px;
		border: 3px solid var(--black);
		background: var(--purple);
		box-shadow: 0px 10px 0px 0px var(--black);
		border-radius: 40px;
		font-size: 56px;
		color: white;
		font-weight: 700;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr repeat(3, 0.8fr);
		place-items: center;

		& .text-button {
			grid-template-columns: 1fr;
			text-align: center;
		}

		&::backdrop {
			background: #00000080;
		}
	}
</style>
