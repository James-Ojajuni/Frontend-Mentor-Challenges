const shareContainers = document.querySelectorAll("[class*='share-container']"); // the share container saved as a variable
let socials = document.getElementById('social-links'); // socials section saved as a variable
let michelle = document.querySelector(".michelle-section"); // michelle section saved as a variable
let lowerHalf = document.querySelector('.lower-half');
let upperHalf = document.querySelector('.upper-half');
checkWidth(); // calls the function that checks the width of the window and adds or removes an event listener based on the size
window.addEventListener("resize", checkWidth); //activates the checkWidth funtion when the window is resized

function checkWidth() {
    // if the width is less than 900, the click event listener that calls the toggleSocials function is added to the shareContainers
    if (window.innerWidth < 900) {
        shareContainers.forEach(
            (value) => {
                value.addEventListener('click', toggleSocials);
                value.removeEventListener('click', toggleVisibility);
            }
        )
    }
    // else, it removes the click event listener and sets the display back to default
    else {
        shareContainers.forEach(
            (value) => {
                value.removeEventListener('click', toggleSocials);
                value.addEventListener('click', toggleVisibility);
                socials.style.display = "none"; 
                michelle.style.display = "flex"; 
                shareContainers.forEach((value) => value.classList.replace("share-container2","share-container"))
            }
        )
    }
}



function toggleSocials() {
    // toggle between social links and normal display
    if (socials.style.display === "none") {
        socials.style.display = "flex";
        michelle.style.display = "none";
        shareContainers.forEach((value) => {
            value.classList.replace("share-container","share-container2");
        });
    }
    else {
        socials.style.display = "none";
        michelle.style.display = "flex";
        shareContainers.forEach((value) => value.classList.replace("share-container2","share-container"))
    }
}


function toggleVisibility() {
    if (upperHalf.style.visibility === "hidden") {
        upperHalf.style.visibility = "visible";
        lowerHalf.style.visibility = "visible";
    } else {
        upperHalf.style.visibility = "hidden";
        lowerHalf.style.visibility = "hidden";
    }
}
