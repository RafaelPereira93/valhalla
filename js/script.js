const menuHamburguer = document.querySelector(".hamburguer");
const linkList = document.querySelector(".link-list");

const btnPlayTrailer = document.querySelector(".play-trailer");
const layers = document.querySelectorAll(".layer");
const trailer = document.querySelector(".valhalla-trailer");

const closeTrailer = document.querySelector(".close-trailer");

const removeOrAddLayers = (action) => {
  action === "add"
    ? layers.forEach((layer) => layer.classList.add("active"))
    : layers.forEach((layer) => layer.classList.remove("active"));
};

const removeOrAddIframe = (action) => {
  action === "add"
    ? trailer.classList.add("active")
    : trailer.classList.remove("active");
};

const showMenuHamburguer = ({ currentTarget }) => {
  currentTarget.classList.toggle("active");
  linkList.classList.toggle("active");
};

menuHamburguer.addEventListener("click", showMenuHamburguer);

btnPlayTrailer.addEventListener("click", () => {
  removeOrAddLayers("add");
  removeOrAddIframe("add");
  closeTrailer.classList.add("active");
  trailer.play();
});

closeTrailer.addEventListener("click", (event) => {
  removeOrAddLayers("remove");
  removeOrAddIframe("remove");
  event.target.classList.remove("active");
  trailer.pause();
  trailer.currentTime = 0;
});

trailer.addEventListener("click", (event) => {
  const videoTrailer = event.target;
  videoTrailer.classList.toggle("paused");

  videoTrailer.classList.contains("paused")
    ? videoTrailer.pause()
    : videoTrailer.play();
});
