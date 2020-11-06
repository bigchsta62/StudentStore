const mongoose =require('mongoose')

const orderSchema = mongoose.Schema(
    {

        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },


        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                salary: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product'
                }

            }
        ],


        shippingAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            zip: { type: String, required: true },

        },
        // Travis wants to have multiple payment methods used ....I can only think is will be like this.
        paymentMethods: {

            type: String,
            required: true,


        },
        paymentMethods: {

            type: String,
            required: true,


        },
        // paypal payment methods....?  will leave the others open when we find out how they work.
        paymentMethods: {
            // this is whay paypal is said to render.
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String }

        },

        taxPrice: {

            type: Number,
            required: true,
            default: 0.0


        },
        totalPrice: {

            type: Number,
            required: true,
            default: 0.0


        },
        isPaid: {

            type: Boolean,
            required: true,
            default: false


        },
        paidAt: {
            type: Date
        },

        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },

        deliveredAt: {
            type: Date
        },
    }, {
    timestamps: true

}
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order