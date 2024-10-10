let jokeContainer = document.getElementById('joke');
let generatebtn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getJoke = () => {
  jokeContainer.classList.remove('.fade')
  fetch(url)
  .then(data => data.json())
  .then(item =>{
    jokeContainer.textContent = `${item.joke}`;
  });
}
generatebtn.addEventListener('click',getJoke)
getJoke();