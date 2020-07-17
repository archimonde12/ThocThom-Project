let model={
    currentUserData:{
        name:"",
        balance:0
    },
    notifications:[],
    pendingIdeas:[]
}

model.saveCurrentUserData = function(userData){
    model.currentUserData.name=userData.name;
    model.currentUserData.balance=Number(userData.balance);
}

model.saveNotification = function(notiData){
    let refinedNotiData=refineData(notiData)
    let newNoti={
        content:refinedNotiData.content,
        recivedEmail:refinedNotiData.recivedEmail,
        createdAt:refinedNotiData.createAt,
        id:notiData.id
    }
    model.notifications.push(newNoti)
}

model.savePendingIdea = function(pendingIdeaData){
    let refinedPendingIdeaData=refineData(pendingIdeaData)
    let newPendingIdea={
        content:refinedPendingIdeaData.content,
        title:refinedPendingIdeaData.title,
        createdAt:refinedPendingIdeaData.createAt,
        author:refinedPendingIdeaData.author,
        id:pendingIdeaData.id
    }
    model.pendingIdeas.push(newPendingIdea)
}

