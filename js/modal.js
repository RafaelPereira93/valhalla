const images = document.querySelectorAll(".images img");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const modalContent = document.querySelector(".modal-content");

const addNewImageIntoModal = ({ target }) => {
  const newImage = document.createElement("img");
  const srcNewImg = target.src.replaceAll("thumb", "full");

  newImage.setAttribute("src", srcNewImg);

  const isImageExists = modalContent.querySelector("img");

  if (isImageExists) isImageExists.remove();

  modalContent.prepend(newImage);
};

const showModalAndCloseModalBtn = () => {
  modal.classList.add("show");
  btnCloseModal.classList.add("show");
};

const handleModal = (event) => {
  showModalAndCloseModalBtn();
  addNewImageIntoModal(event);
};

images.forEach((image) => image.addEventListener("click", handleModal));

const closeModal = (event) => {
  const isDataJs = event.target.dataset.js;

  if (isDataJs) {
    modal.classList.remove("show");
  }
};

modal.addEventListener("click", closeModal);
