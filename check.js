window.onload = function() {
    const submitButton = document.getElementById('submit');
    submitButton.disabled = true;
    submitButton.style.color = 'gray';
    submitButton.style.transition = '';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.toggle('dark-mode');
        document.getElementById('page').style.backgroundColor = '#1E1E1E';
        document.getElementById('left').style.backgroundColor = '#696969';
    } 
}

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submit');
  
    emailInput.addEventListener('input', function() {
        const emailValue = emailInput.value;
        const isValidEmail = emailValue.endsWith('@hku.hk');
        const isValidEmail2 = emailValue.endsWith('@connect.hku.hk');
        const isValidEmail3 = emailValue === '';
  
        if (isValidEmail || isValidEmail2 || isValidEmail3) {
            document.getElementById('right').style.backgroundColor = '#474A59';
            submitButton.disabled = false;
            submitButton.style.color = 'white';
            submitButton.style.transition = '0.3s';
        } else {
            document.getElementById('right').style.backgroundColor = '#A30000';
            submitButton.disabled = true;
            submitButton.style.color = 'gray';
            submitButton.style.transition = '';
        }
    });
  });



document.getElementById('submit').onclick = function() {
    //console.log('clicked');
    var email = document.getElementById('email').value;
    if (email.endsWith('@hku.hk') || email.endsWith('@connect.hku.hk')) {
        var username = email.split('@')[0];
        document.getElementById('result').innerText = 'Welcome ' + username ;
    };
}