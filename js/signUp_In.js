//xử lý form sign-in,up
let formSignIn = document.getElementById('signIn')
formSignIn.onsubmit = function(event) {
    event.preventDefault()
    let email = formSignIn.email.value
    let password = formSignIn.password.value

    let validateResult = [
        view.validate(email != '', 'signIn-email-erro', 'Input your email'),
        view.validate(password != '', 'signIn-password-erro', 'Input your password')
    ]
    if (isPassed(validateResult)) {
        //gửi dữ liệu
        controller.signIn(email, password)
    }
}


let formSignUp = document.getElementById('signUp')
formSignUp.onsubmit = function(even) {
    event.preventDefault() // chặn mặc định ko cho button reload lại trang
        //lấy dữ liệu từ form
    let name = formSignUp.name.value.trim()
    let email = formSignUp.email.value.trim()
    let password = formSignUp.password.value.trim()
    let passwordConfirmation = formSignUp.passwordConfirmation.value.trim()

    // kiểm tra  dữ liệu
    let validateResult = [
        view.validate(name != '', 'name-erro', 'Input your name'),
        view.validate(email != '' && validateEmail(email), 'email-erro', 'Input your email'),
        view.validate(password != '', 'password-erro', 'Input your password'),
        view.validate(passwordConfirmation != '' && password == passwordConfirmation, 'password-Confirmation-erro', 'password Confirmation is not match')
    ]

    console.log(validateResult)
    console.log(isPassed(validateResult))
        // gửi dữ liệu và lưu trong cơ sở dữ liệu
        //nếu dữ liệu thoả mãn --> gửi dữ liệu
    if (isPassed(validateResult)) {
        // gửi dữ liệu qua controller
        controller.signUp(name, email, password)
    }

}