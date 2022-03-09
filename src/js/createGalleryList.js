import { galleryData } from '../data/imagenes'

const createGalleryList = (category, subCategory) => {
    const imgArray = galleryData[category][subCategory][1]
    let createList = []

    console.log(imgArray)

    imgArray.forEach(list => {
         createList.push(
             `<li class="splide__slide">
                <img loading="lazy" src="/assets/${list}.jpg" />
             </li>`
         )
    })
    
    const imgList = createList.toString().replaceAll(',', '')

    return imgList
}

export default createGalleryList