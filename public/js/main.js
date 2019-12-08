'use strict';
const url = 'http://localhost:4000';
const userLoginForm = document.querySelector('#userLoginForm');
const userRegisterForm = document.querySelector('#userRegisterForm');
const headerWrapper = document.querySelector('header');
const feedWrapper = document.querySelector('#feed_wrapper');
const cardHolder = document.querySelector('.card_holder');
const loginWrapper = document.querySelector('#login_wrapper');
const error_div = document.querySelector('#error_div');
const registerwrapper = document.querySelector('#register_wrapper');
const loginFeedBut = document.querySelector('.header_login');
const logoutBut = document.querySelector('.header_logout');
const postIcon = document.querySelector('.header_post');
const regFeedBut = document.querySelector('.header_register');
const loginHeader = document.querySelector('#login_header');
const postForm = document.getElementById('postCard');
const regBackBut = document.querySelector('#reg_back_bt');
const regLaterBut = document.querySelector('#reg_later_bt');
//const createPost = document.querySelector('#addPost');
const createPost = document.getElementById('addPost');
const noAccount = document.getElementById('mm');
const itemLists = document.querySelectorAll('.add-list');
const userInputId = document.getElementById('userId');


const displayLoginFiled = () => {
  loginWrapper.style.display = 'inherit';
  registerwrapper.style.display = 'none';
  feedWrapper.style.display = 'none';
  headerWrapper.style.display = 'none';
}
const displayRegisterFiled = () => {
  loginWrapper.style.display = 'none';
  registerwrapper.style.display = 'inherit';
  feedWrapper.style.display = 'none';
  headerWrapper.style.display = 'none';
}
const displayFeedFiled = () => {
  loginWrapper.style.display = 'none';
  registerwrapper.style.display = 'none';
  feedWrapper.style.display = 'inherit';
  headerWrapper.style.display = 'inherit';
}
const displaylogout= () => {
  loginFeedBut.style.display = 'none';
  regFeedBut.style.display = 'none';
  logoutBut.style.display='inline';
  
}
const displayOffLogout= () => {
  loginFeedBut.style.display = 'inline';
  regFeedBut.style.display = 'inline';
  logoutBut.style.display = 'none';
  

}

postIcon.addEventListener('click',(event)=>{
  console.log('clicked');
 if(postForm.style.display=='none'){
  postForm.style.display='inherit'; }
  else{
    postForm.style.display='none'
  }

})



const getUSerId = async ()=>{
if (sessionStorage.getItem('token')){
   displaylogout();
  const fetchOptions = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    },
  };
  const response = await fetch(url + '/auth/getUser', fetchOptions);
  const userInfo = await response.json();
  userInputId.value=userInfo.user_id;

  console.log(userInfo);

}
else{
  displayOffLogout();
}

}
getUSerId();

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

    loginHeader.innerHTML = json.message;
    loginHeader.className = 'login_header_error';


  } else {
    // save token
    sessionStorage.setItem('token', json.token);
    displaylogout();
    userInputId.value = json.user.user_id;
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
  headerWrapper.style.display = 'none !important';

});

regFeedBut.addEventListener('click', (event) => {
  console.log('clicked');

  loginWrapper.style.display = 'none';
  registerwrapper.style.display = 'inherit';
  feedWrapper.style.display = 'none';
  headerWrapper.style.display = 'none  !important';

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
    loginHeader.innerHTML = 'You have succesfully registered please Login   ';

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


logoutBut.addEventListener('click', async (evt) => {
  evt.preventDefault();
  console.log('logout');
  
  try {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/auth/logout', options);
    const json = await response.json();
    console.log(json);
    // remove token
    sessionStorage.removeItem('token');
    
    // show/hide forms + cats
     displayLoginFiled();
     displayOffLogout();
    // alert('You have logged out');
  }
  catch (e) {
    console.log(e.message);
  }
});


createPost.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  if (sessionStorage.getItem('token')) {
    const fd = new FormData(createPost);

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      },
      body: fd,
    };
    const response = await fetch(url + '/post/makePost/makePost', fetchOptions);
    console.log('yesss');

    const json = await response.json();
    console.log('add response', json);

    getAllPost();
    getItems();
  }

  else {
    alert('please login first');
  }
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
    const posts = await response.json();
    console.log(posts);

    createCards(posts);


  }
  catch (e) {
    console.log(e.message);
  }
};


const createCards = (posts) => {
  cardHolder.innerHTML="";
  posts.forEach((post) => {
    console.log(post.ownername);

    const card = document.createElement('div')
    card.className = 'card w3-card-2';

    const cardHeader = document.createElement('div')
    cardHeader.className = 'card_header';

    const profileImage = document.createElement('div')
    profileImage.className = 'profile_image';

    const userName = document.createElement('div')
    userName.innerHTML = post.ownername
    userName.className = 'user_name';

    const postTime = document.createElement('div')
    postTime.className = 'time';
    postTime.innerHTML = '1hr';


    const cardBody = document.createElement('div')
    cardBody.className = 'content';

    const postPic = document.createElement('img')
    postPic.src = url + '/' + post.file_path;
    postPic.className = 'postPic';

    const discription = document.createElement('div')
    discription.innerHTML = post.description;
    discription.className = 'discription';


    const commentSection = document.createElement('div')
    commentSection.className = 'comment';

    const commentForm = document.createElement('form')
    commentForm.className = 'comment_input';

    const commentInput = document.createElement('input')
    commentInput.className = 'c_input';
    commentInput.placeholder = 'wite a comment';

    const commentNumber = document.createElement('div')
    commentNumber.className = 'comment_number';
    commentNumber.innerHTML = '23..comment';

    cardHeader.appendChild(profileImage);
    cardHeader.appendChild(userName);
    cardHeader.appendChild(postTime);
    card.appendChild(cardHeader);


    cardBody.appendChild(postPic);
    cardBody.appendChild(discription);
    card.appendChild(cardBody);


    commentForm.appendChild(commentInput);
    commentSection.appendChild(commentForm);
    commentSection.appendChild(commentNumber);
    card.appendChild(commentSection);

    cardHolder.appendChild(card)


  });

}








getAllPost();
getItems();











