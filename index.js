
//About me Section
let clicks = 0; // Global click counter

function display_info() {
    let abtMeText = document.getElementById("abt-me-text");

    if (clicks === 0) {
        abtMeText.innerHTML = "My name is Inah James, I'm 18 years old, and I started coding because I've always wanted to make games when I've gotten really good at coding. I've tried once with HTML, CSS, and JS, but it didn't work so well.";
    } else if (clicks === 1) {
        abtMeText.innerHTML = "My favorite game to play is Minecraft and roblox, and my favourite show to watch and read is One Piece!";
    } else if (clicks === 2) {
        abtMeText.innerHTML = "Thank you for learning about me, have a good day!";
        alert("You've reached the end! Reload the page or press 'Restart' to start over.");
    }

    clicks++;
}

// Function to reset clicks when "Press to Restart" is clicked
function setAt0() {
    clicks = 0;
    document.getElementById("abt-me-text").innerHTML = "Click more to discover";
}
