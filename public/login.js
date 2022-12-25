
const formEle = document.querySelector('form')
const pEle = document.querySelector('.hide')

formEle.addEventListener('submit', (e)=>{
 e.preventDefault();
 loginDataRes();
})

async function loginDataRes(){
    const loginRes = await fetch("/login", {
        method:'POST',
        body : new URLSearchParams(new FormData(formEle))
    })   
    const loginData = await loginRes.json();
    if(loginRes.status == 201){
        console.log(loginData);   
        location.replace("/dashboard/nonvoted")
    } else {
        // const p = document.createElement('p')
        pEle.classList.remove('hide')
        // pEle.innerHTML = "Invalid credentials, please check."
        // pEle.innerHTML = ""
        // document.body.append(p)
    }
}

