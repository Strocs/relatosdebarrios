import { galleryContainer } from "./"
import createGalleryList from "./createGalleryList"
import Splide from "@splidejs/splide"

const createGallery = ([category, subCategory]) => {
	const template = `
        <div id="image-slider" class="splide">
            <div class="splide__track">
                <ul class="splide__list">
                    ${createGalleryList(category, subCategory).replaceAll('', "")}
	    	    </ul>
            </div>
        </div>
    `
	const div = document.createElement("div")
	div.innerHTML = template
	galleryContainer.append(div.firstElementChild)

	new Splide("#image-slider", {
		width : '100vw',
		height: '100vh',
  	}).mount()

	return div
}

export default createGallery
