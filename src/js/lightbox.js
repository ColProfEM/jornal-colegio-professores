const lightbox = document.getElementById('lightbox');
const zoomImg = document.getElementById('zoom_img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.picture img').forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        zoomImg.src = image.src;
        captionText.innerHTML = image.alt;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if(e.target !== zoomImg) {
        lightbox.style.display = 'none';
    }
});