import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markupGallery = createImageGalleryMarkUp(galleryItems);

let activeImageSourse = null;

galleryRef.insertAdjacentHTML("beforeend", markupGallery);

galleryRef.addEventListener("click", onClickGetSourceImageGallery);

function createImageGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item "><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
    )
    .join("");
}

function onClickGetSourceImageGallery(event) {
  event.preventDefault();
  const activeImage = event.target;
  removeClassFromActiveImage();
  addClassToActiveImage(activeImage);
  getImageSourse(activeImage);
}
function removeClassFromActiveImage() {
  const currentActiveImage = document.querySelector(".gallery__image--active");

  if (currentActiveImage) {
    currentActiveImage.classList.remove("gallery__image--active");
  }
}
function addClassToActiveImage(image) {
  image.classList.add("gallery__image--active");
}
function getImageSourse(image) {
  activeImageSourse = image.dataset.source;
}
galleryRef.onclick = (event) => {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  basicLightbox
    .create(
      `
		<img width="1280" height="852" src="${activeImageSourse}">
	`
    )
    .show();
  window.addEventListener("keydown", onClickEscape);
};

// window.removeEventListener("keydown", onClickEscape);

function onClickEscape(event) {
  const isEscape = event.code === "Escape";
  if (isEscape) {
    console.log(event.code);
    // galleryRef.onclick = () => basicLightbox.close();
  }
}
