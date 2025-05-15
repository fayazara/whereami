# whereami

A super simple cloudflare worker that returns the location of the user based on the IP address.

You deploy it on your own Cloudflare account.

## Usage

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/fayazara/whereami)

## Response

```json
{
	"city": "Bengaluru",
	"postalCode": "562130",
	"region": "Karnataka",
	"regionCode": "KA",
	"country": "IN",
	"continent": "AS",
	"timezone": "Asia/Kolkata",
	"latitude": "12.97530",
	"longitude": "77.59100",
	"asOrganization": "Airtel",
	"userIP": "your-ip-address"
}
```

## Pricing (Cloudflare Workers)

Free plan: 100k requests per day on the free plan.

Paid plan: Pay $5/mo for 10M requests per month.

## Alternatives

There's honestly not much happening here, I needed this for a specific use case and I even found some free services but I didnt want to use them.

- https://apip.cc/json
- https://ipinfo.io/json
- https://ip2c.org/s
