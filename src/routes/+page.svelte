<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { base } from '$app/paths';
	import Image from '$lib/components/Image.svelte';
</script>

<div class="main-menu">
	<Image name="logo" />
	<a
		href={base + route('/game/[mode]', { mode: 'vs-cpu' })}
		class="text-button raised-button button-red"
	>
		<span>player vs cpu</span>
		<Image name="player-vs-cpu" />
	</a>
	<a
		href={base + route('/game/[mode]', { mode: 'vs-player' })}
		class="text-button raised-button button-yellow"
	>
		<span>player vs player</span>
		<Image name="player-vs-player" />
	</a>
	<a href={base + route('/rule')} class="text-button raised-button button-white">
		<span>game rule</span>
	</a>
</div>

<style>
	.main-menu {
		width: 480px;
		height: 537px;
		border: 3px solid var(--black);
		background-color: var(--purple);
		box-shadow: 0px 10px 0px 0px var(--dark);
		border-radius: 40px;
		padding: 40px;

		display: grid;
		grid-template-rows: 1.4fr 1fr 1fr 1fr;
		place-items: center;

		& .logo {
			width: 52px;
			height: 52px;
		}

		& .player-vs-player {
			width: 82px;
			height: 46px;
		}
	}

	@media (max-width: 639px) {
		.main-menu {
			width: 335px;
			height: 407px;
			border: none;
			border-radius: unset;
			padding: 0;
		}
	}
</style>
