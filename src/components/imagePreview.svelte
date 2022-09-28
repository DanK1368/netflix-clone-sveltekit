<script>
	import { bannerMovie, movieData } from '../stores/movieStore';
	import { IMAGE_PREVIEW_BASE_URL } from '../constants/movie';

	export let movie;

	// current movie category
	export let movies;

	const handleShowMovieDetails = (clickedMovieId) => {
		bannerMovie.update((currentMovie) => {
			[currentMovie] = movies.filter((movie) => movie.id === clickedMovieId);
			return currentMovie;
		});
	};
</script>

<div
	class=" min-w-[180px] lg:min-w-[250px] cursor-pointer transition duration-300 ease-in-out md:hover:scale-105 "
>
	<button on:click={() => handleShowMovieDetails(movie.id)}>
		<img
			class=" max-h-24 w-full object-cover rounded-md md:rounded md:max-h-32 lg:max-h-40 "
			src={`${IMAGE_PREVIEW_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
			alt={movie.title}
			loading="lazy"
			decoding="async"
		/>
	</button>
</div>
