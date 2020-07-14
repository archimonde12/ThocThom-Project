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