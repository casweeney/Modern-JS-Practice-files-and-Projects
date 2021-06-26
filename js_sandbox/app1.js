// Create element
const li = document.createElement('li');

//Add Class
li.className = 'collection-item';

//Add ID
li.id = 'new-item';

//Add attribute
li.setAttribute('title', 'New List');

// Create a new text node and append
li.appendChild(document.createTextNode('Hello People'));

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.setAttribute('href', '#');

const icon = document.createElement('i');
icon.className = 'fa fa-remove';

link.appendChild(icon);

li.appendChild(link);


//Apend li as child to ul
document.querySelector('ul.collection').appendChild(li);

// Replacing element


console.log(li);