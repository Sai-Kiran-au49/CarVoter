
const formEle = document.querySelector('form')

formEle.addEventListener('submit', formSubmitted)

function formSubmitted(e){
  e.preventDefault();
  // console.log("Submitting form");
 signupDataRes();
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
      const p = document.createElement('p')
      p.innerHTML = "Email already exists"
      document.body.append(p)
  }
}

