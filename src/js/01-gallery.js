// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector("ul.gallery");

const markup = galleryItems
  .map((item) => {
    // const { original, preview, description } = item;
    return `<li class="list-item">
  <a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>`;
  })
  .join("");
gallery.insertAdjacentHTML("afterbegin", markup);

const galleryLightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});