// Select elements from the DOM

const headlineInput = document.getElementById("headlineInput");
const updateBtn = document.getElementById("updateBtn");
const ctaHeadline = document.getElementById("ctaHeadline");

// Add event listener to button

updateBtn.addEventListener("click", function () {

    const newHeadline = headlineInput.value;

    if (newHeadline !== "") {
        ctaHeadline.textContent = newHeadline;
    }

});