import { createClient } from '$lib/prismicio';

export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const client = createClient();

	const page = await client.getByUID('page', params.uid);

	return {
		page
	};
}