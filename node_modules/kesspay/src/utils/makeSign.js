const crypto = require('crypto')

const makeSign = (param, api_secret_key) => {
    let unorderedObj = param
    let dKey = Object.keys(unorderedObj)
    let dataString = ''
    dKey.sort()
    dKey.forEach(function (item) {
        if (item != "setting" || item != "detail") {
            let val = unorderedObj[item]
            dataString += item + '=' + val + '&'
        }
    })
    dataString += "key=" + api_secret_key
    return crypto.createHash('md5').update(dataString).digest('hex')
}

module.exports = makeSign