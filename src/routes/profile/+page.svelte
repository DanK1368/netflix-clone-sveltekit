<script>
	import avatar from '../../assets/avatar.webp';
</script>

<section class=" w-full min-h-[90vh] mt-[10vh] grid pb-5 md:mt-0  ">
	<div
		class=" rounded-xl bg-[#27282f] w-[90%] mx-auto p-5 md:max-w-[740px] md:max-h-[70%] md:place-self-center "
	>
		<div class="border-b-[1px] border-gray-700">
			<h2 class=" py-2 ">Details</h2>
		</div>
		<div class=" flex flex-col gap-10 pt-5 md:flex-row md:items-center md:gap-20 ">
			<div>
				<img
					class=" max-w-full w-[100px] h-[100px] object-cover rounded-full outline-2 outline-red-600 outline "
					src={avatar}
					alt="profile"
				/>
			</div>
			<div class=" flex flex-col gap-5 ">
				<div>
					<h3 class=" text-gray-400 text-xl ">Info</h3>
				</div>

				<div class=" flex gap-10 ">
					<div>
						<h3 class=" text-gray-400 ">First Name</h3>
						<p>Daniel</p>
					</div>
					<div>
						<h3 class=" text-gray-400 ">Last Name</h3>
						<p>Kött</p>
					</div>
				</div>
				<div>
					<h3 class=" text-gray-400 ">Email</h3>
					<p>danie@gmail.com</p>
				</div>
				<div>
					<h3 class=" text-gray-400 ">Phone</h3>
					<p>123123</p>
				</div>
				<div class=" flex items-center gap-5 ">
					<h3 class=" text-gray-400 ">Joined:</h3>
					<p>June 13, 2021</p>
				</div>
			</div>
		</div>
	</div>
</section>
