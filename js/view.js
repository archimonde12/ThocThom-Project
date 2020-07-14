let view = {}

//Function dùng để hiển thị page theo <tên page>
view.showPage = async function(namePage){
    let content = document.getElementById('content')
    switch (namePage) {
        case 'signIn': 
            content.innerHTML=components.sign_in;
            view.MakeAllButtonSwitchPageWork();
            break;
        case 'signUp':
            content.innerHTML=components.sign_up;
            SetUpSignInSignUpPage();
            //Cho toàn bộ button chuyển trang hoạt động
            view.MakeAllButtonSwitchPageWork();
            //Xử lý form Sign Up
            let formSignUp=document.getElementById("signUp");
            formSignUp.onsubmit = function(event){
                //Đảm bảo trang không bị load lại
                event.preventDefault();
                //Lấy dữ liệu từ form
                let name = formSignUp.name.value.trim()
                let email = formSignUp.email.value.trim()
                let password = formSignUp.password.value.trim()
                let passwordConfirmation = formSignUp.passwordConfirmation.value.trim()
                //Kiểm tra dữ liệu lấy từ form
                let validateResult = [
                    view.validate(name != '', 'name-error', 'Input your name'),
                    view.validate(email != '' && validateEmail(email), 'email-error', 'Input your email'),
                    view.validate(password != '', 'password-error', 'Input your password'),
                    view.validate(passwordConfirmation != '' && password == passwordConfirmation, 'password-Confirmation-error', 'password Confirmation is not match')
                ]
                if(isPassed(validateResult)){
                    //Nếu pass gửi dữ liệu lên firebase qua controller
                    controller.signUp(name,email,password)
                }
            }

            //Xử lý form Sign In
            let formSignIn=document.getElementById("signIn");
            formSignIn.onsubmit = function(event){
                //Đảm bảo trang không bị load lại
                event.preventDefault();
                //Lấy dữ liệu từ form
                let email = formSignIn.email.value.trim()
                let password = formSignIn.password.value.trim()
                //Kiểm tra dữ liệu lấy từ form
                let validateResult = [
                    view.validate(email != '' && validateEmail(email), 'sign-in-email-error', 'Input your email'),
                    view.validate(password != '', 'sign-in-password-error', 'Input your password'),
                ]
                if(isPassed(validateResult)){
                    //Nếu pass gửi dữ liệu lên firebase qua controller
                    controller.signIn(email,password)
                }
            }
            break;
        case 'mainView':
            content.innerHTML=components.main_view;
            view.MakeAllButtonSwitchPageWork();
            break;
        case 'adminPage':
            content.innerHTML=components.admin_page;
            view.MakeAllButtonSwitchPageWork();
            break;
        case 'profilePage':
            content.innerHTML=components.profile_page;
            view.MakeAllButtonSwitchPageWork();
            break;
        case 'composePage':
            content.innerHTML=components.compose_page;
            view.MakeAllButtonSwitchPageWork();
            break;
        case 'ideaViewPage': 
            content.innerHTML=components.idea_view_page;
            view.MakeAllButtonSwitchPageWork();
            break;
        case 'depositPage':
            content.innerHTML=components.deposit_page;
            view.MakeAllButtonSwitchPageWork();
            break;
        case 'withdrawPage':
            content.innerHTML=components.withdraw_page;
            view.MakeAllButtonSwitchPageWork();
            break;
    }
}


//Function dùng để thêm chức năng cho các button để chuyển sang page cần thiết theo class
view.SetUpPageViewBtn=function(classBtn,namePage){ //input là <class> và <tên page> cần hiển thiển thị
    let allBtn=document.getElementsByClassName(classBtn);
    if(allBtn.length>0){
        for(let index=0;index<allBtn.length;index++){
            allBtn[index].onclick = function(){
                view.showPage(namePage)
            }
        }
    }
}

//Function setup toàn bộ button để chuyển trang

view.MakeAllButtonSwitchPageWork=function(){
    view.SetUpPageViewBtn("admin-page-btn","adminPage")
    view.SetUpPageViewBtn("compose-page-btn","composePage")
    view.SetUpPageViewBtn("deposit-page-btn","depositPage")
    view.SetUpPageViewBtn("idea-view-page-btn","ideaViewPage")
    view.SetUpPageViewBtn("main-view-btn","mainView")
    view.SetUpPageViewBtn("profile-page-btn","profilePage")
    view.SetUpPageViewBtn("sign-in-btn","signIn")
    view.SetUpPageViewBtn("sign-up-btn","signUp")
    view.SetUpPageViewBtn("withdraw-page-btn","withdrawPage")
   
}
// Kiểm tra để báo lỗi
view.validate = function(condition, errortag, message) {
    if (!condition) {
        // document.getElementById(errortag).innerHTML = message
        view.setText(errortag, message)
        return false
    } else {
        // document.getElementById(errortag).innerHTML = ''
        view.setText(errortag, '')
        return true
    }
}

view.setText = function(tagId, text) {
    document.getElementById(tagId).innerHTML = text
}

view.setActive = function(tagId, active) {
    document.getElementById(tagId).disabled = !active
}
