'use strict';
const urll = 'http://localhost:4000/auth'; 
const userRegisterForm = document.querySelector('#userRegisterForm');
const error_div = document.querySelector('#error_div');
const userLoginFormm = document.querySelector('#userLoginForm');
const feedWrapper2 = document.querySelector('#feed_wrapper') ;
const loginWrapper2 = document.querySelector('#login_wrapper') ;
const headerWrapper2 = document.querySelector('#header_wrapper') ;

const regBackBut = document.querySelector('#reg_back_bt') ;
const regLarerBut = document.querySelector('#reg_later_bt') ;


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
  const response = await fetch(urll + '/register', fetchOptions);
  const dataa = await  response.json();
   console.log(dataa);

   if(dataa.errors){
      const error = dataa.errors;
  displayError(error); 
   }
   else{
     
   }
   

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
  
regBackBut.addEventListener('click',(event)=>{
  console.log('clicked');

  loginWrapper.style.display='inherit';
  registerwrapper.style.display='none';
  feedWrapper.style.display='none';
  headerWrapper.style.display='none';

});

  
regLarerBut.addEventListener('click',(event)=>{
  console.log('clicked');

  loginWrapper.style.display='none';
  registerwrapper.style.display='none';
  feedWrapper.style.display='inherit';
  headerWrapper.style.display='inherit';

});


