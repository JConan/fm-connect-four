<script>
	import { base } from '$app/paths';
	import Image from '$lib/components/Image.svelte';
	import { route } from '$lib/ROUTES';
</script>

<div class="container">
	<h1 class="heading-large">Rules</h1>
	<h3 class="heading-small">Objective</h3>
	<p>
		Be the first player to connect 4 of the same colored discs in a row (either vertically,
		horizontally, or diagonally).
	</p>
	<h3 class="heading-small">How to play</h3>
	<ol>
		<li>Red goes first in the first game.</li>
		<li>Players must alternate turns, and only one disc can be dropped in each turn.</li>
		<li>The game ends when there is a 4-in-a-row or a stalemate.</li>
		<li>The starter of the previous game goes second on the next game.</li>
	</ol>

	<a class="icon-button raised-button button-red" href={base + route('/')}>
		<Image name="check" />
	</a>
</div>

<style>
	.container {
		width: 480px;
		height: 537px;
		border-radius: 40px;
		border: solid 3px var(--black);
		background-color: var(--white);
		box-shadow: 0px 10px 0px 0px var(--black);
		padding: 0 34px;

		& h1,
		h3 {
			text-transform: uppercase;
		}
		& h1 {
			margin: 30px 0 14px 0;
			text-align: center;
		}
		& h3 {
			margin: 16px 0 0 0;
			color: var(--purple);
		}

		& ol {
			list-style: none;
			counter-reset: custom-counter;
			padding-left: 27px;
			font-size: 16px;

			& li {
				position: relative;
				counter-increment: custom-counter;
				margin-bottom: 12px;

				&::before {
					content: counter(custom-counter);
					position: absolute;
					left: -27px;
					font-weight: 700;
				}
			}
		}

		& .icon-button {
			margin: auto;
			margin-top: 80px;
			& img {
				width: 60%;
			}
		}
	}

	@media (max-width: 639px) {
		.container {
			width: 335px;
			height: 586px;
			padding: 20px;
		}
		.container .icon-button {
			margin-bottom: 80px;
		}
	}
</style>
