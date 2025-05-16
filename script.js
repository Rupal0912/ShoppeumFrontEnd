 const wrapper = document.querySelector('.wrapper');
 const loginLink = document.querySelector('.login-link');
 const registerLink = document.querySelector('.register-link');
 const profile1= document.querySelector('.profile1');



registerLink.addEventListener('click', () => { 
    wrapper.classList.add('active'); 
});


loginLink.addEventListener('click', () => {
     wrapper.classList.remove('active'); 
});

profile1.addEventListener('click', () => { 
    wrapper.classList.add('active-popup'); 
});