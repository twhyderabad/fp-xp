const axios = require('axios');
const R = require('ramda');

const URL = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json';
const symbols = ["AMZN","YHOO","FB","GOOGL","MSFT"];

const max = R.reduce(R.max, 0);
const print = console.log.bind(console);
const fetchers = R.map(s => axios.get(URL, {params: {symbol: s}}), symbols);
Promise.all(fetchers).then(R.compose(print, max, R.map(res => res.data.LastPrice)));