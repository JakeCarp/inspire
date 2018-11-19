const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=desert'
const apiUrl = url + encodeURIComponent(url2);



//@ts-ignore
const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImage(callWhenDone) {
		// ^^^^^^^ How do you call this function?
		console.log("Looking for a good pic")
		imgApi().then(res => {
			console.log('Image Data:', res.data)
			let image = res.data.images[Math.floor(Math.random() * res.data.images.length - 1)]
			callWhenDone(image)
		})
	}
}
