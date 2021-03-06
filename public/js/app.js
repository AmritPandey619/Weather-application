console.log('Client side javascript file is loaded!')
// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })
//to fetch data from user screen thats why it is named client side js

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')


weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?address='+location).then((response)=>{ //fetch does not work in node so it is written here in a client side js
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error);
            messageOne.textContent = data.error
        }
        else{
            console.log(data.location);
            console.log(data.forecast);
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
        
    })
})


})