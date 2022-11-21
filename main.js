// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
let hearts = document.getElementsByClassName('like-glyph');
let hidden = document.getElementById("modal");
let errorMessage = document.querySelector("#modal h2")

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", () => {
    mimicServerCall()
      .then(function (object) {

        console.log(object);

        if (object = "Pretend remote server notified of action!") {
          switch (hearts[i].textContent) {
            case EMPTY_HEART:
              hearts[i].textContent = FULL_HEART;
              hearts[i].classList.add("activated-heart");
              break;
            case FULL_HEART:
              hearts[i].textContent = EMPTY_HEART;
              hearts[i].classList.remove("activated-heart");
              break;
          }
        }
      }
      )
      .catch(function (error) {
        console.log(errorMessage)
        errorMessage.textContent = error
        hidden.classList.remove("hidden");
        setTimeout(() => {
          hidden.classList.add("hidden");
        }, 3000)

      })
  }
  )
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
