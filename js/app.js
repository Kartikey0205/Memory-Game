"use strict";
$(function(){
    $("#type").typed({
        strings : ["How is your memory?", `<i class="fas fa-check-circle"></i> Let's Check it `,`<i class="far fa-thumbs-up"></i>  All the Best`],
        typeSpeed: 0,
        loop:true,
        showCursor: false,
        
    });
});
particlesJS('starParticle',
  
  {
    "particles": {
      "number": {
        "value": 350,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#ff0000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance":120
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

/*
function of flip
function of success
function of failure
function of shuffling

*/
var isFlipped = false;
var firstCard;
var secondCard;
var suceessPoint = 0;
var failPoint = 0;
const btnSuccess = document.getElementById("successBtn");
const btnRetry = document.getElementById("retryBtn");
const cards = document.querySelectorAll(".card");
// console.log(cards);  // getting arary of 16 div


cards.forEach((card) => card.addEventListener("click", flip));



function flip() {
    // console.log("Card Flipped");
    console.log(this);
    this.classList.add("flip")
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
        // console.log("First time clicked");
        // console.log("First Card is",firstCard);
    } else {
        secondCard = this;
        // console.log("First Card is",firstCard);
        // console.log(" Second Card is",secondCard);
        checkIt();
    }

}
function updateSuccess(point){
    btnSuccess.innerHTML=`Your Success Score : ${point}`;
}

function RetryChance(pointRetry){
    btnRetry.innerHTML=`Your Retry Chance : ${pointRetry}`;
}

function checkIt() {
    // console.log("checking....");
    if (firstCard.dataset.image === secondCard.dataset.image) {
        success();
        suceessPoint +=1;
        updateSuccess(suceessPoint);
    } else {
        fail();
        failPoint += 1;
        RetryChance(failPoint);
    }
}

function success() {
    // console.log("Success");
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();

}


function reset() {
    isFlipped = false;
    firstCard = null;
    secondCard = null;
}

function fail() {
    // console.log("Failed");
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
        // failBtn += 1;
    }, 1000);
}
// Shuffling
(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    });
})();