
const formEle = document.querySelector('form')

formEle.addEventListener('submit', formSubmitted)

const emailError = document.querySelector('#error-email')

const passError = document.querySelector('#error-password')


function formSubmitted(e){
  e.preventDefault();
  // console.log("Submitting form");
  if(checkPassword()){
    signupDataRes();
  }else {
    passError.classList.remove('hide')
  }
}

async function signupDataRes(){
  const signupRes = await fetch("/signup", {
      method:'POST',
      body : new URLSearchParams(new FormData(formEle))
  })
  const signupData = await signupRes.json();   
  if(signupRes.status == 201){
      location.replace("/login")
  } else {
    emailError.classList.remove('hide')
  }
}

const passEle = document.querySelector('#password')
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const numbers = "1234567890";
const specialCharacters = "@!$%*?&_";

function checkPassword() {
  const password = passEle.value ;
  if (password.length > 10 || password.length < 6) return false;
  let upper = false,
    lower = false,
    num = false,
    special = false;
  for (let i of password) {
    if (!upper) {
      upper = upperCase.includes(i);
    }
    if (!lower) {
      lower = lowerCase.includes(i);
    }
    if (!num) {
      num = numbers.includes(i);
    }
    if (!special) {
      special = specialCharacters.includes(i);
    }
    if (upper && lower && num && special) {
      return true;
    }
  }
  return upper && lower && num && special;
}
