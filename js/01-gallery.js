import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
// створення розмітки
const markUpImageRef = (galleryItem) => {
  const { preview, original, description } = galleryItem;

  return `<div class="gallery__item "><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
};

const makeImageGalleryMarkUp = galleryItems.map(markUpImageRef).join("");

galleryRef.insertAdjacentHTML("beforeend", makeImageGalleryMarkUp);

// додаємо слухача подіі на галерею, отримуємо змінну, яка містить посилання на фото більшого формату
galleryRef.addEventListener("click", onClickGetSourceImageGallery);
let selectedImageSourse = null;

function onClickGetSourceImageGallery(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const currentActiveImage = document.querySelector(".gallery__image--active");

  if (currentActiveImage) {
    currentActiveImage.classList.remove("gallery__image--active");
  }
  const nextActiveImage = event.target;
  nextActiveImage.classList.add("gallery__image--active");
  selectedImageSourse = nextActiveImage.dataset.source;
}

galleryRef.onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1280" height="852" src="${selectedImageSourse}">
	`
    )
    .show();
};
