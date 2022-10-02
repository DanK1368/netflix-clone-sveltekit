<script>
	import { supabase } from '$lib/supabaseClient.js';
	import { user } from '../../stores/sessionStore';
	import avatar from '../../assets/avatar.webp';

	let isDisabled = true;
	let loading = true;
	let username = null;
	let first_name = null;
	let last_name = null;
	let phone_number = null;
	let avatar_url = null;

	function getProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();

			supabase
				.from('profiles')
				.select(`username, first_name, last_name, phone_number, avatar_url`)
				.eq('id', user?.id)
				.single()
				.then(({ data, error, status }) => {
					if (data) {
						console.log(data);
						username = data.username;
						first_name = data.first_name;
						last_name = data.last_name;
						phone_number = data.phone_number;
						avatar_url = data.avatar_url;
					}
					if (error && status !== 406) throw error;
				});
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}

	async function updateProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();

			const updates = {
				id: user.id,
				username: username,
				first_name: first_name,
				last_name: last_name,
				phone_number: phone_number,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates, {
				returning: 'minimal' // Don't return the value after inserting
			});

			if (error) throw error;
		} catch (error) {
			alert(error.message);
		} finally {
			isDisabled = true;
			loading = false;
		}
	}
</script>

<section class=" w-full min-h-[90vh] mt-[10vh] grid pb-5 md:mt-0  ">
	<div
		class=" rounded-xl bg-[#27282f] w-[90%] mx-auto p-5 md:max-w-[740px] md:max-h-[70%] md:place-self-center "
	>
		<div class="border-b-[1px] border-gray-700 flex items-center justify-between">
			<h2 class=" py-2 ">Details</h2>
			<button
				type="button"
				class={`rounded-md py-1 px-2 text-sm ${
					isDisabled ? 'bg-green-500 hover:scale-105' : 'bg-gray-400'
				}`}
				disabled={!isDisabled}
				on:click={() => (isDisabled = false)}>Edit</button
			>
		</div>
		<div class=" flex flex-col gap-10 pt-5 md:flex-row md:items-center md:gap-20 ">
			<div class=" place-self-start  ">
				<img
					class="  max-w-full w-[100px] h-[100px] object-cover rounded-full outline-2 outline-red-600 outline md:mr-5 "
					src={avatar}
					alt="profile"
				/>
			</div>
			<form class=" flex flex-col gap-5 " use:getProfile on:submit|preventDefault={updateProfile}>
				<div>
					<h3 class=" text-gray-400 text-xl ">Info</h3>
				</div>

				<div class=" w-fit grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-10 ">
					<div class=" flex flex-col justify-start ">
						<label for="username" class=" text-gray-400 ">Username</label>
						<input
							class={` w-[80%] py-1 pr-2 bg-transparent focus:outline-none ${
								isDisabled ? 'text-gray-200' : ' caret-red-600 border-b-red-600 border-b-[1px]'
							}`}
							type="text"
							id="username"
							bind:value={username}
							disabled={isDisabled}
						/>
					</div>
					<div class=" flex flex-col justify-start ">
						<label for="first_name" class=" text-gray-400 ">First Name</label>
						<input
							class={` w-[80%] py-1 pr-2 bg-transparent focus:outline-none ${
								isDisabled ? 'text-gray-200' : ' caret-red-600 border-b-red-600 border-b-[1px]'
							}`}
							type="text"
							id="first_name"
							bind:value={first_name}
							disabled
						/>
					</div>
					<div class=" flex flex-col justify-start ">
						<label for="last_name" class=" text-gray-400 ">Last Name</label>
						<input
							class={`w-[80%] py-1 pr-2  bg-transparent focus:outline-none ${
								isDisabled ? 'text-gray-200' : ' caret-red-600 border-b-red-600 border-b-[1px]'
							}`}
							type="text"
							id="last_name"
							bind:value={last_name}
							disabled
						/>
					</div>
				</div>
				<div class=" flex flex-col justify-start ">
					<label for="email" class=" text-gray-400 ">Email</label>
					<input
						class=" w-[80%] py-1 pr-2 text-gray-200 bg-transparent focus:outline-none "
						type="email"
						id="email"
						disabled
						bind:value={$user.email}
					/>
				</div>
				<div class=" flex flex-col justify-start ">
					<label for="phone_number" class=" text-gray-400 ">Phone</label>
					<input
						class={`w-[50%] py-1 pr-2  bg-transparent focus:outline-none ${
							isDisabled ? 'text-gray-200' : ' caret-red-600 border-b-red-600 border-b-[1px]'
						}`}
						type="text"
						id="phone_number"
						bind:value={phone_number}
						disabled
					/>
				</div>
				<div class=" flex items-center gap-5 ">
					<label for="date_joined" class=" text-gray-400 ">Joined:</label>
					<input
						class=" w-[80%] py-1 pr-2 text-gray-200 bg-transparent focus:outline-none "
						type="text"
						id="date_joined"
					/>
					<button
						type="submit"
						class={`bg-red-600 rounded-md py-1 px-2 text-sm ${
							isDisabled ? 'bg-gray-400' : 'bg-red-600 hover:scale-105'
						}`}
						disabled={isDisabled}>Update</button
					>
				</div>
			</form>
		</div>
	</div>
</section>
