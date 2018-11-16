import Quote from "../../models/quote.js";

let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'https://favqs.com/api/qotd';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api


function handleError(err) {
	throw new Error(err)
}


//@ts-ignore
const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


export default class QuoteService {
	getQuote(callWhenDone) {
		console.log('looking for some good quotes')
		quoteApi().then((res) => {
			let newQuote = res.data.quote
			newQuote = new Quote(newQuote)
			callWhenDone(newQuote)
		})
	}
}
