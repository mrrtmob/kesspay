const axios = require('axios')
const GrantType = require('../utils/grant_type')
const getToken = async ({ api_url, client_id, client_secret, username, password }) => {
    var param = {
        grant_type: GrantType.PASSWORD,
        client_id: client_id,
        client_secret: client_secret,
        username: username,
        password: password
    }
    let res = await axios.post(api_url + "oauth/token", param, {
        headers: { 'Content-Type': 'application/json' },
    })
    if (typeof res.data == "undefined") {
        return null
    }
    const WEBPAY_TOKEN = res.data.access_token
    return WEBPAY_TOKEN
}

module.exports = getToken