<script lang="ts">
</script>

<main class="grid h-screen bg-secondary-content">
	<section class="grid place-content-center">
		<div class="card h-96 w-96 border bg-base-100 shadow-xl">
			<div class="card-body">
				<div class="card-title">
					<h2 class="mx-auto">Inicia sesión para continuar</h2>
				</div>
				<section class="h-full">
					<form method="POST" class="grid h-full items-center">
						<div class="form-control w-full max-w-xs">
							<label class="label" for="email">
								<span class="label-text">Correo electrónico</span>
							</label>
							<input
								type="text"
								name="email"
								placeholder="example@example.com"
								class="input input-bordered w-full max-w-xs"
							/>
						</div>
						<div class="form-control w-full max-w-xs">
							<label class="label" for="password">
								<span class="label-text">Contraseña</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="*********"
								class="input input-bordered w-full max-w-xs"
							/>
						</div>
						<button type="submit" class="btn btn-block">Enviar</button>
					</form>
				</section>
			</div>
		</div>
	</section>
</main>
