const getToken = require('../utils/getToken')
const makeSign = require('../utils/makeSign')
const axios = require('axios')
const requireParam = require('../utils/required_param')
const nativePayService = async ({
    service,
    sign_type,
    seller_code,
    login_type,
    api_url,
    client_id,
    client_secret,
    api_secret_key,
    password,
    username,
    out_trade_no = requireParam('out_trade_no'),
    body = requireParam('body'),
    total_amount = requireParam('total_amount'),
    currency = requireParam('currency'),
    invoke_reuse,
    notify_url,
    expires_in,
    detail,
    only_deeplink,
    is_ios_device,
    service_code = requireParam('currency')
}) => {
    let param = {
        service,
        login_type,
        sign_type,
        seller_code,
        out_trade_no,
        body,
        total_amount,
        currency,
        service_code,
    }
    if (notify_url) param.notify_url = notify_url
    if (invoke_reuse) param.invoke_reuse = invoke_reuse
    if (expires_in) param.expires_in = expires_in
    if (detail) param.detail = detail
    if (only_deeplink) param.only_deeplink = only_deeplink
    if (is_ios_device) param.is_ios_device = is_ios_device
    if (service_code) param.service_code = service_code
    
    param.sign = makeSign(param, api_secret_key)
    try {
        let token = await getToken({ api_url, client_id, client_secret, password, username })
        let res = await axios.post(api_url + "api/mch/v2/gateway", param, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        })
        return res.data
    } catch (e) {
        return e.response
    }
}

module.exports = nativePayService