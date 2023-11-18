<script lang="ts">
	import '../app.postcss'
	import type { LayoutData } from './$types'
	import Navbar from '$lib/components/Navbar.svelte'
	import { page } from '$app/stores'
	import { ToastContainer, FlatToast } from 'svelte-toasts'

	export let data: LayoutData
</script>

<ToastContainer
	placement="top-right"
	theme="dark"
	type="error"
	duration={5000}
	width="350px"
	let:data
>
	<FlatToast {data} />
</ToastContainer>
{#if $page.route.id !== '/login'}
	<Navbar isLogged={data.isLogged} />
{/if}
<slot />
