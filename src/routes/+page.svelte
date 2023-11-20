<script lang="ts">
	import Icon from '@iconify/svelte'
</script>

<main>
	<section class="hero h-90vh" style="background-image: url(/hero-bg.jpg);">
		<div class="hero-overlay bg-opacity-60"></div>
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-3xl lg:text-5xl font-bold uppercase">
					Crea tu objeto de usuarios sin complicaciones
				</h1>
				<p class="mb-5">
					Maneja tus usuarios mediante rutas, un paso menos para tus base de datos.
				</p>
				<a href="/register" class="btn btn-primary">Regístrate</a>
			</div>
		</div>
	</section>
	<section class="hero h-screen bg-base-300">
		<div class="hero-content gap-32 flex-col lg:flex-row">
			<aside class="mockup-code">
				<pre data-prefix="$"><code class="text-lg">npm start</code></pre>
			</aside>
			<section class="flex flex-col gap-4">
				<h2 class="font-bold text-4xl max-w-lg">
					Si lo prefieres puedes instalar tu API de forma local
				</h2>
				<p class="text-xl">Sin complicaciones. ¡Solo importas y funciona!</p>
				<a
					href="https://github.com/ConanGH-S/user-management-database-api/releases/tag/v2.0.0"
					target="_blank"
					class="btn btn-primary w-fit">Descargalo aquí</a
				>
			</section>
		</div>
	</section>
	<section class="hero h-90vh bg-base-100">
		<section class="hero-content flex-col gap-10">
			<h2 class="text-center text-4xl font-bold">O puedes conectarte desde la web</h2>
			<div class="mockup-browser border bg-base-300">
				<div class="mockup-browser-toolbar">
					<div class="input">
						https://github.com/ConanGH-S/user-management-database-api/releases/tag/v2.0.0
					</div>
				</div>
				<div class="flex flex-col items-center justify-center px-4 py-16 bg-base-200">
					<span class="text-green-600 text-lg">¡Conectado!</span>
					<Icon icon="clarity:users-solid" width={40} height={40} />
				</div>
			</div>
			<a href="/" target="_blank" class="btn btn-outline btn-success">Crea tu base de datos aquí</a>
		</section>
	</section>
</main>
