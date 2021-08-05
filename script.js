const joke = document.getElementById('joke');
const punch = document.getElementById('punch');
const jokeBtn = document.getElementById('jokebtn');


jokeBtn.addEventListener('click', () => jokeFetch());

jokeFetch();

// USING ASYNC/AWAIT

async function jokeFetch ()  {

    const fetchObj = {
        headers: {
            Accept: 'application/json'
        }
    }

    const res = await fetch('https://official-joke-api.appspot.com/jokes/random', fetchObj)
    
    const data = await res.json();

    joke.innerHTML = data.setup
    punch.innerHTML = data.punchline
}


// USING .then()
// function jokeFetch ()  {

//     const fetchObj = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }

//     fetch('https://official-joke-api.appspot.com/jokes/random', fetchObj)
//     .then(res => res.json())
//     .then(data => {
//         joke.textContent = data.setup ,
//         punch.textContent = data.punchline
//     })
// }
