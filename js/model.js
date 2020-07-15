let model={
    currentUserData:{
        name:"",
        balance:0
    }
}

model.saveCurrentUserData = function(userData){
    model.currentUserData.name=userData.name;
    model.currentUserData.balance=Number(userData.balance);
}

