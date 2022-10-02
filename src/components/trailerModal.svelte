<script>
	import { bannerMovie, showVideoModal } from '../stores/movieStore';
	import { Player, usePlayerStore, Youtube } from '@vime/svelte';

	let player;
	const { paused } = usePlayerStore(() => player);
	let TMDB_API_KEY = import.meta.env.VITE_TMDB_KEY;

	async function fetchSelectedMovieTrailerID() {
		const resp = await fetch(
			`https://api.themoviedb.org/3/movie/${$bannerMovie.id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
		);

		const data = await resp.json();
		const [movieTrailer] = data.results.filter((movie) => movie.type === 'Trailer');

		return movieTrailer?.key;
	}

	let trailerPromise = fetchSelectedMovieTrailerID;
</script>

{#await trailerPromise()}
	<p>Loading ....</p>
{:then trailerKey}
	<div
		class=" absolute left-1/2 top-[400px] translate-x-[-50%] translate-y-[-50%] min-w-[90%] max-w-[700px] z-40 "
	>
		<button on:click={() => showVideoModal.set(false)}>close</button>
		<Player bind:this={player} controls>
			<Youtube videoId={trailerKey} />
		</Player>
	</div>
{:catch error}
	<p>Cannot display Movie</p>
{/await}
