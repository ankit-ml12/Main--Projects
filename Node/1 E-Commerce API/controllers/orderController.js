const getAllOrders = async (req, res) => {
  res.send('get all order')
}
const getSingleOrder = async (req, res) => {
  res.send('get single order')
}
const getCurrentUserOrders = async (req, res) => {
  res.send('get corrent order')
}
const createOrder = async (req, res) => {
  res.send('create order')
}
const updateOrder = async (req, res) => {
  res.send('update order')
}

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
}
