const galleryImage = document.getElementById("galleryImage");
let currentImageIndex = 0;

const images = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    // Add more image filenames here
];

// Function to show the previous image
function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    displayImage();
}

// Function to show the next image
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage();
}

// Function to display the current image
function displayImage() {
    const imageUrl = "images/" + images[currentImageIndex];
    galleryImage.src = imageUrl;
}

displayImage(); // Show the initial image on page load
