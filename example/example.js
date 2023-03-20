const Kess = require('../index.js')

const kess = new Kess({
    API_URL: {WEBPAY_API_URL},
    USERNAME: {WEBPAY_USERNAME},
    PASSWORD: {WEBPAY_PASSWORD},
    CLIENT_ID: {WEBPAY_CLIENT_ID},
    CLIENT_SECRET: {WEBPAY_CLIENT_SECRET},
    SELLER_CODE: {SELLER_CODE},
    API_SECRET_KEY: {WEBPAY_API_SECRET_KEY}
})

async function generatePaymentLink() {
    const link = await kess.generatePaymentLink({
        body: "Delishop",
        currency: "USD",
        out_trade_no: "TR-12345678",
        total_amount: 10,
        invoke_reuse: 1
    })
    console.log(link)
}

async function listAllPaymentMethod() {
    const payment = await kess.listAllPaymentMethod()
    console.log(payment)
}

async function queryOrder() {
    const payment = await kess.queryOrder({
        out_trade_no: "TR-12345678"
    })
    console.log(payment)
}

async function queryOrderByDateRange() {
    const payment = await kess.queryOrderByDateRange({
        start_date: "2023-02-21",
        end_date: "2023-03-10",
        per_page: 10,
        page: 1

    })
    console.log(payment)
}

async function clsoeORder() {
    const payment = await kess.closeOrder({
        out_trade_no: "TR-12345678"

    })
    console.log(payment)
}

async function nativePay() {
    const payment = await kess.nativePay({
        body: "Delishop",
        currency: "USD",
        out_trade_no: "TR-12345678",
        total_amount: 10,
        service_code: "ABAAKHPP" //get from listAllPaymentMethod function
    })
    console.log(payment)
}