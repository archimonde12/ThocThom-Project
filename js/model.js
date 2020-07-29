let model = {
    currentUserData: {
        email: "",
        name: "",
        balance: 0
    },
    guestData: {},
    notifications: [],
    pendingIdeas: [],
    ideas: [],
    funds: [],
    profileData:{},
    ideaData:{},
    imgURL:""
}

model.saveCurrentUserData = function (userData) {
    model.currentUserData = userData
    // model.currentUserData.name=userData.name;
    // model.currentUserData.balance=Number(userData.balance);
    // model.currentUserData.email=userData.email
}

model.saveGuestData = function (userData) {
    model.guestData = userData
}

model.saveNotification = function (notiData) {
    let refinedNotiData = refineData(notiData)
    let newNoti = {
        content: refinedNotiData.content,
        recivedEmail: refinedNotiData.recivedEmail,
        createdAt: refinedNotiData.createAt,
        id: notiData.id
    }
    model.notifications.push(newNoti)
}

model.savePendingIdea = function (pendingIdeaData) {
    let refinedPendingIdeaData = refineData(pendingIdeaData);
    console.log(refinedPendingIdeaData)
    let newPendingIdea = {
        content: refinedPendingIdeaData.content,
        title: refinedPendingIdeaData.title,
        createdAt: refinedPendingIdeaData.createAt,
        author: refinedPendingIdeaData.author,
        id: pendingIdeaData.id,
        ideaImageURL:refinedPendingIdeaData.ideaImageURL
    };
    model.pendingIdeas.push(newPendingIdea);
}

model.saveIdea = function (ideaData) {
    let refinedIdeaData = refineData(ideaData);
    let newIdea = {
        content: refinedIdeaData.content,
        title: refinedIdeaData.title,
        createdAt: refinedIdeaData.createdAt,
        author: refinedIdeaData.author,
        id: ideaData.id,
        likes: refinedIdeaData.likes,
        ideaImageURL:refinedIdeaData.ideaImageURL
    };
    model.ideas.push(newIdea);
}

//Xử lý Like Function

model.addLikeToIdeaHaveID = function (id, email) {
    model.ideas.forEach((idea) => {
        if (idea.id == id) {
            if (idea.likes == undefined) { idea.likes = [] }
            if (!idea.likes.includes(email)) {
                idea.likes.push(email)
                console.log(email + " like bài viết")
            }
            else { console.log("đã like rồi") }
        }
    })
}

model.removeLikeToIdeaHaveId = function (id, email) {
    t = model.ideas[searchIdIndex(id, model.ideas)].likes.filter(item => item !== email);
    model.ideas[searchIdIndex(id, model.ideas)].likes = t;
    console.log(email + " đã unlike bài viết")
}

model.saveImgURL = function (url) {
    model.imgURL = url;
}

model.saveFundInfomation = function (fundsData) {
    model.funds.push(fundsData)
}

//Xử lý follow và unfollow Function


model.addFollowerToFundHaveID = function (id, currentEmail) {
    if (model.funds == []) { console.log("Chưa tải dữ liệu quỹ hoặc chưa có quỹ tồn tại") }
    else {
        model.funds.forEach((fund) => {
            if (fund.id == id) {
                if (fund.follower == undefined) { fund.follower = [] }
                if (!fund.follower.includes(currentEmail)) {
                    fund.follower.push(currentEmail)
                    console.log(currentEmail + " đã được thêm vào danh sách follower của " + fund.email + " thành công!")
                }
                else { console.log(currentEmail + " đã được loại khỏi danh sách follower của " + fund.email + " thành công!") }
            }
        })
    }
}

model.addFollowToCurrentUser = function (Fundemail) {
    if (model.currentUserData.follow == undefined) { model.currentUserData.follow = [] }
    if (!model.currentUserData.follow.includes(Fundemail)) {
        model.currentUserData.follow.push(Fundemail)
        console.log(" đã thêm " + Fundemail + " vào Follow List")
    }
}

model.removeFollowerToFundHaveID = function (id, currentEmail) {
    let fundWithID = model.funds[searchIdIndex(id, model.funds)]
    let temp = fundWithID.follower.filter(item => item !== currentEmail);
    fundWithID.follower = temp;
    if (!fundWithID.follower.includes(currentEmail))
        console.log(currentEmail + " đã được loại bỏ khỏi danh sách Follower của " + fundWithID.email)
    else { console.error("Có lỗi gì đó xảy ra!!! " + currentEmail + " vẫn chưa được loại bỏ khỏi danh sách Follower của " + fundWithID.email) }

}

model.removeFollowToCurrentUser = function (Fundemail) {
    let temp = model.currentUserData.follow.filter(item => item !== Fundemail);
    model.currentUserData.follow = temp
    if (!model.currentUserData.follow.includes(Fundemail))
        console.log(Fundemail + " đã được loại bỏ khỏi danh sách Follow của " + model.currentUserData.email)
    else { console.log("Có lỗi gì đó xảy ra " + Fundemail + " vẫn chưa được loại bỏ khỏi danh sách Follow của " + model.currentUserData.email) }
}

//Hàm lấy dữ liệu của Follow Function
model.getFollowerListOfFundHaveID = function (idOfFund) {
    if(model.funds[searchIdIndex(idOfFund, model.funds)]==undefined){
        console.log("Bài đăng này không phải của quỹ")
    }
    return model.funds[searchIdIndex(idOfFund, model.funds)].follower;
}

model.getFollowListOfCurrentUser = function () {
    return model.currentUserData.follow
}

//Xử lý chức năng đầu tư

model.saveInvestDataToFund = function (idOfFund, dataReq) {
    let targetFund = model.funds[searchIdIndex(idOfFund, model.funds)]
    //Check investors
    let isInvestorExist = false; // Biến kiểm tra nếu trong danh sách investor đã tồn tại email
    let investorIndex = 0; //Lưu vị trí investor đó
    if (targetFund.investors == undefined) {
        targetFund.investors = [] //Tạo file rỗng ban đầu cho quỹ
    }
    else {
        //Kiểm tra danh sách sự tồn tại của email investor
        for (let i = 0; i < targetFund.investors.length; i++) {
            if (targetFund.investors[i].email == dataReq.email) { isInvestorExist = true; investorIndex = i }
        }
    }
    //Lưu biến tạm

    temp = [...targetFund.investors]

    if (!isInvestorExist) {
        //Nếu chưa tồn tại thì đẩy thẳng dữ liệu vào 
        temp.push(dataReq)

    } else {
        //Nếu đã tồn tại rồi thì chỉ cần đẩy một phần dữ liệu vào
        temp[investorIndex].historyInvest.push(dataReq.historyInvest[0])

    }
    //Lưu lại giá trị tại cache
    model.funds[searchIdIndex(idOfFund, model.funds)].investors = temp;
    console.log("Đã thực hiện lưu thông tin đầu tư ở cache của Fund");

}

model.saveInvestDataToUser =function (idOfFund,dataReq){
    let targetFund = model.funds[searchIdIndex(idOfFund, model.funds)]
    let newDataReq = {
        fundEmail:targetFund.email,
        historyInvest:[...dataReq.historyInvest]
    }
    if(dataReq.email==model.currentUserData.email){
        //Kiểm tra việc đã đầu tư ở quỹ này chưa
    
    let isFundExist = false
    let fundIndex = 0
    if(model.currentUserData.investAct==undefined){
        model.currentUserData.investAct=[]
    } else {
        for (let i = 0; i < model.currentUserData.investAct.length; i++) {
            if (model.currentUserData.investAct[i].fundEmail == newDataReq.fundEmail) { isFundExist = true; fundIndex = i }
        }
    }
    //Lưu biến tạm
    temp = [...model.currentUserData.investAct];
    

    //Nếu chưa đầu tư ở fund này bao giờ
    if(!isFundExist) {temp.push(newDataReq)}
    else {
        temp[fundIndex].historyInvest.push(newDataReq.historyInvest[0])
    }
    model.currentUserData.investAct = temp;
    }
}

model.getTotalInvestOnFund = function(idOfFund,emailInvestor){
    let targetFund = model.funds[searchIdIndex(idOfFund, model.funds)]
    for (let investor of targetFund.investors){
        if(emailInvestor==investor.email){
            for(let i=1;i<investor.historyInvest;i++){
                investor.historyInvest.nowAmount
            }
        }
    }
}

model.createNewInvestorData = function(emailInput){
    return{
        email:emailInput,
        totalInvestBalace:0,
        historyInvest:[{
            initialInvestMoney:0,
            investAt: new Date(),
            comment:"",
        }],
        historyWithdraw:[{
            withdrawAmount:0,
            withdrawAt:new Date(),
            comment:"",
        }]
    }
}

// model.calculateTotalInvest() = function(data){
//  for(let i=1;i<data.historyInvest.length;i++){
//     data.totalInvestBalace+=data.historyInvest[i].currentInvestMoney
//  }
//  for(i=1;i<data.historyWithdraw.length;i++){
//     data.totalInvestBalace-=data.historyWithdraw[i].withdrawAmount
//  }
// }

model.setProfileFundData=function(idFund){
    let targetFund = model.funds[searchIdIndex(idFund, model.funds)]
    model.profileData=targetFund;
    console.log(idFund)
}

model.saveIdeaData=function(idIdea){
    let targetIdea = model.ideas[searchIdIndex(idIdea, model.ideas)]
    model.ideaData=targetIdea;
    view.showPage("ideaViewPage")
}