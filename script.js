const form = document.getElementById('form');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('CLAIM YOUR FREE TRIAL', (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const first_nameValue = first_name.value.trim();
    const last_nameValue = last_name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordZValue = passwordZ.value.trim();

    if(first_nameValue === '') {
        // show error
        // add error class
        setErrorFor(first_name, 'First name cannot be blank')
    } else {
        // add success class 
        setSuccessFor(first_name);
    }
}

 function setErrorFor(input, message) {
     const formControl = input.parentElement; //.form-control
     const small = formControl.querySelector('small'); 

     // add error message inside small
     small.innerText = message;

     // add error class
     formControl.className = 'form-control error';
 }