import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
let activeImageSourse = null;
let activeImage = null;

const markupGallery = createMarkupGallery(galleryItems);

function createMarkupGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" data-captionDelay="250"/>
</a>`
    )
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", markupGallery);

galleryRef.addEventListener("click", onClickGetSourceImageGallery);

function onClickGetSourceImageGallery(event) {
  event.preventDefault();
  activeImage = event.target;
  // console.log(activeImage);
  // removeClassFromActiveImage();
  // addClassToActiveImage(activeImage);
  // getImageSourse(activeImage);
}
// function removeClassFromActiveImage() {
//   const currentActiveImage = document.querySelector(".gallery__image--active");

//   if (currentActiveImage) {
//     currentActiveImage.classList.remove("gallery__image--active");
//   }
// }
// function addClassToActiveImage(image) {
//   image.classList.add("gallery__image--active");
// }
// function getImageSourse(image) {
//   activeImageSourse = image.dataset.source;
// }

let gallery = new SimpleLightbox(".gallery a");

gallery.on("show.simplelightbox", function () {
  console.log(gallery.on); // Do something…
});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // Some usefull information
});
console.log(gallery);
console.log(galleryItems);
