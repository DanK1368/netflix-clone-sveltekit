<script>
	import 'iconify-icon';
	import { movieData, bannerMovie, showVideoModal } from '../stores/movieStore';
	import { randomNumberGenerator } from '../utils/randomNumber';
	import { IMAGE_BASE_URL } from '../constants/movie';
	import TrailerModal from './trailerModal.svelte';

	let randomIndex = randomNumberGenerator();
	bannerMovie.set($movieData.netflixOriginals[randomIndex]);
</script>

{#if !showVideoModal}
	<TrailerModal />
{/if}

<div class=" flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 ">
	<div class=" absolute top-0 right-0 w-screen -z-10 ">
		<img
			class=" w-full object-cover h-[95vh] "
			src={`${IMAGE_BASE_URL}${$bannerMovie?.poster_path}`}
			alt=""
		/>
	</div>

	<h1 class=" text-2xl font-extrabold md:text-4xl lg:text-6xl ">
		{$bannerMovie?.name || $bannerMovie?.title || $bannerMovie?.original_name}
	</h1>
	<p class=" max-w-xs text-xs md:max-w-lg md:text-lg lg:max-2xl lg:text-2xl ">
		{$bannerMovie?.overview}
	</p>

	<div class=" flex gap-3  ">
		<button class=" customBannerBtn bg-white text-black " on:click={() => showVideoModal.set(true)}>
			<iconify-icon
				class=" h-4 w-4 text-black md:h-7 md:w-7 "
				icon="carbon:play-filled-alt"
				width={'100%'}
			/>
			Play</button
		>
		<button class=" customBannerBtn bg-gray-700/70 "
			>More Info <iconify-icon
				icon="ion:information-circle"
				class=" h-5 w-5 md:h-8 md:w-8 "
				width={'100%'}
			/></button
		>
	</div>
</div>
