const next = document.getElementById('next')
const prev = document.getElementById('prev')
const container = document.getElementById("projectsContainer");
const cardWidth = 400 + 30;

function passing(){
    container.scrollLeft += cardWidth
}

function back(){
    container.scrollLeft -= cardWidth
}

next.addEventListener('click', passing)
prev.addEventListener('click', back)