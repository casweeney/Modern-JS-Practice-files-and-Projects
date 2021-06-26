const http = new EasyHTTP;

// Get users
// const users = http.get('https://jsonplaceholder.typicode.com/users').then(data => console.log(data))
// .catch(err => console.log(err));

// Create user data
const data = {
  name: 'Casweeney Ojukwu',
  username: 'casweeno2000',
  email: 'casweeno2000@gmail.com'
}

// Create user
// const users = http.post('https://jsonplaceholder.typicode.com/users', data).then(data => console.log(data))
// .catch(err => console.log(err));

// Update User
// const users = http.put('https://jsonplaceholder.typicode.com/users/1', data).then(data => console.log(data))
// .catch(err => console.log(err));

// Delete User
const users = http.delete('https://jsonplaceholder.typicode.com/users/1').then(data => console.log(data))
.catch(err => console.log(err));

