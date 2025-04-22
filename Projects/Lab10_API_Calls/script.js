// Task 1
const fetchButton = document.getElementById('fetchButton');
const output = document.getElementById('output');

fetchButton.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      output.innerHTML = `
        <h4>Fetched Post Data:</h4>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
      `;
    })
    .catch(error => {
      output.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
});


// Task 2
const xhrButton = document.getElementById('xhrButton');

xhrButton.addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2');

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      output.innerHTML = `
        <h4>Fetched Post Data (XMLHttpRequest):</h4>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
      `;
    } else {
      output.innerHTML = `<p style="color:red;">Server Error: ${xhr.status}</p>`;
    }
  };

  xhr.onerror = function () {
    output.innerHTML = `<p style="color:red;">Network Error: Could not reach the server</p>`;
  };

  xhr.send();
});


// Task 3
const dataForm = document.getElementById('dataForm');

dataForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  if (!title.trim() || !body.trim()) {
    output.innerHTML = `<p style="color:red;">Error: Title and Body cannot be empty.</p>`;
    return;
  }

  const postData = {
    title: title,
    body: body,
    userId: 1,
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      output.innerHTML = `
        <h4>Post Created:</h4>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
        <p><strong>Post ID:</strong> ${data.id}</p>
      `;
    })
    .catch(error => {
      output.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
});


// Task 4
const updateForm = document.getElementById('updateForm');

updateForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const postId = document.getElementById('postId').value;
  const updatedTitle = document.getElementById('updatedTitle').value;
  const updatedBody = document.getElementById('updatedBody').value;

  if (!postId || isNaN(postId) || postId < 1 || postId > 100) {
    output.innerHTML = `<p style="color:red;">Error: Please enter a valid Post ID (1–100).</p>`;
    return;
  }

  if (!updatedTitle.trim() || !updatedBody.trim()) {
    output.innerHTML = `<p style="color:red;">Error: Title and Body cannot be empty.</p>`;
    return;
  }

  const updatedData = {
    title: updatedTitle,
    body: updatedBody,
  };

  const xhr = new XMLHttpRequest();

  xhr.open('PUT', `https://jsonplaceholder.typicode.com/posts/${postId}`);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      output.innerHTML = `
        <h4>Updated Post Data (PUT):</h4>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
      `;
    } else {
      output.innerHTML = `<p style="color:red;">Server Error: ${xhr.status}</p>`;
    }
  };

  xhr.onerror = function () {
    output.innerHTML = `<p style="color:red;">Network Error: Could not update post</p>`;
  };

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(JSON.stringify(updatedData));
});
