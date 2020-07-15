let db = firebase.firestore()

let controller = {};

controller.signUp = async function (name, email, password) {
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
        controller.CreateDataForNewAccount();
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

controller.CreateDataForNewAccount = async function () {
    //Lấy thông tin email và display name của user
    let currentEmail = firebase.auth().currentUser.email
    let currentName = firebase.auth().currentUser.displayName
    //Tạo cơ sở dự liệu mới cho người dùng mới
    let newUser = {
        name: currentName,
        email: currentEmail,
        balance: 0,
        createAt: new Date().toLocaleString()
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