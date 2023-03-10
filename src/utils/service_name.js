const ServiceName = Object.freeze({
    createOrder: "webpay.acquire.createOrder",
    closeOrder: "webpay.acquire.closeOrder",
    listPaymentMethod: "webpay.acquire.getpaymentmethods",
    listBakongMember: "webpay.acquire.getbakongmembers",
    queryOrder: "webpay.acquire.queryOrder",
    queryOrderByDateRange: "webpay.acquire.queryorderbydaterange",
    nativePay: "webpay.acquire.nativePay"
})

module.exports = ServiceName