const { STOREFRONT_API_URL, REQUEST_TIMEOUT } = process.env
//Example of STOREFRONT_API_URL = "https://demo.spreecommerce.org/api/v2/storefront"
//Example of REQUEST_TIMEOUT = 20000
export default {
    baseURL: STOREFRONT_API_URL,
    timeout: parseInt(REQUEST_TIMEOUT, 10),
    headers: {
        'Content-Type': 'application/json',
    },
}
