<script>
	import 'iconify-icon';
	import profileSvg from '../assets/profile.svg';
	let scrollYPosition;
</script>

<svelte:window bind:scrollY={scrollYPosition} />

<header class={`${scrollYPosition >= 1 ? 'bg-[#141414]' : null}`}>
	<div class=" flex items-center space-x-2 md:space-x-10 ">
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
			alt=""
			width={100}
			height={100}
			class="object-contain cursor-pointer"
		/>
		<ul class=" hidden space-x-4 md:flex ">
			<li class="headerLink">Home</li>
			<li class="headerLink">TV Shows</li>
			<li class="headerLink">Movies</li>
			<li class="headerLink">New & Popular</li>
			<li class="headerLink">My List</li>
		</ul>
	</div>

	<div class=" flex items-center space-x-4 text-sm font-light ">
		<iconify-icon width={20} height={20} class=" hidden w-6 h-6 sm:inline" icon="charm:search" />
		<p class=" hidden lg:inline ">Kids</p>
		<iconify-icon width={20} height={20} class=" h-6 w-6 " icon="bx:bell" />
		<a href="/account">
			<img class=" rounded cursor-pointer " src={profileSvg} alt="" width={30} />
		</a>
	</div>
</header>
