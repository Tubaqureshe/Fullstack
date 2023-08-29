const app = require('express')
const router = app.Router()
const { demoMail, createOrder,  orderbyId, allOrders} = require('./controller')


router.post('/send-domo-email', demoMail)
router.post('/create-order', createOrder)
router.get('/all-orders', allOrders)
router.get('/order-by-id/:_id', orderbyId)



module.exports = router