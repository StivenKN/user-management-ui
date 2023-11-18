import { loginSchema } from '$lib/schemas'
import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
		const result = loginSchema.safeParse(formData)
		if (!result.success) {
			console.log(result.error.issues)
			return fail(400)
		}
		console.log(formData, result)
		return { success: true }
	}
} satisfies Actions
