import ImageService from "./image-service.js";

let is = new ImageService()


function showImage(image) {
  document.body.style.backgroundImage = `url(${image.url})`
}



export default class ImageController {
  constructor() {
    is.getImage(showImage)
  }

}

