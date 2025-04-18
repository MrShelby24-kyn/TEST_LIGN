const togglePassword=document.getElementById('togglePassword');
const password=document.getElementById('password');
togglePassword.addEventListener('click', function() {
    const type =
    password.getAttribute('type')==='password' ? 'text' :'password';
    password.setAttribute('type',type);
    // changer l'icone de l'oeil 
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
    
});