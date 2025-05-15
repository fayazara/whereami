export default {
	async fetch(request): Promise<Response> {
		return new Response(
			JSON.stringify({
				city: request.cf?.city,
				postalCode: request.cf?.postalCode,
				region: request.cf?.region,
				regionCode: request.cf?.regionCode,
				country: request.cf?.country,
				continent: request.cf?.continent,
				timezone: request.cf?.timezone,
				latitude: request.cf?.latitude,
				longitude: request.cf?.longitude,
				asOrganization: request.cf?.asOrganization,
				userIP: request.headers.get('CF-Connecting-IP'),
			})
		);
	},
} satisfies ExportedHandler<Env>;
