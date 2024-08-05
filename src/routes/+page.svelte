<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { inlineSvg } from '@svelte-put/inline-svg';
	import { base } from '$app/paths';
</script>

<div class="main-menu">
	<svg class="logo" use:inlineSvg={base + '/images/logo.svg'}></svg>
	<a
		href={base + route('/game/[mode]', { mode: 'vs-cpu' })}
		class="text-button raised-button button-red"
	>
		<span>player vs cpu</span>
		<svg class="player-vs-player" use:inlineSvg={base + '/images/player-vs-cpu.svg'}></svg>
	</a>
	<a
		href={base + route('/game/[mode]', { mode: 'vs-player' })}
		class="text-button raised-button button-yellow"
	>
		<span>player vs player</span>
		<svg class="player-vs-player" use:inlineSvg={base + '/images/player-vs-player.svg'}></svg>
	</a>
	<a href={base + route('/rules')} class="text-button raised-button button-white">
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
