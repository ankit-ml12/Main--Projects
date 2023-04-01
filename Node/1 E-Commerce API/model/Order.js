const mongoose = require('mongoose')

const SingleOrderItemSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
    required: true,
  },
})
const OrderSchema = new mongoose.Schema(
  {
    tax: {
      type: Number,
      required: true,
    },
    shippingFee: {
      type: Number,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'failer', 'paid', 'delivered', 'canceled'],
      default: 'pending',
    },
    orderItems: [SingleOrderItemSchema],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
    client_secret: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
