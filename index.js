const generatePaymentLinkService = require('./src/services/generatePaymentLinkService')
const listAllPaymentMethodService = require('./src/services/listAllPaymentMethodService')
const QueryOrderService = require('./src/services/queryOrderService')
const QueryOrderByDateRangeService = require('./src/services/queryOrderByDateRangeService')

const ServiceName = require('./src/utils/service_name')
const CloseOrderService = require('./src/services/closeOrderService')
const nativePayService = require('./src/services/nativePayService')
class Kess {
    constructor({ API_URL, USERNAME, PASSWORD, CLIENT_ID, CLIENT_SECRET, SELLER_CODE, API_SECRET_KEY }) {
        this.API_URL = API_URL,
            this.USERNAME = USERNAME,
            this.PASSWORD = PASSWORD,
            this.CLIENT_ID = CLIENT_ID,
            this.CLIENT_SECRET = CLIENT_SECRET,
            this.SELLER_CODE = SELLER_CODE,
            this.API_SECRET_KEY = API_SECRET_KEY
    }

    #getCredential() {
        return {
            sign_type: "MD5",
            seller_code: this.SELLER_CODE,
            login_type: "ANONYMOUS",
            api_url: this.API_URL,
            client_id: this.CLIENT_ID,
            client_secret: this.CLIENT_SECRET,
            api_secret_key: this.API_SECRET_KEY,
            password: this.PASSWORD,
            username: this.USERNAME,
        }
    }

    /**
    * Use this service to create a preorder for your seller and deliver the payment link to a buyer to process the payment.
    *
    * @param body  Order title. (required)
    * @param out_trade_no Unique order ID. (required)
    * @param total_amount Total amount with two decimal. (required)
    * @param currency Currency code. Ex: USD or KHR. (required)
    * @param notify_url Kess will send the payment notification to the Notify URL.
    * @param expires_in expires time. Default value is 1800
    * @param detail Product detail.
    * @param detail.no Product ID. (required) 
    * @param detail.name Product Name (required) 
    * @param detail.price Unit price (required)
    * @param detail.qty Unit quantity (required)
    * @param discount Unit discount
    */
    async generatePaymentLink({ out_trade_no, body, total_amount, currency, notify_url, invoke_reuse, expires_in, detail }) {
        const res = await generatePaymentLinkService({
            ...this.#getCredential(),
            service: ServiceName.createOrder,
            out_trade_no,
            body,
            total_amount,
            currency,
            notify_url,
            invoke_reuse,
            expires_in,
            detail
        })
        return res
    }

    /**
    * Use this service to create a preorder for your seller and deliver the payment link to a buyer to process the payment.
    *
    * @param body  Order title. (required)
    * @param out_trade_no Unique order ID. (required)
    * @param total_amount Total amount with two decimal. (required)
    * @param currency Currency code. Ex: USD or KHR. (required)
    * @param notify_url Kess will send the payment notification to the Notify URL.
    * @param expires_in expires time. Default value is 1800
    * @param detail Product detail.
    * @param detail.no Product ID. (required) 
    * @param detail.name Product Name (required) 
    * @param detail.price Unit price (required)
    * @param detail.qty Unit quantity (required)
    * @param discount Unit discount
    */
    async nativePay({ out_trade_no, body, total_amount, currency, notify_url, invoke_reuse, expires_in, detail, only_deeplink, is_ios_device, service_code }) {
        const res = await nativePayService({
            ...this.#getCredential(),
            service: ServiceName.nativePay,
            out_trade_no,
            body,
            total_amount,
            currency,
            notify_url,
            invoke_reuse,
            expires_in,
            detail,
            only_deeplink,
            is_ios_device,
            service_code
        })
        return res
    }

    /**
     * @returns Pull available payment methods under merchant account.
     */
    async listAllPaymentMethod() {
        const res = await listAllPaymentMethodService({
            ...this.#getCredential(),
            service: ServiceName.listPaymentMethod,
        })
        return res.data
    }
    /**
     * @return Transaction inquiry.
     */
    async queryOrder({ out_trade_no }) {
        const res = await QueryOrderService({
            ...this.#getCredential(),
            service: ServiceName.queryOrder,
            out_trade_no
        })
        return res.data
    }

    /**
     * @return Transaction inquiry.
     */
    async queryOrderByDateRange({ start_date, end_date, per_page, page }) {
        const res = await QueryOrderByDateRangeService({
            ...this.#getCredential(),
            service: ServiceName.queryOrderByDateRange,
            start_date,
            end_date,
            per_page,
            page
        })
        return res.data
    }

    /**
     * @return Update transaction status to CLOSED.
     */
    async closeOrder({ out_trade_no }) {
        const res = await CloseOrderService({
            ...this.#getCredential(),
            service: ServiceName.closeOrder,
            out_trade_no
        })
        return res.data
    }
}

module.exports = Kess

