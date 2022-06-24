document.getElementById('login-submit').addEventListener('click',function(){
    const usermail=document.getElementById('user-email')
    const usmailfield=usermail.value;
    const password = document.getElementById('user-password')
    const userpassword =password.value;
    if(usmailfield == 'sarman@bd.com' && userpassword == 'sarman'){
        window.location.href='bank3.html';
    }
})