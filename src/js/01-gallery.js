
// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');

const cardsImages = createGalleryMarkuu(galleryItems);

function createGalleryMarkuu(galleryItems) {
   return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`
    }).join('');

    // console.log(galleryMarkup)
}

galleryContainer.insertAdjacentHTML('beforeend', cardsImages);

console.log(createGalleryMarkuu(galleryItems));

const lightboxOptions = {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
};

const lightboxGallery = new SimpleLightbox(".gallery a", lightboxOptions);
