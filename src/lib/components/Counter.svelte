<script lang="ts">
	import { fly } from 'svelte/transition';
	import Image from './Image.svelte';

	export let color: 'red' | 'yellow';
</script>

<div in:fly={{ y: -1000, duration: 600 }}>
	<Image name={`counter-${color}`} />
</div>
