<script lang="ts">
	import Icon from '@iconify/svelte'
	export let isLogged: boolean
</script>

<nav class="navbar bg-base-200">
	<section class="navbar-start">
		<a href="/"><Icon icon="iconoir:database-solid" height={25} width={25} /></a>
	</section>
	<section class="navbar-center flex">
		<ul class="menu menu-horizontal">
			<li><a href="/"><Icon icon="ri:home-fill" height={20} width={20} />Inicio</a></li>
			<li><a href="/"><Icon icon="tabler:dashboard" height={20} width={20} />Dashboard</a></li>
			<li>
				<a href="/"
					><Icon icon="material-symbols:data-object" height={20} width={20} />Crear objeto</a
				>
			</li>
		</ul>
	</section>
	<section class="navbar-end">
		<ul class="menu menu-horizontal bg-base-200 rounded-box">
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
	</section>
</nav>
