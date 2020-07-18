function SetUpSignInSignUpPage(){
    try{
        let signIn = document.getElementById('signIn')
        let signUp = document.getElementById('signUp')
        let logIn = document.getElementById('log-in')
        let back = document.getElementById('back')
        
        logIn.addEventListener('click', () => {
            signIn.classList.add('active-dx')
            signUp.classList.add('inactive-sx')
            signUp.classList.remove("active-sx")
            signIn.classList.remove("inactive-dx")
        })
        
        back.addEventListener('click', () => {
            signUp.classList.add('active-sx')
            signIn.classList.add('inactive-dx')
            signIn.classList.remove("active-dx")
            signUp.classList.remove("inactive-sx")
        })    
    }
    catch(error){
        console.log(error)
    }
}

// trả về true nếu mọi giá trị trong mảng đúng và ngược lại
function isPassed(validateResult) {
    let isFail = validateResult.includes(false)
    if (isFail == true) {
        return false
    }
    return !isFail

}

//kiểm tra format email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function refineData(rawData) {
    let data = rawData.data()
    data.id = rawData.id
    return data
}

function waitForSeconds(seconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, seconds*1000);
    });
  }

function searchIdIndex(id,array){
    let found;
    array.forEach((value,index)=>{
        if(value.id==id){
          found=index  
        }
    })
    return found;
}
