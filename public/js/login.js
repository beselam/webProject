'use strict'
const url = 'http://localhost:4000'; 
const userLoginForm = document.querySelector('#userLoginForm');

userLoginForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const data = serializeJson(userLoginForm);
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    console.log(fetchOptions);
    
    const response = await fetch(url + '/login', fetchOptions);
   // const dataa = await  response.json();
   // const error = dataa.errors;
    //displayError(error);
  });