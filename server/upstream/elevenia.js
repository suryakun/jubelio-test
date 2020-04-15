const axios = require('axios')
const xmlParser = require('xml2json')
const apiKey = '721407f393e84a28593374cc2b347a98'

const getDetail = async sku => {
    try {
        const response = await axios({
            method: 'GET',
            url: `http://api.elevenia.co.id/rest/prodservices/product/details/${sku}`,
            headers: {
                ContentType: "application/xml",
                AcceptCharset: "utf-8",
                openapikey: apiKey
            }
        })
        const info = xmlParser.toJson(response.data)
        const p = JSON.parse(info)
        const product = p.Product
        return {pic: product.prdImage01, description: product.htmlDetail}
    } catch(e) {
        console.log(e)
    }
}

const getData = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'http://api.elevenia.co.id/rest/prodservices/product/listing?page=1',
            headers: {
                ContentType: "application/xml",
                AcceptCharset: "utf-8",
                openapikey: apiKey
            }
        })
        const info = xmlParser.toJson(response.data)
        const p = JSON.parse(info)
        const products = Promise.all(p.Products.product.map( async e => {
            const detail = await getDetail(e.prdNo)
            const prd = {name: e.prdNm, sku: e.prdNo, price: parseInt(e.selPrc)}
            const data = Object.assign(prd, detail)
            return data
        }))
        const pr = await products
        return pr
    } catch(e) {
        console.log(e)
    }
}

module.exports.getData = getData
