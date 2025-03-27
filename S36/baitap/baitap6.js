const stars = document.querySelectorAll(".stars");
const selectedRating = document.getElementById("selected-rating");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("comment-list");
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener("click", function () {
        currentRating = this.getAttribute("data-value");
        updateStars(currentRating);
        selectedRating.textContent = `Bạn đã đánh giá ${currentRating} sao.`;
    });
});

function updateStars(rating) {
    stars.forEach(star => {
        star.classList.toggle("active", star.getAttribute("data-value") <= rating);
    });
}

function saveToLocalStorage(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadFromLocalStorage() {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.forEach(comment => {
        const newCommentHTML = `<li><span>${"★".repeat(comment.rating)}</span><b>${comment.text}</b></li>`;
        commentList.innerHTML += newCommentHTML;
    });
}

window.submitReview = function () {
    const commentText = commentInput.value.trim();
    if (currentRating === 0 || commentText === "") return;

    const newComment = { rating: currentRating, text: commentText };
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(newComment);
    saveToLocalStorage(comments);

    const newCommentHTML = `<li><span>${"★".repeat(currentRating)}</span><b>${commentText}</b></li>`;
    commentList.innerHTML += newCommentHTML;

    commentInput.value = "";
    currentRating = 0;
    updateStars(currentRating);
    selectedRating.textContent = "Bạn chưa đánh giá.";
};

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);
