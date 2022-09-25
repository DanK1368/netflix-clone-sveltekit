<script>
	import Banner from '../components/banner.svelte';
	import { movieData } from '../stores/movieStore';
	export let data;

	movieData.set(data);
</script>

<svelte:head>
	<title>Netflix | Home</title>
</svelte:head>

<div class=" relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511]  ">
	<main class=" relative p-4 lg:space-y-24 lg:pl-16">
		<Banner />
	</main>
</div>
