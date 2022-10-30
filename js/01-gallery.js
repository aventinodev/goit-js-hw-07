import { galleryItems } from "./gallery-items.js";
// Change code below this line
let activeImageSourse = null;
const galleryRef = document.querySelector(".gallery");
const markupGallery = createImageGalleryMarkUp(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", markupGallery);

galleryRef.addEventListener("click", getImageSourse);

function createImageGalleryMarkUp(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item "><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
    )
    .join("");
}

function getImageSourse(event) {
  event.preventDefault();
  const activeImage = event.target;
  activeImageSourse = activeImage.dataset.source;
  onCreateModal(event);
}

function onCreateModal(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
		<img width="1280" height="852" src="${activeImageSourse}">`
  );

  instance.show(() => {
    window.addEventListener("keydown", onClickEscape);
  });

  function onClickEscape(event) {
    const isEscape = event.code === "Escape";
    if (isEscape) {
      instance.close(() => {
        window.removeEventListener("keydown", onClickEscape);
      });
    }
  }
}
console.log(galleryRef);
