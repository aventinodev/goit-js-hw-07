import { galleryItems } from "./gallery-items.js";
// Change code below this line
let activeImageSourse = null;
let instance = null;
const galleryRef = document.querySelector(".gallery");
const markupGallery = createGalleryMarkUp(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", markupGallery);

function createGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item "><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
    )
    .join("");
}
galleryRef.addEventListener("click", onClickImageGallery);

function onClickImageGallery(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  activeImageSourse = getImageSourse(event);
  openModal(activeImageSourse);
}
function getImageSourse(event) {
  return event.target.dataset.source;
}

function openModal() {
  instance = basicLightbox.create(
    `
		<img width="1280" height="852" src="${activeImageSourse}">`
  );
  instance.show(() => {
    window.addEventListener("keydown", closeModalbyEscape);
  });
}
function closeModal() {
  instance.close(() => {
    window.removeEventListener("keydown", closeModalbyEscape);
  });
}

function closeModalbyEscape(event) {
  const isEscape = event.code === "Escape";
  if (isEscape) {
    closeModal();
  }
}
console.log(galleryRef);
