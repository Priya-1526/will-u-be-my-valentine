
const prompts = [
    "Are you sure?", 
    "Really sure??", 
    "Think again", 
    "u mean it🥹",
    "PLEASEEEEEEEE!", 
    "U broke my ❤️",
    "I'm SAD 😞 ", 
    "RUDE... 🥲 ",
    "Ok fine 😒 ",  
];

let promptIndex = 0;

function handleNo() {
    const btnNo = document.querySelector('.no-button');
    const btnYes = document.querySelector('.yes-button');

    btnNo.textContent = prompts[promptIndex];
    promptIndex = (promptIndex + 1) % prompts.length;

    let currentScale = parseFloat(btnYes.getAttribute("data-scale")) || 1;
    let newScale = currentScale * 1.4;
    btnYes.style.transform = `scale(${newScale})`;
    btnYes.setAttribute("data-scale", newScale);

    btnYes.style.marginRight = `${15 + (newScale - 1) * 20}px`; 
    btnNo.style.marginLeft = `${15 + (newScale - 1) * 20}px`;
}

function handleYes() {
    const container = document.querySelector('.container');

    // Change container content
    container.innerHTML = `
        <div class="gif_container2">
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2RpbHR1NG5oOWYycWl0OXc1MHRiMDJ6ZmJjM3R1NXM0dDRmdXB4ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1OYyPVVIL4wP28pDiI/giphy.gif" alt="Cute Gif">
        </div>
    `;

    // Create multiple "Yay!" elements randomly
    for (let i = 0; i < 10; i++) { // Adjust number for more effect
        createYayMessage();
    }

    // Delay the final love message
    setTimeout(() => {
        container.innerHTML = `
            <h1 class="header_text">I LOVE YOU ❤️</h1>
            <div class="gif_container2">
                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ25iMDBtOGhyYWd3MWFpbjVzeG4wemo2N3l2ZnY4NzF5M3d0NmVqaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/xTvbVZjxLdkBqvkQsu/giphy.gif" alt="Love Gif">
            </div>
        `;
    }, 2000);
}

// Function to create and animate "Yay!" messages
function createYayMessage() {
    const yay = document.createElement("div");
    yay.textContent = "YAY! 🎉";
    yay.classList.add("yay-message");

    // Random position on screen
    yay.style.left = `${Math.random() * window.innerWidth}px`;
    yay.style.top = `${Math.random() * window.innerHeight}px`;

    document.body.appendChild(yay);

    // Remove after animation
    setTimeout(() => {
        yay.remove();
    }, 2000);
}

document.querySelector('.no-button')?.addEventListener("click", handleNo);
document.querySelector('.yes-button')?.addEventListener("click", handleYes);
