let model={
    currentUserData:{
        email:"",
        name:"",
        balance:0
    },
    guestData:{},
    notifications:[],
    pendingIdeas:[],
    ideas:[],
    funds:[]
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

//Xử lý Like Function

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

model.saveImgURL=function(url){
    model.imgURL=url;
}

model.saveFundInfomation = function(fundsData){
    model.funds.push(fundsData)
}

//Xử lý follow và unfollow Function


model.addFollowerToFundHaveID = function(id,currentEmail){
    if (model.funds==[]) {console.log("Chưa tải dữ liệu quỹ hoặc chưa có quỹ tồn tại")}
    else {
        model.funds.forEach((fund)=>{
            if(fund.id==id){
                if(fund.follower==undefined) {fund.follower=[]}
                if(!fund.follower.includes(currentEmail)){
                    fund.follower.push(currentEmail)
                    console.log(currentEmail+ " đã được thêm vào danh sách follower của " + fund.email + " thành công!")
                }
                else{console.log(currentEmail+ " đã được loại khỏi danh sách follower của " + fund.email + " thành công!")}
            }
        })
    }    
}

model.addFollowToCurrentUser = function(Fundemail){
    if(model.currentUserData.follow==undefined) {model.currentUserData.follow=[]}
    if(!model.currentUserData.follow.includes(Fundemail)){
        model.currentUserData.follow.push(Fundemail)
        console.log(" đã thêm " + Fundemail+ " vào Follow List")
    }
}

model.removeFollowerToFundHaveID = function(id,currentEmail){
    let fundWithID=model.funds[searchIdIndex(id,model.funds)]
    temp=fundWithID.follower.filter(item => item !== currentEmail);
    fundWithID.follower=temp;
    if(!fundWithID.follower.includes(currentEmail))
        console.log(currentEmail+ " đã được loại bỏ khỏi danh sách Follower của " + fundWithID.email)
    else 
        {console.error("Có lỗi gì đó xảy ra!!! "+currentEmail+ " vẫn chưa được loại bỏ khỏi danh sách Follower của " + fundWithID.email)}
    
}

model.removeFollowToCurrentUser = function(Fundemail){
    temp=model.currentUserData.follow.filter(item => item !== Fundemail);
    model.currentUserData.follow=temp
    if(!model.currentUserData.follow.includes(Fundemail))
        console.log(Fundemail+ " đã được loại bỏ khỏi danh sách Follow của " + model.currentUserData.email)
    else 
        {console.log("Có lỗi gì đó xảy ra "+Fundemail+ " vẫn chưa được loại bỏ khỏi danh sách Follow của " + model.currentUserData.email)}
}

//Hàm lấy dữ liệu của Follow Function
model.getFollowerListOfFundHaveID = function(idOfFund){
    return model.funds[searchIdIndex(idOfFund,model.funds)].follower;
}

model.getFollowListOfCurrentUser = function(){
    return model.currentUserData.follow
}