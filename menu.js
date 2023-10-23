// pega todos os elementos necesarios
const video = document.getElementById("videoBackground")
const sound = document.getElementById("sound")
const links = document.querySelectorAll("ul a")
const audioClick = document.getElementById("audioClick")
const audioHover = document.getElementById("audioHover")

// adicionar evento ao clicar no icon litar o som

sound.addEventListener("click", () => {
    //toggle icon on click
    sound.classList.toggle("fa-volume-up")

    //Mute / Unmute video sound
    if(video.muted === false) {
        video.muted = true;
    } else {
        video.muted = false;
    }

    //Add the sound effect
    clickSound();

    //Add hover event listener on tehe sounnd icon
    sound.addEventListener("mouseenter", hoverSound)

    //Select all links
    for (let i = 0; i <links.length;i++) {
        //add click event listener on the links
        links[i].addEventListener("click", clickSound);
        //add hover event listener on the links
        links[i].addEventListener("mouseenter", hoverSound);
    }

    //click sound effect
    function clickSound(){
        audioClick.onplay();
        
    }

    //Hover sound effect
    function hoverSound() {
        audioHover.play();
    }
})
