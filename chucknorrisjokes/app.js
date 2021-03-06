document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
  const number = document.querySelector('#number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      
      let output = '';
      if(response.type === 'success'){
        response.value.forEach((joke) => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      const ul = document.querySelector('.jokes');
      ul.innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}