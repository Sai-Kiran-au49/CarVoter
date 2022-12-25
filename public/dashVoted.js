const divEle = document.querySelector('.votes')
const votedEle = document.querySelector('.voted')
const carVotesEle = document.querySelector('.carvotes')
const profileNameEle = document.querySelector('#profile-name')


async function carVotes() {
    const carVotesRes = await fetch("/cars/votes")
    const carVotes = await carVotesRes.json() 
    if(carVotesRes.status == 400 ){
        location.replace('/login')
    }else {
        const votedCarObj = {}
       for(let carVote of carVotes){
        votedCarObj[carVote.Name]= carVote.votes
       }
        return votedCarObj;
    }}


function carNames(carVotesInfo){
    let data = ""
    for(let carName in carVotesInfo){
        data+= carName + "&nbsp" +"-->"+ "&nbsp" + carVotesInfo[carName]+ "&nbsp" + "votes."+ "<br>" 
    } 
    return data;
}

async function userVotes() {
    const userVotesRes = await fetch("/user_data")
    const userVotes = await userVotesRes.json() 
    if(userVotesRes.status == 400 ){
        location.replace('/login')
    }else {
        profileNameEle.innerHTML = userVotes.name
        const userDataObj = {}
        for(let userInfo of userVotes.votes){
         userDataObj[userInfo.modelId]= userInfo.votes
        }
        return userDataObj;
    } 
}

function userInfoDisplay(userVotesInfo){
    let userdata = ""
    console.log(userVotesInfo);
    for(let userDetails in userVotesInfo){
        userdata+= userDetails+ "&nbsp" +"-->"+ "&nbsp" +":" + "&nbsp" + userVotesInfo[userDetails] + "&nbsp" + "vote(s)."+ "<br>" 
    } 
    return userdata;
}

// DOM Manipulation
async function domManipulation(){
    carVotesEle.innerHTML =  carNames(await carVotes());
    divEle.innerHTML  =  userInfoDisplay(await userVotes());   
}
domManipulation()


//Logout DOM 

document.querySelector('#logout').addEventListener('click', ()=>{
      location.replace('/logout')
})























// async function votedVotes() {
//     const votedVotesRes = await fetch("/user_data/votes")
//     const votedVotes = await votedVotesRes.json() 
//     if(votedVotesRes.status == 400 ){
//         location.replace('/login')
//     }else {
//         return votedVotes;
//     } 
// }





