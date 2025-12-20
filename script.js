const next = document.getElementById('next');
const prev = document.getElementById('prev');
const container = document.getElementById("projectsContainer");
const cards = document.querySelectorAll('.projects-card');

let currentIndex = 0;

function getCardWidth() {
    const card = cards[0];
    const style = getComputedStyle(container);
    const gap = parseInt(style.columnGap || style.gap || 0);

    return card.offsetWidth + gap;
}

function updateCarousel() {
    container.scrollLeft = currentIndex * getCardWidth();
}

next.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});