import { body, box, gallery, closeGalleryBtn, navContainer, galleryContainer } from './'
import createGallery from './createGallery'

const displayGallery = () => {
    box.forEach(boxes => {
        boxes.addEventListener('click', () => {
            gallery.classList.toggle('showGallery')
            body.classList.toggle('fixScroll')
            createGallery(boxes.id.split(' '))
        })
    })

    closeGalleryBtn.addEventListener('click', () => {
        gallery.classList.toggle('showGallery')
        galleryContainer.removeChild(galleryContainer.lastChild)
        body.classList.toggle('fixScroll')
    })

    navContainer.addEventListener('click', () => {
        gallery.classList.remove('showGallery')
        galleryContainer.removeChild(galleryContainer.lastChild)
        body.classList.remove('fixScroll')
    })

}

export default displayGallery
