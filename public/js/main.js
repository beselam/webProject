'use strict';
const url = 'http://localhost:4000';
const userLoginForm = document.querySelector('#userLoginForm');
const userRegisterForm = document.querySelector('#userRegisterForm');
const headerWrapper = document.querySelector('#header_wrapper');
const feedWrapper = document.querySelector('#feed_wrapper');
const loginWrapper = document.querySelector('#login_wrapper');
const error_div = document.querySelector('#error_div');
const registerwrapper = document.querySelector('#register_wrapper');
const loginFeedBut = document.querySelector('#left_login');
const regFeedBut = document.querySelector('#left_register');
const loginHeader = document.querySelector('#login_header');
const regBackBut = document.querySelector('#reg_back_bt');
const regLaterBut = document.querySelector('#reg_later_bt');
//const createPost = document.querySelector('#addPost');
const createPost = document.getElementById('addPost')
const noAccount = document.getElementById('mm');
const itemLists = document.querySelectorAll('.add-list');
const userrId = document.querySelectorAll('.userId');




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
  const response = await fetch(url + '/auth/login', fetchOptions);
  const json = await response.json();
  console.log('login response', json);
  if (!json.user) {
    console.log(json.message);
    
    loginHeader.innerHTML=json.message;
    loginHeader.className='login_header_error';
    

  } else {
    // save token
    localStorage.setItem('token', json.token);
    userrId.value='1';
    displayFeedFiled();

  }
});



noAccount.addEventListener('click', (event) => {
  console.log('clicked');

  loginWrapper.style.display = 'none';
  registerwrapper.style.display = 'inherit';

});

loginFeedBut.addEventListener('click', (event) => {
  console.log('clicked');

  loginWrapper.style.display = 'inherit';
  registerwrapper.style.display = 'none';
  feedWrapper.style.display = 'none';
  headerWrapper.style.display = 'none';

});

regFeedBut.addEventListener('click', (event) => {
  console.log('clicked');

  loginWrapper.style.display = 'none';
  registerwrapper.style.display = 'inherit';
  feedWrapper.style.display = 'none';
  headerWrapper.style.display = 'none';

});




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
  const response = await fetch(url + '/auth/register', fetchOptions);
  const dataa = await response.json();
  console.log(dataa);

  if (dataa.errors) {
    const error = dataa.errors;
    displayError(error);
  }
  else {
    displayLoginFiled();
    loginHeader.innerHTML='You have succesfully registered please Login   ';

}


});



const displayError = (error) => {
  error.forEach(element => {
    const error_message = element.msg;
    const error_filed = document.createElement('p');
    error_filed.innerHTML = error_message;
    error_filed.className = 'error_box';
    error_div.appendChild(error_filed);


  });
}


const displayLoginHeader = (message) => {
  message.forEach(element => {
    const error_message = element.msg;
    const error_filed = document.createElement('p');
    error_filed.innerHTML = error_message;
    error_filed.className = 'error_box';
    loginHeader.appendChild(error_filed);


  });
}


regBackBut.addEventListener('click', (event) => {
  console.log('clicked');

  loginWrapper.style.display = 'inherit';
  registerwrapper.style.display = 'none';
  feedWrapper.style.display = 'none';
  headerWrapper.style.display = 'none';

});


regLaterBut.addEventListener('click', (event) => {
  console.log('clicked');

  loginWrapper.style.display = 'none';
  registerwrapper.style.display = 'none';
  feedWrapper.style.display = 'inherit';
  headerWrapper.style.display = 'inherit';

});

const displayLoginFiled=()=>{
  loginWrapper.style.display = 'inherit';
  registerwrapper.style.display = 'none';
  feedWrapper.style.display = 'none';
  headerWrapper.style.display = 'none';
}
const displayRegisterFiled=()=>{
  loginWrapper.style.display = 'none';
  registerwrapper.style.display = 'inherit';
  feedWrapper.style.display = 'none';
  headerWrapper.style.display = 'none';
}
const displayFeedFiled=()=>{
  loginWrapper.style.display = 'none';
  registerwrapper.style.display = 'none';
  feedWrapper.style.display = 'inherit';
  headerWrapper.style.display = 'inherit';
}

createPost.addEventListener('submit', async (evt) => {
  evt.preventDefault();
 const fd = new FormData(createPost);
  
  const fetchOptions = {
    method: 'POST',
    body: fd,
  };
   const response = await fetch(url + '/post/makePost', fetchOptions);
  console.log('yesss');

 const json = await response.json();
  console.log('add response', json);
/*     getItems(); */
});

const createItemOptions = (items) => {
  itemLists.forEach((list) => {
    // clear user list
    list.innerHTML = '';
    items.forEach((item) => {
      // create options with DOM methods
      const option = document.createElement('option');
      option.value = item.id;
      option.innerHTML = item.name;
      option.classList.add('light-border');
      list.appendChild(option);
    });
  });
};

// get users to form options
const getItems = async () => {
  try {
    const response = await fetch(url + '/post/getItemCatagory');
    const items = await response.json();
    createItemOptions(items);
  }
  catch (e) {
    console.log(e.message);
  }
};
const getAllPost = async () => {
  try {
    const response = await fetch(url + '/post/getAllPost');
    const items = await response.json();

  }
  catch (e) {
    console.log(e.message);
  }
};
getItems();











