document.addEventListener("DOMContentLoaded", function() {
    const flowerDivs = document.querySelectorAll('.flower');
    flowerDivs.forEach(div => {
        const img = document.createElement('img');
        img.src = '../Images/Flower.png'; 
        img.alt = 'Flor';
        img.classList.add('flower-image'); 
        div.appendChild(img);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header-container',  '../header.html');
    loadHTML('footer-container', '../footer.html');
});

function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}