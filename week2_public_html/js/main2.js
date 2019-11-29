'use strict';
const url = 'http://localhost:4000'; // change url when uploading to server

const addForm = document.querySelector('#addUserForm');

addForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(addForm);
  //const fd = new FormData(addForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url + '/login', fetchOptions);
 
});
/*
addUserForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(addUserForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url + '/auth/register', fetchOptions);
  const json = await response.json();
  console.log('user add response', json);
  // save token
  sessionStorage.setItem('token', json.token);
  // show/hide forms + cats
  loginWrapper.style.display = 'none';
  logOut.style.display = 'block';
  main.style.display = 'block';
  userInfo.innerHTML = `Hello ${json.user.name}`;
  getCat();
  getUsers();
});

*/


// const json = await response.json();
 // console.log('add response', json);
 /* let jsonObject = {};

for (const [key, value]  of fd.entries()) {
    jsonObject[key] = value;
}
  const data = jsonObject;
  
  console.log(data);
  console.log(fd); *//* headers: {
      'Content-Type': 'application/json'
  },*/