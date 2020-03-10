// confluxWeb.cfx

const ConfluxWeb = require('conflux-web')

const compiledContract = require('./FC.json')
const abi = compiledContract.abi

const confluxWeb = new ConfluxWeb('https://wallet.confluxscan.io/api/')

export { abi }
export default confluxWeb
