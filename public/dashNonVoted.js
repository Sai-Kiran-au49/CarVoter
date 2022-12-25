async function loggedInUser(){
    const info = await fetch('/user_data')
   const userDetails = await info.json();
   if(info.status == 400){
    location.replace('/login')
   }else{
      userName.innerText = userDetails.name
   }
}

loggedInUser();

const userName = document.querySelector('#head-name')
const carOneBtn = document.querySelector('#car1')
const carTwoBtn = document.querySelector('#car2')
const carThreeBtn = document.querySelector('#car3')
const carFourBtn = document.querySelector('#car4')
const carFiveBtn = document.querySelector('#car5')


const imgEle = document.querySelector('#img1')
const countVoteEle = document.querySelector('#count')
const unVoteEle = document.querySelector('#unvote')
const votesEle = document.querySelector('#votes')

carOneBtn.addEventListener('click', async ()=>{
    const viewCar = await fetch('/cars/to_vote');
    const viewCarOne = await viewCar.json();
  const picDB = viewCarOne[0].image; 
  carClick = viewCarOne[0].Name;
  imgEle.srcset = picDB;
})

carTwoBtn.addEventListener('click', async ()=>{
    const viewCar = await fetch('/cars/to_vote');
    const viewCarTwo = await viewCar.json();
  const picDB = viewCarTwo[1].image; 
  carClick = viewCarTwo[1].Name;

  imgEle.srcset = picDB;
})


carThreeBtn.addEventListener('click', async ()=>{
    const viewCar = await fetch('/cars/to_vote');
    const viewCarThree = await viewCar.json();
console.log(viewCarThree);
    const picDB = viewCarThree[2].image; 
    carClick = viewCarThree[2].Name;

// 
imgEle.srcset = picDB;
})

carFourBtn.addEventListener('click', async ()=>{
    const viewCar = await fetch('/cars/to_vote');
    const viewCarFour = await viewCar.json();
  const picDB = viewCarFour[3].image; 
  carClick = viewCarFour[3].Name;


//   console.log(picDB);
  imgEle.srcset = picDB;
})

carFiveBtn.addEventListener('click', async ()=>{
    const viewCar = await fetch('/cars/to_vote');
    const viewCarFive = await viewCar.json();
  const picDB = viewCarFive[4].image; 
 carClick = viewCarFive[4].Name;
  console.log(picDB);
  imgEle.srcset = picDB;
})


let carClick = ""

const voteObj = {
  
}



let count = 0
votesEle.addEventListener('click', ()=>{  
  if(count>=10){
    return;
  }
  if(carClick in voteObj){
    voteObj[carClick]++
  }else{
    voteObj[carClick]= 1
  }
  console.log(voteObj)
  count += 1   
  countVoteEle.innerText = count;  
})

let counter = 1;
unVoteEle.addEventListener('click', ()=>{    
    if(count>0)
    {
      if(carClick in voteObj){
        voteObj[carClick]--
      }
        count -=counter
        countVoteEle.innerText = count;    
    }
})

document.querySelector('.subBtn').addEventListener('click', async (e)=>{
  const dataArray = []
  for(let i in voteObj){
    if(voteObj[i]){
      dataArray.push({
        modelId : i,
        votes: voteObj[i]
      })
    }
  }
  console.log(JSON.stringify(voteObj));
   await fetch('/user_data/submit',{method: 'POST', headers:{ "Content-Type" :"application/json" }, body : JSON.stringify(dataArray)})    
   location.replace('/dashboard/voted') 
}) 

const profileELe = document.querySelector('.icon')
profileELe.addEventListener('click',()=>{
    location.replace('/profile')
})











