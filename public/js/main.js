'use strict';
const url = '/alloffer';
//const url = '';
//const url='http://localhost:4000'
const userLoginForm = document.querySelector('#userLoginForm');
const main_container = document.querySelector('#main_container');
const profile_container = document.querySelector('#userProfileWrapper');
const userRegisterForm = document.querySelector('#userRegisterForm');
const headerWrapper = document.querySelector('header');
const feedWrapper = document.querySelector('#feed_wrapper');
const cardHolder = document.querySelector('.card_holder');
const loginWrapper = document.querySelector('#login_wrapper');
const hamburgerMenu = document.querySelector('#hamburger');
const mobileNav = document.querySelector('#mobile_nav');
const error_div = document.querySelector('#error_div');
const registerwrapper = document.querySelector('#register_wrapper');
const loginFeedBut = document.querySelector('.header_login');
const headerContent = document.querySelector('#header_contents');
const searchBut = document.querySelector('#search_but');
const searchInput = document.querySelector('#search_input');
const searchForm = document.querySelector('#searchForm');
const deleteForm = document.querySelector('#delete_form');
const searchMessage = document.querySelector('#search_message');
const logoutBut = document.querySelector('.header_logout');
const postIcon = document.querySelector('.header_post');
const profileBut = document.querySelector('#profile');
const profileName = document.querySelector('#profile_name');
const userEmail = document.querySelector('#user_email');
const regFeedBut = document.querySelector('.header_register');
const loginHeader = document.querySelector('#login_header');
const postIdInput = document.querySelector('#post_id');
const postForm = document.getElementById('postCard');
const regBackBut = document.querySelector('#reg_back_bt');
const regLaterBut = document.querySelector('#reg_later_bt');
//const createPost = document.querySelector('#addPost');
const createPost = document.getElementById('addPost');
const noAccount = document.getElementById('mm');
const itemLists = document.querySelectorAll('.add-list');
const userInputId = document.getElementById('userId');
const closeNav = document.querySelector('#close_nav');
//const but = document.querySelector('#dropdown_delet_but')
const delet_but = document.getElementById('dropdown_delet_but');

hamburgerMenu.addEventListener('click',(req,res)=>{
mobileNav.style.display='inherit';
headerContent.style.display='block';
headerContent.style.width='52%';
})


closeNav.addEventListener('click',(req,res)=>{
  mobileNav.style.display='none';
 headerContent.style.width='0%';
  }) 



deleteForm.addEventListener('submit' , async (event)=>{
  event.preventDefault();
  console.log('yess am clicked');
  
  
/*  const userId =   await getUSerId() ;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userId),
  };
  const response = await fetch(url + '/post/getUserPost', fetchOptions);  
  const posts = await response.json();
 if(posts){
   userProfilePAge();
   populateProfile();
   createCards(posts);
 }
    */
});



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
const displayProfielFiled = () => {
  loginWrapper.style.display = 'none';
  registerwrapper.style.display = 'none';
  feedWrapper.style.display = 'inherit';
  headerWrapper.style.display = 'inherit';
  profile_container.style.display='inline-block'
}

const displayOffProfielFiled = () => {
  loginWrapper.style.display = 'none';
  registerwrapper.style.display = 'none';
  feedWrapper.style.display = 'inherit';
  headerWrapper.style.display = 'inherit';
  profile_container.style.display='none'
  main_container.style.display='inherit';
}

const displaylogout = () => {
  loginFeedBut.style.display = 'none';
  regFeedBut.style.display = 'none';
  profileBut.style.display='inline';
  logoutBut.style.display = 'inline';

}
const displayOffLogout = () => {
  loginFeedBut.style.display = 'inline';
  regFeedBut.style.display = 'inline';
  logoutBut.style.display = 'none';
  profileBut.style.display='none';


}

postIcon.addEventListener('click', (event) => {
  console.log('clicked');
   displayOffProfielFiled();
   getAllPost();
  if (postForm.style.display == 'none') {
    postForm.style.display = 'inherit';
  }
  else {
    postForm.style.display = 'none'
  }


})



function openSearchBox() {
 /*  searchInput.style.width = '200px';
  searchInput.style.cursor = 'text';
  searchInput.focus(); */
}

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = serializeJson(searchForm);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  console.log(fetchOptions);
  const response = await fetch(url + '/post/search', fetchOptions);
  const items = await response.json();

  if (items.length != 0) {
    createCards(items);

  }
  else {
    searchMessage.style.display = 'inherit';
    setTimeout(function () {
      searchMessage.style.display = 'none'
    }, 3000);


  }
})

profileBut.addEventListener('click' , async (event)=>{
  
  const userId =   await getUSerId() ;
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userId),
  };
  const response = await fetch(url + '/post/getUserPost', fetchOptions);  
  const posts = await response.json();
 if(posts){
   userProfilePAge();
   postForm.style.display='none';
   populateProfile();
   createCards(posts);
 }
    
})

const userProfilePAge=()=>{
  main_container.style.display='flex';
  displayProfielFiled();

}

const populateProfile= async ()=>{
  const user = await getUSerId();
  const name = user.userName;
  const email = user.email;
  profileName.innerHTML=name;
  userEmail.innerHTML=email;


}



const getUSerId = async () => {
  if (sessionStorage.getItem('token')) {
    displaylogout();
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
      },
    };
    const response = await fetch(url + '/auth/getUser', fetchOptions);
    const userInfo = await response.json();
    userInputId.value = userInfo.user_id;
    const id = userInfo.user_id;
    console.log(id);
    
      console.log(userInfo);
    return  userInfo;
  

  }
  else {
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
    displayOffProfielFiled();
    getAllPost();
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
  cardHolder.innerHTML = "";
  posts.forEach((post) => {
    console.log(post.ownername);

    const card = document.createElement('div')
    card.className = 'card w3-card-2';

    const cardHeader = document.createElement('div')
    cardHeader.className = 'card_header';

    const profileImage = document.createElement('div')
    profileImage.className = 'profile_image';
    
    const image =document.createElement('img');
    image.className='pro_img';
    image.src='./pic/pro.jpg';

    const userName = document.createElement('div')
    userName.innerHTML = post.ownername
    userName.className = 'user_name';

    const postTime = document.createElement('div')
    postTime.className = 'time';
    //postTime.innerHTML = '1hr';


   
    const dropdownForm= document.createElement('form');
    dropdownForm.className='dropd_form';
    dropdownForm.id='dropd_form';

    const postTimer= document.createElement('p');
    postTime.className='card_time';
    postTimer.id='card_time';


    const dropdownWrapper= document.createElement('div');
    dropdownWrapper.className='dropdown';

    const postIdInput = document.createElement('input');
    postIdInput.className='postId';
    postIdInput.value=post.id;
    postIdInput.style.display='none';

    
    const postUsId = document.createElement('input');
    postUsId.className='postUsId';
    postUsId.value=post.user_id;
    postUsId.style.display='none';

    const dropdownIconHolder= document.createElement('button');
    dropdownIconHolder.className='dropbtn';
    
    const dropdownIcon= document.createElement('i');
    dropdownIcon.className='fas fa-ellipsis-h';

    const dropdownContent = document.createElement('div');
    dropdownContent.className='dropdown-content';

    const dropdownDelete= document.createElement('button');
    dropdownDelete.className='dropdown_delet_but';
  //  dropdownDelete.type='submit';
     dropdownDelete.id='dropdown_delet_but';
     dropdownDelete.innerHTML='Delete';

     
     dropdownDelete.value=post.id;
     dropdownDelete.title=post.user_id;

    dropdownDelete.addEventListener('click', async (event)=>{
     event.preventDefault();
  
    const  postOwner = postUsId.value
    const  clickedPOstId = postIdInput.value
    const pageOwnerId= userInputId.value

       if (pageOwnerId==postOwner){
         console.log('you can delete');

       const data = {"userID":pageOwnerId,"postID":clickedPOstId}
        

         const fetchOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        };
        const response = await fetch(url + '/post/deletePost', fetchOptions);
       const dataa = await response.json();
        if(dataa){
          getAllPost();
        }
      
       }
       else{
         alert('it is not your post');
       }
     
    
      
    });
    

    const cardBody = document.createElement('div')
    cardBody.className = 'content';

    const postPic = document.createElement('img')
    postPic.src = url + '/' + post.file_path;
    postPic.className = 'postPic';

    const discription = document.createElement('div')
    discription.innerHTML = post.description;
    discription.className = 'discription';
   
    profileImage.appendChild(image);
    cardHeader.appendChild(profileImage);
    cardHeader.appendChild(userName);


    
    dropdownIconHolder.appendChild(dropdownIcon);
    dropdownContent.appendChild(dropdownDelete);
    dropdownWrapper.appendChild(dropdownIconHolder);
    dropdownWrapper.appendChild(dropdownContent);
     dropdownForm.appendChild(dropdownWrapper);
     dropdownForm.appendChild(postIdInput);
     dropdownForm.appendChild(postUsId);
     postTime.appendChild(dropdownForm);
     postTime.appendChild(postTimer);




    cardHeader.appendChild(postTime);
    card.appendChild(cardHeader);


    cardBody.appendChild(postPic);
    cardBody.appendChild(discription);
    card.appendChild(cardBody);
    cardHolder.appendChild(card)


  });

}




getAllPost();
getItems();


