// Function to display posts on the homepage
function displayPosts() {
    const postList = document.getElementById('post-list');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    postList.innerHTML = ''; // Clear the list before displaying
  
    posts.forEach((post, index) => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
  
      const postTitle = document.createElement('h3');
      postTitle.textContent = post.title;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function () {
        deletePost(index);
      });
  
      postDiv.appendChild(postTitle);
      postDiv.appendChild(deleteButton);
      postList.appendChild(postDiv);
    });
  }
  
  // Function to delete a post
  function deletePost(postIndex) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.splice(postIndex, 1); // Remove the post at the given index
    localStorage.setItem('posts', JSON.stringify(posts)); // Save the updated posts
    displayPosts(); // Re-display the posts after deletion
  }
  
  // Call displayPosts on page load
  window.onload = displayPosts;
  