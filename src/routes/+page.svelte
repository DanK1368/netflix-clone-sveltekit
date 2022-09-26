<script>
	import Banner from '../components/banner.svelte';
	import { movieData } from '../stores/movieStore';
	import Categories from '../components/categories.svelte';

	export let data;
	movieData.set(data);

	const {
		actionMovies,
		comedyMovies,
		documentaries,
		horrorMovies,
		netflixOriginals,
		romanceMovies,
		topRated,
		trendingNow
	} = $movieData;
</script>

<svelte:head>
	<title>Netflix | Home</title>
</svelte:head>

<div class=" relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]">
	<main class=" relative p-4 lg:space-y-24 lg:pl-16 customScrollbar">
		<Banner />
		<section class="flex flex-col gap-7 md:gap-10 lg:gap-20">
			<Categories title="Top Rated" movies={topRated} />
			<Categories title="Trending Now" movies={trendingNow} />
			<Categories title="Netflix Originals" movies={netflixOriginals} />
			<Categories title="Comedy Movies" movies={comedyMovies} />
			<Categories title="Romance Movies" movies={romanceMovies} />
			<Categories title="Action" movies={actionMovies} />
			<Categories title="Horror Movies" movies={horrorMovies} />
			<Categories title="Documentaries" movies={documentaries} />
		</section>
	</main>
</div>
