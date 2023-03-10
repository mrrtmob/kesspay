const getToken = require('../utils/getToken')
const makeSign = require('../utils/makeSign')
const axios = require('axios')
const requireParam = require('../utils/required_param')
const QueryOrderService = async ({
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
}) => {
    let param = {
        service,
        sign_type,
        seller_code,
        out_trade_no,
        login_type,
    }
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

module.exports = QueryOrderService