let model={
    currentUserData:{
        email:"",
        name:"",
        balance:0
    },
    guestData:{},
    notifications:[],
    pendingIdeas:[],
    ideas:[]
}

model.saveCurrentUserData = function(userData){
    model.currentUserData=userData
    // model.currentUserData.name=userData.name;
    // model.currentUserData.balance=Number(userData.balance);
    // model.currentUserData.email=userData.email
}

model.saveGuestData = function(userData){
    model.guestData=userData
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
    let refinedPendingIdeaData=refineData(pendingIdeaData);
    let newPendingIdea={
        content:refinedPendingIdeaData.content,
        title:refinedPendingIdeaData.title,
        createdAt:refinedPendingIdeaData.createAt,
        author:refinedPendingIdeaData.author,
        id:pendingIdeaData.id
    };
    model.pendingIdeas.push(newPendingIdea);
}

model.saveIdea = function(ideaData){
    let refinedIdeaData=refineData(ideaData);
    let newIdea={
        content:refinedIdeaData.content,
        title:refinedIdeaData.title,
        createdAt:refinedIdeaData.createdAt,
        author:refinedIdeaData.author,
        id:ideaData.id,
        likes:refinedIdeaData.likes
    };
    model.ideas.push(newIdea);
}

model.addLikeToIdeaHaveID = function(id,email){
    model.ideas.forEach((idea)=>{
        if(idea.id==id){
            if(idea.likes==undefined) {idea.likes=[]}
            if(!idea.likes.includes(email)){
                idea.likes.push(email)
                console.log(email+ " like bài viết")
            }
            else{console.log("đã like rồi")}
        }
    })
}

model.removeLikeToIdeaHaveId = function(id,email){
    temp=model.ideas[searchIdIndex(id,model.ideas)].likes.filter(item => item !== email);
    model.ideas[searchIdIndex(id,model.ideas)].likes=temp;
    console.log(email+ " đã unlike bài viết")
}
