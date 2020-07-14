let controller = {}

controller.signUp = async function(name, email, password) {
    //xí xoá thông báo lỗi và thành công ở quá trinhg sign up cũ
    // document.getElementById("sign-up-error").innerHTML = ""
    // document.getElementById("sign-up-success").innerHTML = ""
    view.setText('sign-up-error', '')
    view.setText('sign-up-success', '')
    view.setActive('sign-up-btn', false)
    try {
        //tạo tài khoản --> tự động đăng nhập --> currentUser
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            //thay đổi displayname
        await firebase.auth().currentUser.updateProfile({
                displayName: name
            })
            // xác thực tài khoản
        await firebase.auth().currentUser.sendEmailVerification()

        //thông báo đăng ký thành công
        view.setText('sign-up-success', 'an email verification has been sent')
    } catch (error) {
        // document.getElementById('sign-up-error').innerHTML = error.message
        view.setText('sign-up-error', error.message)
        view.setActive('sign-up-btn', true)
            // console.log('kết thúc việc đăng ký tài khoản')   
    }
}

controller.signIn = async function(email, password) {
    //xí xoá lỗi
    view.setText('sign-in-error', '')
    view.setActive('sign-in-btn', false)
        // signInWithEmailAndPassword(email, password)
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            // console.log('sign in successfully')
            //chuyển qua giao diện chat

        // view.showScreen('chat')
    } catch (error) {
        view.setText('sign-in-error', error.message)
    }

    view.setActive('sign-in-btn', true)
}