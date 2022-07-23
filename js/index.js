
const scriptURL = 'https://script.google.com/macros/s/AKfycbwWCrohRCgUm3mX1xcqiiFJWYfoabu4KWP-B-ODuFG4vI9KjPYnL4t2rfDJhF7gJhsuuw/exec'
const form = document.forms['submit-googlesheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you,will get back to you soon..."))
    .catch(error => console.error('Error!', error.message))
})
