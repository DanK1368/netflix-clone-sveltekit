<script>
	import { IMAGE_PREVIEW_BASE_URL } from '../constants/movie';

	export let movie;
</script>

<div
	class=" min-w-[180px] lg:min-w-[250px] cursor-pointer transition duration-300 ease-in-out md:hover:scale-105 "
>
	<img
		class=" max-h-24 w-full object-cover rounded-md md:rounded md:max-h-32 lg:max-h-40 "
		src={`${IMAGE_PREVIEW_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
		alt={movie.title}
	/>
</div>
