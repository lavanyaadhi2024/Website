const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("modal-caption");

let currentImageIndex = 0;

function openModal(index) {
  currentImageIndex = index;
  updateModal();
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function navigate(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  updateModal();
}

function updateModal() {
  const img = images[currentImageIndex];
  modalImg.src = img.src;
  caption.textContent = img.alt;
}
