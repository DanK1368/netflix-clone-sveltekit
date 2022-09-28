<script>
	import 'iconify-icon';
	import ImagePreview from './imagePreview.svelte';

	export let title;
	export let movies;

	let imageContainer;
	let showLeftChevron = false;

	const scrollLeft = (e) => {
		showLeftChevron = !showLeftChevron;

		movies = [movies[movies.length - 1], ...movies.slice(0, movies.length - 1)];
	};

	const scrollRight = (e) => {
		showLeftChevron = !showLeftChevron;

		movies = [...movies.slice(1, movies.length), movies[0]];
	};
</script>

<div class="space-y-1 md:space-y-2 ">
	<h2
		class=" w-52 font-semibold text-sm cursor-pointer text-gray-200 transition duration-300 hover:text-white md:text-2xl "
	>
		{title}
	</h2>
	<div class=" relative group ">
		<button
			on:click={(e) => scrollLeft(e)}
			class=" cursor-pointer absolute top-0 bottom-0 left-2 m-auto h-10 w-10  transition hover:scale-150 group-hover:opacity-100 z-20 "
		>
			<iconify-icon icon="akar-icons:chevron-left" />
		</button>

		<div class=" flex items-center gap-2 overflow-x-scroll md:gap-3 scrollbar-hide  ">
			{#each movies as movie (movie.id)}
				<ImagePreview {movie} {movies} />
			{/each}
		</div>

		<button
			on:click={(e) => scrollRight(e)}
			class=" cursor-pointer absolute top-0 bottom-0 right-2 m-auto h-10 w-10  transition hover:scale-150 group-hover:opacity-100 "
		>
			<iconify-icon icon="akar-icons:chevron-right" />
		</button>
	</div>
</div>
