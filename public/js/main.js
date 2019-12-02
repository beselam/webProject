'use strict';
const url = 'http://localhost:4000'; 
const userRegisterForm = document.querySelector('#userRegisterForm');
const error_div = document.querySelector('#error_div');
const userLoginForm = document.querySelector('#userLoginForm');

userRegisterForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(userRegisterForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url + '/register', fetchOptions);
  const dataa = await  response.json();
  const error = dataa.errors;
  displayError(error);
});

const displayError =(error)=>{
  error.forEach(element => {
  const error_message = element.msg;
  const error_filed = document.createElement('p');
  error_filed.innerHTML= error_message;
  error_filed.className='error_box';
  error_div.appendChild(error_filed);


  }); 
}

