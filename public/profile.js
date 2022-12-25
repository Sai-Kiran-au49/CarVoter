
async function runDefault(){
   const userinfo = await fetch('/user_data')
   const userData = await userinfo.json();
  if(userinfo.status==400){
    location.replace('/login')
  } else {
    userLable.innerText = userData.name 
    emailLabel.innerText = userData.email
    phoneLable.innerText = userData.phone  
  } 
  }
  runDefault();

// Editing the User Name Details 
const userEditBtn = document.getElementById('userEdit') 
const userInputEle = document.getElementById('userInput')
const userLable = document.getElementById('userLabel')
const userCancelBtn = document.getElementById('userCancel')
const updateEle = document.getElementById('updateBtn')


userEditBtn.addEventListener('click',()=>{
    userInputEle.classList.remove('hide')
    userLable.classList.add('hide') 
    userEditBtn.classList.add('hide') 
    userCancelBtn.classList.remove('hide') 
    updateEle.classList.remove('hide')          
})

userCancelBtn.addEventListener('click',()=>{
    userInputEle.classList.add('hide')
    userLable.classList.remove('hide') 
    userEditBtn.classList.remove('hide') 
    userCancelBtn.classList.add('hide') 
    updateEle.classList.add('hide')    
})

updateEle.addEventListener('click', async ()=>{       
const userUpdatedRes = userInputEle.value 
const formData = new FormData();
formData.append('name', 'userUpdatedRes')
const updateRes = await fetch('/user_data', {
    method : 'POST',
    body : new URLSearchParams(formData)
})

userInputEle.classList.add('hide')
userLable.classList.remove('hide') 
userEditBtn.classList.remove('hide') 
userCancelBtn.classList.add('hide') 
updateEle.classList.add('hide')   

if(userUpdatedRes){
    userLable.innerHTML = userUpdatedRes;
}
})


//Editing the Email Details 

const emailEditBtn = document.getElementById('emailEdit') 
const emailInputEle = document.getElementById('emailInput')
const emailLabel = document.getElementById('emailLabel')
const emailCancelBtn = document.getElementById('emailCancel')
const emailUpdateBtnEle = document.getElementById('emailUpdateBtn')

emailEditBtn.addEventListener('click',()=>{
    emailInputEle.classList.remove('hide')
    emailLabel.classList.add('hide') 
    emailEditBtn.classList.add('hide') 
    emailCancelBtn.classList.remove('hide') 
    emailUpdateBtnEle.classList.remove('hide')      
})

emailCancelBtn.addEventListener('click',()=>{
    emailInputEle.classList.add('hide')
    emailLabel.classList.remove('hide') 
    emailEditBtn.classList.remove('hide') 
    emailCancelBtn.classList.add('hide') 
    emailUpdateBtnEle.classList.add('hide')            
})

emailUpdateBtnEle.addEventListener('click', async ()=>{       
    const emailUpdatedRes = emailInputEle.value 
    const formData = new FormData();
    formData.append('email', 'emailUpdatedRes')
    const emailUpdateRes = await fetch('/user_data', {
        method : 'POST',
        body : new URLSearchParams(formData)
    })
    emailInputEle.classList.add('hide')
    emailLabel.classList.remove('hide') 
    emailEditBtn.classList.remove('hide') 
    emailCancelBtn.classList.add('hide') 
    emailUpdateBtnEle.classList.add('hide')       
    
    if(emailUpdatedRes){
        emailLabel.innerText = emailUpdatedRes
    }
    })


// Editing the phone details

const phoneEditBtn = document.getElementById('phoneEdit') 
const phoneInputEle = document.getElementById('phoneInput')
const phoneLable = document.getElementById('phoneLabel')
const phoneCancelBtn = document.getElementById('phoneCancel')
const phoneUpdateBtnEle = document.getElementById('phoneUpdateBtn')

phoneEditBtn.addEventListener('click',()=>{
    phoneInputEle.classList.remove('hide')
    phoneLable.classList.add('hide') 
    phoneEditBtn.classList.add('hide') 
    phoneCancelBtn.classList.remove('hide') 
    phoneUpdateBtnEle.classList.remove('hide')
})

phoneCancelBtn.addEventListener('click',()=>{
    phoneInputEle.classList.add('hide')
    phoneLable.classList.remove('hide') 
    phoneEditBtn.classList.remove('hide') 
    phoneCancelBtn.classList.add('hide') 
    phoneUpdateBtnEle.classList.add('hide')      
})

phoneUpdateBtnEle.addEventListener('click', async ()=>{       
    const phoneUpdatedRes = phoneInputEle.value 
    const formData = new FormData();
    formData.append('phone', 'phoneUpdatedRes')
    const phoneUpdateRes = await fetch('/user_data', {
        method : 'POST',
        body : new URLSearchParams(formData)
    })
  
    phoneInputEle.classList.add('hide')
    phoneLable.classList.remove('hide') 
    phoneEditBtn.classList.remove('hide') 
    phoneCancelBtn.classList.add('hide') 
    phoneUpdateBtnEle.classList.add('hide')  
    if(phoneUpdatedRes){
        phoneLable.innerHTML = phoneUpdatedRes;
    }
    })

