// document.getElementById("demo").innerHTML = 5 + 6;

function openLightbox(event) {
    const largeImageSrc = event.target.getAttribute('data-large');
    document.getElementById('lightbox-image').src = largeImageSrc;
    document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', openLightbox);
    });
});