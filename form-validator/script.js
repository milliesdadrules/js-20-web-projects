// Grab all the elements from the DOM
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show input error message
const showError = (input, message) => {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// Event listener onSubmit
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(username.value === ''){
        showError(username, 'Username is required!!!')
    } else {
        showSuccess(username)
    }
})