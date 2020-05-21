const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const ulGallery = document.querySelector(".js-gallery");
// console.log(ulGallery);

const lightBox = document.querySelector(".js-lightbox");
// console.log(lightBox);

const buttonCloseModal = lightBox.querySelector(
  "button[data-action='close-lightbox']"
);
console.log(buttonCloseModal);

const img = lightBox.querySelector("img.lightbox__image");
// console.log(img);

const addImages = (images) =>
  images.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`,
    ""
  );

ulGallery.insertAdjacentHTML("beforeend", addImages(images));

ulGallery.addEventListener("click", modal);

buttonCloseModal.addEventListener("click", buttonClose);

function modal(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.preventDefault();
  // console.log(event.target);
  lightBox.classList.add("is-open");

  const src = event.target.getAttribute("data-source");

  img.setAttribute("src", src);
}

function buttonClose(event) {
  event.preventDefault();
  lightBox.classList.remove("is-open");
  img.removeAttribute("src");
}
