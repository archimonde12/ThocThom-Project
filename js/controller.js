let db = firebase.firestore()
const KEY_USERS_COLLECTION = "Users"
const KEY_NOTI_COLLECTION = "Notifications"
const KEY_PENDINGIDEA_COLLECTION = "PendingIdeas"
const KEY_IDEA_COLLECTION = "Ideas"
let controller = {};

controller.signUp = async function (name, email, password, typeOfAccountData, phoneNumberData, addressData) {
    view.setText('sign-up-error', '')
    view.setText('sign-up-success', '')
    view.setActive('sign-up-btn', false)
    try {
        //Tạo tài khoản bằng email và password
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        //Thay đổi display name
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        })
        let other = {
            type: typeOfAccountData,
            phone: phoneNumberData,
            address: addressData,
            avatarURL: "https://firebasestorage.googleapis.com/v0/b/thocthom-project.appspot.com/o/img%2FDefaut%2Fdefault-avatar.png?alt=media&token=55eec6a1-cb2f-4d0d-9bd2-564ef8b45eec"
        }
        controller.CreateDataForNewAccount(other);
        console.log(firebase.auth().currentUser.displayName)
        //Xác thực tài khoản
        //await firebase.auth().currentUser.sendEmailVerification()
        //Thông báo đăng kí thành công
        view.setText('sign-up-success', 'an email verification has been sent')
        view.showPage("mainView")
    } catch (error) {
        // document.getElementById('sign-up-error').innerHTML = error.message
        view.setText('sign-up-error', error.message)
        view.setActive('sign-up-btn', true)
        // console.log('kết thúc việc đăng ký tài khoản')   
    }
}

controller.signIn = async function (email, password) {
    view.setText('sign-in-error', '')
    view.setActive('sign-in-btn', false)
    try {
        //Đăng nhập bằng email và password
        await firebase.auth().signInWithEmailAndPassword(email, password)
        view.showPage("mainView")
    } catch (error) {
        view.setText('sign-in-error', error.message)
        view.setActive('sign-in-btn', true)
    }

}

controller.Compose = async function (title, content) {
    //Khởi động
    view.setText('compose-error', '')
    view.setText('compose-success', '')
    view.setActive('compose-btn', false)
    try {
        //Lấy dữ liệu
        let newIdea = {
            title: title,
            content: content,
            author: model.currentUserData,
            createAt: new Date().toLocaleString(),
            ideaImageURL:model.imgURL
        }
        //push lên pendingIdeas
        await db.collection(KEY_PENDINGIDEA_COLLECTION).add(newIdea)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
        //Thông báo thành công
        view.setText('compose-success', 'Post your idea successfully,please wait for admin accpect!')
        view.setText('compose-btn', "Đăng thành công")
        await waitForSeconds(2)
        let currentEmail = firebase.auth().currentUser.email
        controller.sendNotification(currentEmail, "Bạn đã đăng bài thành công, hãy đợi sự kiểm duyệt của admin nhé")
        view.showPage("mainView")
    } catch (error) {
        view.setText('compose-error', error.message)
        view.setActive('compose-btn', true)
    }

}

controller.CreateDataForNewAccount = async function (otherData) {
    //Lấy thông tin email và display name của user
    let currentEmail = firebase.auth().currentUser.email
    let currentName = firebase.auth().currentUser.displayName
    //Tạo cơ sở dự liệu mới cho người dùng mới
    let newUser = {
        name: currentName,
        email: currentEmail,
        balance: 0,
        createAt: new Date().toLocaleString(),
        other: otherData,
        //Follow Function Data
        follow: [],
        follower: []
    }
    try {
        await db.collection("Users").add(newUser)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
    } catch (error) {
        console.log(error);
    }

    //
}

controller.signOut = async function () {
    firebase.auth().signOut();
}

controller.loadUserInfomation = async function () {
    //load dữ liệu từ firebase
    let currentEmail = firebase.auth().currentUser.email
    try {
        let result = await firebase.firestore()
            .collection('Users') //nơi lấy dữ liệu
            .where('email', "==", currentEmail) //Cấu trúc so sánh email
            .get() //Thực hiện
        let userData = refineData(result.docs[0])
        model.saveCurrentUserData(userData)
    } catch (error) {
        console.log(error)
    }
}

controller.changeBalance = async function (change) {
    let currentEmail = firebase.auth().currentUser.email
    let result = await firebase.firestore()
        .collection('Users') //nơi lấy dữ liệu
        .where('email', "==", currentEmail) //Cấu trúc so sánh email
        .get() //Thực hiện
    let id = result.docs[0].id
    console.log(id)
    let balanceAfterChange = model.currentUserData.balance + change;
    db.collection('Users').doc(id).update({
        balance: (balanceAfterChange)
    })
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    controller.loadUserInfomation()
}



//Xử lý notifications

controller.loadUserNotification = async function () {
    model.notifications = [];
    let currentEmail = firebase.auth().currentUser.email
    try {
        let result = await firebase.firestore()
            .collection(KEY_NOTI_COLLECTION) //nơi lấy dữ liệu
            .where('recivedEmail', "==", currentEmail) //Cấu trúc so sánh email
            .get() //Thực hiện
        for (let userNoti of result.docs) {
            model.saveNotification(userNoti)
        }
    } catch (error) {
        console.log(error)
    }
}

controller.sendNotification = async function (recivedEmail, content) {
    //Lấy thông tin
    //Tạo cơ sở dữ liệu
    let newNoti = {
        recivedEmail: recivedEmail,
        content: content,
        createAt: new Date().toLocaleString()
    }
    try {
        await db.collection("Notifications").add(newNoti)
            .then(function (docRef) {
                console.log("Sent to Notifications, written with ID: ", docRef.id);
            })
    } catch (error) {
        console.log(error);
    }

}

controller.deleteNotification = async function (id) {
    db.collection(KEY_NOTI_COLLECTION).doc(id).delete().then(async function () {
        await controller.loadUserNotification()
        view.showNotification("noti-list")
        view.showNotificationWarning("noti-warning")
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
};

//Xử lý pending Ideas

controller.loadPendingIdeas = async function () {
    model.pendingIdeas = []
    try {
        let result = await firebase.firestore()
            .collection(KEY_PENDINGIDEA_COLLECTION) //nơi lấy dữ liệu
            .get() //Thực hiện
        for (let pendingIdea of result.docs) {
            model.savePendingIdea(pendingIdea)
        }
    }
    catch (error) {
        console.log(error)
    }
}

controller.deletePendingIdeas = async function (id) {
    db.collection(KEY_PENDINGIDEA_COLLECTION).doc(id).delete().then(async function () {
        await controller.loadPendingIdeas()
        view.showPendingIdeas("pending-idea-list")
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
};

controller.acceptPendingIdeas = async function (id) {
    let newIdeaData = model.pendingIdeas[searchIdIndex(id, model.pendingIdeas)];
    newIdeaData.likes = [];
    try {
        await db.collection(KEY_IDEA_COLLECTION).add(newIdeaData)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
    } catch (error) {
        console.log(error);
    }
    //Gửi thông báo cho tất cả follower
    //Tìm kiếm id của fund đã viết bài
    let idOfAuthor = newIdeaData.author.id
    //Lấy dữ liệu follower list của fund đó
    let authorFollowerList = model.getFollowerListOfFundHaveID(idOfAuthor)
    //Tạo nội dung của notification
    let contentMes = `${newIdeaData.author.email} đã có bài viết mới: "${newIdeaData.title}". Click vào ĐÂY để xem bài viết`
    //Gửi thông báo đến toàn bộ danh sách này
    for (let follwerEmail of authorFollowerList) {
        await controller.sendNotification(follwerEmail, contentMes);
        console.log("Đã gửi xong thông báo cho tất cả follower");
    }
}

//Xử lý ideas
controller.addNewIdeasData = async function (idea) {
    let newIdea = {
        title: idea.title,
        content: idea.content,
        author: idea.author,
        createdAt: idea.createdAt,
        likes: []
    }
    try {
        await db.collection(KEY_IDEA_COLLECTION).add(newIdea)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
    } catch (error) {
        console.log(error);
    }
}

controller.loadIdeas = async function () {
    model.ideas = []
    try {
        let result = await firebase.firestore()
            .collection(KEY_IDEA_COLLECTION) //nơi lấy dữ liệu
            .get() //Thực hiện
        for (let idea of result.docs) {
            model.saveIdea(idea);
        }
    }
    catch (error) {
        console.log(error)
    }
    model.ideas.reverse();
}

//Xử lý like và dislike
controller.addLike = async function (id) {
    let currentEmail = firebase.auth().currentUser.email
    model.addLikeToIdeaHaveID(id, currentEmail)
    let ideaDocRef = db.collection(KEY_IDEA_COLLECTION).doc(id);
    ideaDocRef.update({
        likes: model.ideas[searchIdIndex(id, model.ideas)].likes
    })
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            console.error("Error updating document: ", error);
        });

}

controller.removeLike = async function (id) {
    let currentEmail = firebase.auth().currentUser.email
    model.removeLikeToIdeaHaveId(id, currentEmail)
    let ideaDocRef = db.collection(KEY_IDEA_COLLECTION).doc(id);
    ideaDocRef.update({
        likes: model.ideas[searchIdIndex(id, model.ideas)].likes
    })
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            console.error("Error updating document: ", error);
        });

}


controller.loadInfomationOfUserByEmail = async function (email) {
    //load dữ liệu từ firebase
    try {
        let result = await firebase.firestore()
            .collection('Users') //nơi lấy dữ liệu
            .where('email', "==", email) //Cấu trúc so sánh email
            .get() //Thực hiện
        let userData = refineData(result.docs[0])
        model.saveCurrentUserData(userData)
    } catch (error) {
        console.log(error)
    }
}

controller.changeInfomationUser = async function (data) {
    model.saveCurrentUserData(data)
    db.collection(KEY_USERS_COLLECTION).doc(data.id).update(data)
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        })
}


//Xử lý follow function
//a) Load dữ liệu về cache
controller.loadFundsInfomation = async function () {
    model.funds = [];
    try {
        let result = await firebase.firestore()
            .collection(KEY_USERS_COLLECTION) //nơi lấy dữ liệu
            .where('other.type', "==", "fund") //Cấu trúc so sánh email
            .get() //Thực hiện
        for (let fundInfo of result.docs) {
            model.saveFundInfomation(refineData(fundInfo))
        }

    } catch (error) {
        console.log(error)
    }
}
//b) follow Fund
controller.followFund = async function (id) {
    //I.Lấy thông tin hai email
    let currentEmail = firebase.auth().currentUser.email;
    let fundEmail = model.funds[searchIdIndex(id, model.funds)].email;
    if (currentEmail == fundEmail) console.log("Không thể tự follow chính mình")
    else {
        //II.Thực hiện lưu dữ liệu ở cache 
        //II.1. Thêm follower cho quỹ
        model.addFollowerToFundHaveID(id, currentEmail)
        //II.2. Thêm follow cho tài khoản hiện tại
        model.addFollowToCurrentUser(fundEmail)
        //III.Đẩy dữ liệu ở cache lên sever
        //III.1.Đẩy dữ liệu từ cache lên dữ liệu của Fund
        let fundsDocRef = db.collection(KEY_USERS_COLLECTION).doc(id);
        fundsDocRef.update({
            follower: model.funds[searchIdIndex(id, model.funds)].follower
        })
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
        controller.changeInfomationUser(model.currentUserData)
    }
}
//c) unfollow Fund
controller.unFollowFund = async function (id) {
    let currentEmail = firebase.auth().currentUser.email;
    let fundEmail = model.funds[searchIdIndex(id, model.funds)].email;
    if (currentEmail == fundEmail) console.log("Không thể tự unfollow chính mình")
    else {
        //II.Thực hiện lưu dữ liệu ở cache 
        //II.1. Loại bỏ follower trong cache quỹ
        model.removeFollowerToFundHaveID(id, currentEmail)
        //II.2. Loại bỏ follow cho tài khoản hiện tại
        model.removeFollowToCurrentUser(fundEmail)
        //III.Đẩy dữ liệu ở cache lên sever
        //III.1.Đẩy dữ liệu từ cache model.funds lên dữ liệu của Fund
        let fundsDocRef = db.collection(KEY_USERS_COLLECTION).doc(id);
        fundsDocRef.update({
            follower: model.funds[searchIdIndex(id, model.funds)].follower
        })
            .then(function () {
                console.log("Document successfully updated!");
            })
            .catch(function (error) {
                console.error("Error updating document: ", error);
            });
        //III.2.Đẩy dữ liệu từ cache model.currentUserData lên dữ liệu của Fund
        controller.changeInfomationUser(model.currentUserData)
    }
}


//Invest Function
//Form data request {email,initialMoney,}

controller.investReq = function (idFund, dataReq) {
    //Thực hiện lưu trữ ở cache
    model.saveInvestDataToFund(idFund, dataReq)
    model.saveInvestDataToUser(idFund, dataReq)
    //Đẩy dữ liệu lên sever data
    //a.Đẩy dữ liệu fund
    let targetFundData = model.funds[searchIdIndex(idFund, model.funds)]
    db.collection(KEY_USERS_COLLECTION).doc(idFund).update(targetFundData)
    .then(function () {
        console.log("Document successfully updated!");
    })
    .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    })
    //b.Đẩy dữ liệu user
    let userData=model.currentUserData
    db.collection(KEY_USERS_COLLECTION).doc(userData.id).update(userData)
        .then(function () {
            console.log("Document successfully updated!");
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        })
}

controller.withDrawFundReq = function (idFund, dataReq) {
    
}
