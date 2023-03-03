const { Kess } = require('./kesspay')
require('dotenv').config()


const WEBPAY_API_URL = process.env.WEBPAY_API_URL
const WEBPAY_USERNAME= process.env.WEBPAY_USERNAME
const WEBPAY_PASSWORD= process.env.WEBPAY_PASSWORD
const WEBPAY_CLIENT_ID= process.env.WEBPAY_CLIENT_ID
const WEBPAY_CLIENT_SECRET= process.env.WEBPAY_CLIENT_SECRET
const SELLER_CODE= process.env.SELLER_CODE
const WEBPAY_API_SECRET_KEY= process.env.WEBPAY_API_SECRET_KEY

const kess = new Kess({
    API_URL: WEBPAY_API_URL,
    USERNAME: WEBPAY_USERNAME,
    PASSWORD: WEBPAY_PASSWORD,
    CLIENT_ID: WEBPAY_CLIENT_ID,
    CLIENT_SECRET: WEBPAY_CLIENT_SECRET,
    SELLER_CODE: SELLER_CODE,
    API_SECRET_KEY: WEBPAY_API_SECRET_KEY
})

async function gg(){
    const link = await kess.generatePaymentLink({
        body: "hello",
        currency: "USD",
        out_trade_no: "12d31243",
        total_amount: 10,
        invoke_reuse:1
    })
    console.log(link)
}

async function paymentMethod(){
    const payment = await kess.listAllPaymentMethod()
    console.log(payment)
}
gg()