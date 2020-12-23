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

// Check email is valid
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check required fields
const checkRequired = (inputArray) => {
    inputArray.forEach((input) => {

        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
        console.log(input.value);
    })
}

// Check input length
const  checkLength = (input, min, max) => {
    if(input.value.length < min ) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

// Get fieldname
const getFieldName = (input) => {
    return input.id ? input.id.charAt(0).toUpperCase() + input.id.slice(1) : ''
} 
// Show input success message
const showSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// Event listener onSubmit
form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
})