<script>
	import { trailer } from '../stores/movieStore';
	import { Player, usePlayerStore, Youtube } from '@vime/svelte';
	console.log($trailer);
	// Obtain a ref if you need to call any methods.
	let player;

	/**
	 * All player properties are available through the store. If you prefer, you could also pass
	 * properties directly to the player and listen for events.
	 */
	const { paused } = usePlayerStore(() => player);
</script>

<div
	class=" absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] min-w-[90%] max-w-[700px] z-40 "
>
	<Player bind:this={player}>
		<Youtube videoId={$trailer?.key} />
	</Player>
</div>
