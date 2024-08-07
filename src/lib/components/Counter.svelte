<script lang="ts">
	import { base } from '$app/paths';
	import { inlineSvg } from '@svelte-put/inline-svg';
	import { fly } from 'svelte/transition';

	export let color: 'red' | 'yellow';
	export let imageSize: string;
</script>

<svg
	in:fly={{ y: -1000, duration: 600 }}
	use:inlineSvg={`${base}/images/counter-${color}-${imageSize}.svg`}
/>
