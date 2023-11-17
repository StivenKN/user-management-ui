<script lang="ts">
	import { createForm } from 'felte'
	import { loginSchema } from '$lib/schemas'
	import type { ILogin } from '../app'

	let errorEmail = false
	let errorPassword = false

	const { form } = createForm({
		onSubmit: (values: ILogin) => {
			loginSchema.parse(values)
		},
		onError: (value: any) => {
			const [error] = JSON.parse(value.message)
			console.log(error)
			error.path[0] === 'email' ? (errorEmail = true) : (errorEmail = false)
			error.path[0] === 'password' ? (errorPassword = true) : (errorPassword = false)
		},
		onSuccess: (value) => {
			console.log(value, 'chao')
		}
	})
</script>

<main class="grid md:grid-cols-[40%_1fr] h-screen bg-secondary-content">
	<aside class="bg-white h-full hidden md:block"></aside>
	<section class="grid place-content-center">
		<div class="card h-96 w-full border bg-base-100 shadow-xl">
			<div class="card-body">
				<div class="card-title">
					<h2>Bienvenido a la interfaz user-manage</h2>
				</div>
				<section>
					<p class="py-2">Inicia sesión para continuar</p>
					<form action="" use:form class="grid h-full justify-items-center">
						<div class="form-control w-full max-w-xs">
							<label class="label" for="email">
								<span class="label-text">Correo electrónico</span>
							</label>
							<input
								type="text"
								name="email"
								placeholder="example@example.com"
								class="input input-bordered w-full max-w-xs"
								class:input-error={errorEmail}
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
								class:input-error={errorPassword}
							/>
						</div>
						<button class="btn btn-block">Enviar</button>
					</form>
				</section>
			</div>
		</div>
	</section>
</main>
