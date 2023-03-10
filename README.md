
# Kess payment

This documentation aims to provide all the information you need to work with Kess library.

## Installation

```bash
  npm install kesspay
```

## Usage

```javascript
  const Kess = require('kesspay')
```

Create new instance of Kess

```javascript
  const kess = new Kess({
        API_URL: {YOUR_API_URL},
        USERNAME: {YOUR_USERNAME},
        PASSWORD: {YOUR_PASSWORD},
        CLIENT_ID: {YOUR_CLIENT_ID},
        CLIENT_SECRET: {YOUR_CLIENT_SECRET},
        SELLER_CODE: {YOUE_SELLER_CODE},
        API_SECRET_KEY: {YOUR_API_SECRET_KEY}
  })
```

## Usage/Examples

Generate payment link

```javascript
const link = await kess.generatePaymentLink({
        body: "Delishop",
        currency: "USD",
        out_trade_no: "TR-20230310104700",
        total_amount: 10,
        invoke_reuse: 1
    })
console.log(link)
```

List all payment method

```javascript
const allPaymentMethod = await kess.listAllPaymentMethod()
console.log(allPaymentMethod)
```

## Kess Documentation

[Documentation](https://devwebpayment.kesspay.io/docs)
