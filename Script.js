// script.js
const galleries = document.querySelectorAll('.gallery');

galleries.forEach(gallery => {
    const prevButton = gallery.querySelector('.prev');
    const nextButton = gallery.querySelector('.next');
    const imageContainer = gallery.querySelector('.image-container');
    const images = imageContainer.querySelectorAll('img');
    let currentImageIndex = 0;

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImageDisplay();
    }

    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImageDisplay();
    }

    function updateImageDisplay() {
        images.forEach((image, index) => {
            image.style.display = index === currentImageIndex ? 'block' : 'none';
        });
    }

    prevButton.addEventListener('click', showPreviousImage);
    nextButton.addEventListener('click', showNextImage);
});