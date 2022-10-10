const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        console.log(`Усі поля мають бути заповнені!`);

    } else {        
        const fullForm = {
            Email: email.value,
            Password: password.value};
       
        console.log(fullForm);
        event.currentTarget.reset();
    }        
}