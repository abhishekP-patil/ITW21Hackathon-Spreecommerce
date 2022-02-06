import mongoose from 'mongoose'

/*
cart = {
    "color": "white",
    "size": "L",
    "quantity": "2",
    "price": "$ 49.99",
    "name": "Knitted High-Neck Sweater",
    "image": "/rails/.../image.jpg",
    "productId": "21",
    "userId": "123456"
}
*/

/*
{
    userId: { type: String, required: true, unique: true },
    entries: { type: [
        {
            product: { type: {
                {
                    productId: { type: String, required: true },
                    productOptions: { type: {
                        color: { type: String, required: true },
                        size: { type: String, required: true },
                        quantity: { type: Number, required: true },
                        price: { type: String, required: true },
                        name: { type: String, required: true },
                        image: { type: String, required: true },
                    }, required: true },
                },
                { _id: false }
            }, required: true },
        },
        { _id: false }
    ], required: true, unique: true },
}
*/

/**
 * options_text property of one storefront api product modeö
 */
const cartProductOptionsSchema = new mongoose.Schema(
    {
        color: { type: String, required: true },
        size: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: String, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
    },
    { _id: false }
)

/**
 * identifiers of one single actual product from the storefront api
 * e.g. {Red "T-shirt with logo", size L}
 */
const cartProductSchema = new mongoose.Schema(
    {
        productId: { type: String, required: true },
        productOptions: { type: cartProductOptionsSchema, required: true },
    },
    { _id: false }
)

/**
 * a single list item in the shopping cart
 * e.g. {Red "T-shirt with logo", size L, 20 Times}
 */
const cartEntrySchema = new mongoose.Schema(
    {
        product: { type: cartProductSchema, required: true },
    },
    { _id: false }
)

const cartSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    entries: { type: [cartEntrySchema], required: true, unique: true },
})

export default mongoose.model('Cart', cartSchema)
