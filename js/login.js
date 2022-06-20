document.getElementById('login-submit').addEventListener('click', function(){
    const useremail=document.getElementById('user-email');
    const usermailfield= useremail.value;
    const userpassword=document.getElementById('user-password');
    const passwordfield=userpassword.value;
    if( usermailfield == 'sontan@gmail.com' && passwordfield == 'secret')
    window.location.href='bank3.html'
})