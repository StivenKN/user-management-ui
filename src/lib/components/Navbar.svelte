<script lang="ts">
	import Icon from '@iconify/svelte'
	export let isLogged: boolean
</script>

<div class="navbar bg-base-200">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" for="ul" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/"><Icon icon="ri:home-fill" height={20} width={20} />Inicio</a></li>
				<li><a href="/"><Icon icon="tabler:dashboard" height={20} width={20} />Dashboard</a></li>
				<li>
					<a href="/"
						><Icon icon="material-symbols:data-object" height={20} width={20} />Crear objeto</a
					>
				</li>
			</ul>
		</div>
		<a href="/"><Icon icon="iconoir:database-solid" height={25} width={25} /></a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/"><Icon icon="ri:home-fill" height={20} width={20} />Inicio</a></li>
			<li><a href="/"><Icon icon="tabler:dashboard" height={20} width={20} />Dashboard</a></li>
			<li>
				<a href="/"
					><Icon icon="material-symbols:data-object" height={20} width={20} />Crear objeto</a
				>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<ul class="menu menu-horizontal flex-none">
			{#if isLogged}
				<li>
					<a href="/"><Icon icon="icon-park-solid:config" height={20} width={20} />Configuración</a>
				</li>
				<li>
					<a href="/">
						<Icon icon="majesticons:logout" height={20} width={20} />
						Cerrar sesión
					</a>
				</li>
			{:else}
				<li>
					<a href="/login"
						><Icon icon="majesticons:login-line" height={20} width={20} />Iniciar sesión</a
					>
				</li>
				<li>
					<a href="/register"
						><Icon icon="mdi:register-outline" height={20} width={20} />Registrarse</a
					>
				</li>
			{/if}
		</ul>
	</div>
</div>
