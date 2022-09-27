<script>
	import supabase from '$lib/supabaseClient.js';
	import { goto } from '$app/navigation';

	export let title;
	export let text;
	export let url;

	let email = '';
	let password = '';
	let showErrorMessage = false;
	let errorMessage = '';

	const handleLogin = async () => {
		if (title === 'Sign In') {
			const { user, error } = await supabase.auth.signIn({
				email: email,
				password: password
			});
			if (user) {
				goto('/');
				showErrorMessage = false;
			} else {
				showErrorMessage = true;
				errorMessage = error.message;
			}
		} else {
			const { user, error } = await supabase.auth.signUp({
				email: email,
				password: password
			});
			if (user) {
				goto('/login');
				showErrorMessage = false;
			} else {
				showErrorMessage = true;
				errorMessage = error.message;
			}
		}
	};
</script>

<div class=" flex  justify-center flex-col gap-10 bg-black/75 px-10 py-20 ">
	<h1 class=" text-3xl ">{title}</h1>
	<form
		class=" flex flex-col items-center justify-center gap-3 "
		on:submit|preventDefault={handleLogin}
	>
		<input
			class=" w-full px-3 py-2 bg-stone-700 focus:outline-none focus:border focus:border-red-600 focus:m-[-1px] "
			type="email"
			placeholder="email@email.com"
			bind:value={email}
		/>
		{#if showErrorMessage}
			<span class=" text-red-500 text-xs font-bold place-self-start ">{errorMessage}</span>
		{/if}
		<input
			class=" w-full px-3 py-2 bg-stone-700 focus:outline-none focus:border focus:border-red-600 focus:m-[-1px]  "
			type="password"
			placeholder="password"
			bind:value={password}
		/>
		<button class=" w-full bg-red-600 px-3 py-2 font-semibold " type="submit">{title}</button>
	</form>
	<p class=" text-stone-500 text-sm ">
		{text} <a class=" text-white font-semibold " href={url}>Sign Up Now</a>
	</p>
</div>
