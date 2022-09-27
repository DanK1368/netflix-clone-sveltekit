<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Header from '../components/header.svelte';
	import { movieData } from '../stores/movieStore';
	import { user } from '../stores/sessionStore';
	import '../styles/app.css';

	export let data;
	movieData.set(data);

	onMount(() => {
		if (!$user) {
			goto('/login');
		}
	});
</script>

<Header />

<slot />
