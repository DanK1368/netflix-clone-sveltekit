<script>
	import LoginForm from '../../components/loginForm.svelte';
	import backgroundImg from '../../assets/netflix-background.jpg';
</script>

<div
	class="min-h-screen grid place-content-center relative bg-[url('/src/assets/netflix-background.jpg')] bg-right-top bg-no-repeat bg-cover "
>
	<LoginForm title="Sign Up" text="Already have an account?" url="/login" />
</div>
