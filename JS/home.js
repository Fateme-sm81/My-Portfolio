
let likes = 0;

function changeImage() {
    let heartImage = document.getElementById("heart");
    let likeCount = document.getElementById("like-count");
    
    let imageSrc = heartImage.src.split('/').pop(); 

    if (imageSrc === "heart.png") {
        heartImage.src = "../img/red-heart.png";  // Change to red heart
        likes++; // Increase like count
    } else {
        heartImage.src = "../img/heart.png";  // Change back to normal heart
        likes--; // Decrease like count (optional)
    }

    // Ensure likes don't go below 0
    if (likes < 0) likes = 0;

    likeCount.innerText = likes;  // Update like counter text
}

document.addEventListener("DOMContentLoaded", function () {
    const texts = [
        "Hi, My name is Fatemeh.",
        "I am passionate about technology.",
        "I love web development and design.",
        "I am learning JavaScript for dynamic effects!"
    ];
    
   
    let textIndex = 0; // Track which sentence is being typed
    let letterIndex = 0; // Track which letter is being typed
    const typingSpeed = 100; // Speed of typing (milliseconds)
    const delayBetweenTexts = 1500; // Delay before next line starts (milliseconds)
    const emojiDelay = 1000; // Delay before emoji appears (milliseconds)
    const pgPic = document.getElementById("pg-pic");

    function typeText() {
        if (letterIndex < texts[textIndex].length) {
            if (!pgPic.children[textIndex]) {
                let newParagraph = document.createElement("p"); // Create new paragraph
                newParagraph.id = "line-" + textIndex; // Give each line a unique ID
                pgPic.appendChild(newParagraph);
            }

            let currentParagraph = document.getElementById("line-" + textIndex);
            currentParagraph.innerHTML += texts[textIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            textIndex++;
            if (textIndex < texts.length) {
                letterIndex = 0;
                setTimeout(typeText, delayBetweenTexts);
            } else {
                setTimeout(showLiveEmoji, emojiDelay); // Show emoji after all text
            }
        }
    }

    function showLiveEmoji() {
        let emoji = document.createElement("p");
        emoji.classList.add("live-emoji");
        emoji.innerHTML = "&#128516"; // Add live smile emoji
        pgPic.appendChild(emoji);

        setTimeout(() => {
            emoji.style.opacity = "1"; // Fade-in effect for emoji
        }, 200);
    }

    typeText(); // Start typing effect
});
