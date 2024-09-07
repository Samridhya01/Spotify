// Eable Disable Script
function enabledisable(element) {
  console.log(element.style)
  if (element.style.fill != "rgb(29, 185, 84)") {
    element.style.setProperty('fill', '#1db954');
  } else {
    element.style.setProperty('fill', '#fff');
  }
}

// Greeetngs Script
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];

greeting.innerHTML = welcomeText;



//Scrolling nav bar code
const nav=document.querySelector("#topNav");
const sectionOne=document.querySelector(".fw-bold");
const sectionOneOptions={};
const sectionOneObserver = new IntersectionObserver(function(entries , sectionOneObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){      
      nav.style.backgroundColor="black";
    } else{     
      nav.style.backgroundColor="transparent";
    }
  })
} , sectionOneOptions);
sectionOneObserver.observe(sectionOne);



const playPauseBtn = document.getElementById('playPauseBtn');
const audioPlayer = document.getElementById('audioPlayer');

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>';
    } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<svg role="img" height="24" width="24" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>';
    }
});

