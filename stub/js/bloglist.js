/* Function that displays the delete post confirmation modal 
and handles events inside the modal*/

function deleteModal(post) {
    // Declare UI variables
    let modalEl = document.getElementById('deletePostModal'); // modal element
    let deleteBtnEl = document.getElementById('modalBtnRed'); // button to confirm deletion
    let exitBtnEl = document.getElementById('modalBtnGreen') // button to exit modal

    // Display modal
    modalEl.style.display = 'block';

    // Event Listener that calls the deletePost() function on click
    deleteBtnEl.addEventListener("click", function(){
        deletePost(post);
    });

    // Event listener that calls the closeModal() function on click
    exitBtnEl.addEventListener("click", closeModal);
}

// Function to delete most and hide the modal
function deletePost(post) {
    // Delete post and call closeModal() function to hide the modal after deletion
    post.innerHTML = " "; 
    closeModal();
}

// Function to hide the modal
function closeModal() {
     let modalEl = document.getElementById('deletePostModal'); // modal element
     modalEl.style.display = 'none';
}