import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawQuote(quote) {

	document.getElementById('quote').innerHTML = `
	<h4 class="words">${quote.body}</h4>
	<p class="words"> - ${quote.author}</p>
	`
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(drawQuote)
	}
}
