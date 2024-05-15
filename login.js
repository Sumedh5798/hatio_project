const signUpButton = document.getElementById('up');
signUpButton.addEventListener('click', () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if(email.value === '' || password.value=== '') {
        alert('Please enter both email and password.');
        email.value='';
        password.value='';
        return;
    }
    else{
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        email.value='';
        password.value='';
        alert('Sign up successful! Now click on sign in button');
    }
});


const signInButton = document.getElementById('in');
const signUpDiv = document.getElementById('sign_up');
const signInDiv = document.getElementById('sign_in');

signInButton.addEventListener('click', () => {
    signUpDiv.classList.remove('active');
    signInDiv.classList.add('active');
});


const signInButton2 = document.getElementById('signIn');
signInButton2.addEventListener('click', () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const email = document.getElementById('emailSignIn');
    const password = document.getElementById('passwordSignIn');
    
    if(email.value === storedEmail && password.value === storedPassword) {
        alert('Sign in successful!');
        window.location='main.html';
        email.value='';
        password.value='';
    } else {
        alert('Invalid email or password.');
        email.value='';
        password.value='';
    }
});
