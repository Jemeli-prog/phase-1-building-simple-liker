// Defining text characters for the empty and full hearts
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Hide error modal initially
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  // Select all like buttons (hearts)
  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.innerText = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          // Show error modal and display message
          errorModal.classList.remove("hidden");
          errorModal.querySelector("#modal-message").innerText = error;
          
          // Hide error modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});
