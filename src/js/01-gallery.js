// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const divReference = document.querySelector('.gallery');
const Markup = createGalleryMarkup(galleryItems);
divReference.insertAdjacentHTML("beforeend", Markup);
divReference.addEventListener("click", onGalleryItemClick);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a>`;
    }).join('');
}
const addGalleryMarkup = createGalleryMarkup(galleryItems);
divReference.innerHTML = addGalleryMarkup;

function onGalleryItemClick(event) {
    event.preventDefault();
    
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const galleryLink = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${galleryLink}">`);
    instance.show();

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") instance.close();
    });
}
console.log(galleryItems);
