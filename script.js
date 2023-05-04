const password = document.getElementById("password");
const ruleError = document.getElementById("ruleError");
const matchError = document.getElementById("matchError");
const confirmPassword = document.getElementById("confirm_password");
const form = document.querySelector('form');
const success = document.getElementById('success');
const phone = document.getElementById('phone');


function checkPassword() {
    let passValue = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
   console.log(passValue.test(password.value))
   if (!passValue.test(password.value)) {
    ruleError.style.display = 'block';
    ruleError.innerHTML = "* Password should contain upper case letter, lower case letter and a number"
   } 
   if (passValue.test(password.value)) {
    ruleError.style.display = 'none';
   }
}

function submit(e){
    e.preventDefault();
    if (password.value != confirmPassword.value) {
password.classList.add('error');
confirmPassword.classList.add('error');
matchError.style.display = 'block';
success.innerHTML = ''
matchError.innerHTML = '* The passwords do not match'
return;
    }
if (password.value === confirmPassword.value) {
    password.classList.remove('error');
confirmPassword.classList.remove('error');
matchError.innerHTML = '';
}
    
if (!phone.value.match(/^\d{9}$/)) {
    phone.classList.add('error');
    ruleError.style.display = 'block'
    ruleError.innerHTML = '* Wrong phone number format';
    matchError.style.display = 'none';
    return;
}

phone.classList.remove('error');
ruleError.innerHTML = '';
matchError.innerHTML = '';
success.innerHTML = 'Form added successfully!'
submitButton.style.backgroundColor = 'green'
setTimeout(() => {
    window.location.reload();
}, 2000);
}

form.addEventListener('submit', submit)
password.addEventListener('keyup', checkPassword);
