document.addEventListener("DOMContentLoaded", function() {
    const flowerDivs = document.querySelectorAll('.flower');
    flowerDivs.forEach(div => {
        const img = document.createElement('img');
        img.src = './MoodBoard/Flower.png'; 
        img.alt = 'Flor';
        img.classList.add('flower-image'); 
        div.appendChild(img);
    });
});
