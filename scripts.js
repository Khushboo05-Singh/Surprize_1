function showSurprise() {
    document.getElementById("message").style.display = "block";
    startFlowerRain();
}

function startFlowerRain() {
    const flowerContainer = document.querySelector(".flower-container");
    
    for (let i = 0; i < 20; i++) {
        let flower = document.createElement("img");
        flower.src = "Heart.jpg";
        flower.classList.add("flower");
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (Math.random() * 3 + 2) + "s";
        
        flowerContainer.appendChild(flower);
        
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
}
