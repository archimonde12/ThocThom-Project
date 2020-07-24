let view = {}

//Function dùng để hiển thị page theo <tên page>
view.showPage = async function(namePage) {
    let content = document.getElementById('content')
    switch (namePage) {
        case 'signIn':
            content.innerHTML = components.sign_in;
            view.MakeAllButtonSwitchPageWork();
            let formSignIn = document.getElementById("signIn");
            formSignIn.onsubmit = function(event) {
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
                if (isPassed(validateResult)) {
                    //Nếu pass gửi dữ liệu lên firebase qua controller
                    controller.signIn(email, password)
                }
            }
            break;
        case 'signUp':
            content.innerHTML = components.sign_up;
            SetUpSignInSignUpPage();
            //Cho toàn bộ button chuyển trang hoạt động
            view.MakeAllButtonSwitchPageWork();
            //Xử lý form Sign Up
            let formSignUp = document.getElementById("signUp");
            formSignUp.onsubmit = function(event) {
                //Đảm bảo trang không bị load lại
                event.preventDefault();
                //Lấy dữ liệu từ form
                let name = formSignUp.name.value.trim()
                let email = formSignUp.email.value.trim()
                let password = formSignUp.password.value.trim()
                let passwordConfirmation = formSignUp.passwordConfirmation.value.trim()
                let typeOfAccount = formSignUp.typeOfAccount.value;
                //Kiểm tra dữ liệu lấy từ form
                let validateResult = [
                    view.validate(name != '', 'name-error', 'Input your name'),
                    view.validate(email != '' && validateEmail(email), 'email-error', 'Input your email'),
                    view.validate(password != '', 'password-error', 'Input your password'),
                    view.validate(passwordConfirmation != '' && password == passwordConfirmation, 'password-Confirmation-error', 'password Confirmation is not match')
                ]
                if (isPassed(validateResult)) {
                    //Nếu pass gửi dữ liệu lên firebase qua controller
                    controller.signUp(name, email, password, typeOfAccount)
                }
            }

            break;
        case 'mainView':
            content.innerHTML = components.main_view;

            let signOutButton = document.getElementById("sign-out-button")
            signOutButton.onclick = function() {
                controller.signOut();
            }


            //Lấy dữ liệu notification
            await controller.loadUserInfomation(); //load all information of users
            view.showInfo();

            await controller.loadUserNotification(); //Load all notification of current users
            await controller.loadIdeas() //Load all ideas
                //Show info
            view.showNotificationWarning("noti-warning");
            view.ideaFilter();
            //Xử lý search button
            let search = document.getElementById('ideas-search')
            let submit = document.getElementById('ideas-submit')
            let searchFor = document.getElementById('ideas-search-for')

            submit.addEventListener('click', async function() {
                if (searchFor.value == "Tên tác giả") {
                    await controller.loadIdeas()
                    view.ideaSearch("author")
                } else {
                    await controller.loadIdeas()
                    view.ideaSearch("title")
                }
            })

            search.addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    document.getElementById("submit").click();
                }
            });

            //Xử lý filter
            let ideaFilter = document.getElementById("ideas-filter")
            ideaFilter.onchange = function() {
                view.ideaFilter();
                console.log("filter change")
            }

            //Làm các button hoạt động
            view.MakeAllButtonSwitchPageWork();

            let showNotiBtn = document.getElementById("show-noti-btn")
            showNotiBtn.onclick = function() {
                view.showNotification("noti-list")
            }
            let hideNotiBtn = document.getElementById("hide-noti-btn")
            hideNotiBtn.onclick = function() {
                view.setText("noti-list", "")
            }

            let showInfoPageBtn = document.getElementById("my-infomation-btn")
            if (showInfoPageBtn == null) { console.log("showInfoPageBtn=null!!!") } else {
                showInfoPageBtn.onclick = function() {
                    view.showPage('profilePage')
                    view.showMyProfile();
                }
            }
            break;
        case 'adminPage':
            content.innerHTML = components.admin_page;
            view.MakeAllButtonSwitchPageWork();

            await controller.loadPendingIdeas();
            view.showPendingIdeas("pending-idea-list");
            break;
        case 'profilePage':
            content.innerHTML = components.profile_page;
            view.MakeAllButtonSwitchPageWork();
            break;
        case 'composePage':
            content.innerHTML = components.compose_page;
            view.MakeAllButtonSwitchPageWork();
            //Xử lý form Compose
            let formCompose = document.getElementById("compose");
            formCompose.onsubmit = function(event) {
                //Đảm bảo trang không bị load lại
                event.preventDefault();
                //Lấy dữ liệu từ form
                let title = formCompose.title.value.trim()
                let content = formCompose.content.value.trim()

                //Kiểm tra dữ liệu lấy từ form
                let validateResult = [
                    view.validate(title != '', 'compose-title-error', 'Input title'),
                    view.validate(content != '', 'compose-content-error', 'Input content'),
                ]
                if (isPassed(validateResult)) {
                    //Nếu pass gửi dữ liệu lên firebase qua controller
                    controller.Compose(title, content)
                }
            }
            break;
        case 'ideaViewPage':
            content.innerHTML = components.idea_view_page;
            view.MakeAllButtonSwitchPageWork();
            break;
        case 'depositPage':
            content.innerHTML = components.deposit_page;
            view.MakeAllButtonSwitchPageWork();
            //Xử lý form
            let formDeposit = document.getElementById("deposit-form");

            formDeposit.onsubmit = async function(event) {
                event.preventDefault();
                //Lấy lượng muốn nạp
                let depositAmount = Number(formDeposit.depositAmount.value);
                console.log("Bạn đang muốn nạp: " + depositAmount);
                //Kiểm tra điều kiện (Điều kiện >0)
                let validateResult = [
                    view.validate(depositAmount > 0, 'deposit-amount-error', 'deposit amount must be greater than 0'),
                ]

                //Thực hiện thay đổi
                if (isPassed(validateResult)) {
                    await controller.changeBalance(depositAmount);
                    console.log("Nạp thành công!");
                }
            }
            break;
        case 'withdrawPage':
            content.innerHTML = components.withdraw_page;
            view.MakeAllButtonSwitchPageWork();
            //Xử lý form
            let formWithdraw = document.getElementById("withdraw-form");

            formWithdraw.onsubmit = async function(event) {
                event.preventDefault();
                //Lấy lượng muốn nạp
                let withdrawAmount = Number(formWithdraw.withdrawAmount.value)
                console.log("Bạn đang muốn rút: " + withdrawAmount)
                    //Kiểm tra điều kiện (Điều kiện nhỏ hơn balance hiện tại và lớn hơn 0 )
                let validateResult = [
                        view.validate(
                            withdrawAmount <= model.currentUserData.balance && withdrawAmount > 0,
                            'withdraw-amount-error',
                            'withdraw amount must be GREATER than 0 and lesser than balance'
                        )
                    ]
                    //Thực hiện thay đổi
                if (isPassed(validateResult)) {
                    await controller.changeBalance(-withdrawAmount)
                    console.log("Rút thành công!")
                }
            }
            break;
    }
}

//Function dùng để thêm chức năng cho các button để chuyển sang page cần thiết theo class
view.SetUpPageViewBtn = function(classBtn, namePage) { //input là <class> và <tên page> cần hiển thiển thị
    let allBtn = document.getElementsByClassName(classBtn);
    if (allBtn.length > 0) {
        for (let index = 0; index < allBtn.length; index++) {
            allBtn[index].onclick = function() {
                view.showPage(namePage)
            }
        }
    }
}

//Function setup toàn bộ button để chuyển trang

view.MakeAllButtonSwitchPageWork = function() {
        view.SetUpPageViewBtn("admin-page-btn", "adminPage")
        view.SetUpPageViewBtn("compose-page-btn", "composePage")
        view.SetUpPageViewBtn("deposit-page-btn", "depositPage")
        view.SetUpPageViewBtn("idea-view-page-btn", "ideaViewPage")
        view.SetUpPageViewBtn("main-view-btn", "mainView")
        view.SetUpPageViewBtn("profile-page-btn", "profilePage")
        view.SetUpPageViewBtn("sign-in-btn", "signIn")
        view.SetUpPageViewBtn("sign-up-btn", "signUp")
        view.SetUpPageViewBtn("withdraw-page-btn", "withdrawPage")

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
    if (document.getElementById(tagId) == null) return;
    document.getElementById(tagId).innerHTML = text
}

view.setActive = function(tagId, active) {
    if (document.getElementById(tagId) == null) return;
    document.getElementById(tagId).disabled = !active
}

view.showInfo = function() {
    //Show name
    let currentUserName = model.currentUserData.name; // Lỗi không hiển thị ngay khi tạo tài khoản
    let userNameDisplay = document.getElementById("user-name");
    userNameDisplay.innerHTML = currentUserName;

    //Show balance
    let currentUserBalance = model.currentUserData.balance;
    let userBalanceDisplay = document.getElementById("user-balance");
    userBalanceDisplay.innerHTML = formatter.format(currentUserBalance);

    //Show type of account
    let currentUserType = (model.currentUserData.other.type == "member") ? "Thành Viên" : (model.currentUserData.other.type == "fund") ? "Quỹ" : "Admin";
    let userTypeDisplay = document.getElementById("user-type");
    userTypeDisplay.innerHTML = currentUserType
        //Show compose button
    let isFundAccount = (model.currentUserData.other.type == "fund")
    if (true) {
        let composeBtnHtml = ` 
        <div class="magazine-sb-categories margin-bottom-5 fullWidth">
            <a class="btn btn-outline-secondary trade compose-page-btn">
                <i class='fas fa-edit'></i>Đăng Bài
            </a>
        </div>`
        let composeBtn = document.getElementById("compose-btn-wapper")
        composeBtn.innerHTML = composeBtnHtml
    }
    let isAdminAccount = (model.currentUserData.other.type == "admin")
    if (true) {
        let composeBtnHtml = `
        <div class="magazine-sb-categories margin-bottom-5 fullWidth">
            <a class="btn btn-outline-secondary trade admin-page-btn">
                <i class='fas fa-edit'></i>Duyệt Bài
            </a>
        </div>
        `
        let composeBtn = document.getElementById("admin-page-btn-wapper")
        composeBtn.innerHTML = composeBtnHtml
    }
    if (!model.currentUserData.other.avatarURL) {
        view.showImg("user-avatar", "https://firebasestorage.googleapis.com/v0/b/thocthom-project.appspot.com/o/img%2FDefaut%2Fdefault-avatar.png?alt=media&token=55eec6a1-cb2f-4d0d-9bd2-564ef8b45eec")
    } else { view.showImg("user-avatar", model.currentUserData.other.avatarURL) }
}

view.showNotification = function(tagID) {
    document.getElementById(tagID).innerHTML = ""
    for (let noti of model.notifications) {
        document.getElementById(tagID).innerHTML += `<div style="display: flex; justify-content: space-between;" ><div><p>${noti.createdAt} : ${noti.content}</p></div> <div><button name="${noti.id}" class="delete-noti"> Xóa </button></div></div>`
        let allDeleteNotiBtn = document.getElementsByClassName("delete-noti")
            //Làm nút Xóa hoạt động
        for (let deleteNotiBtn of allDeleteNotiBtn) {
            deleteNotiBtn.onclick = function() { controller.deleteNotification(this.name) }
        }
    }

}


view.showNotificationWarning = function(tagID) {
    document.getElementById(tagID).innerHTML = "(" + model.notifications.length.toString() + ")"
}

view.showIdeas = function(tagID) {
    let ideaIDs = [];
    try {
        //Khởi động
        document.getElementById(tagID).innerHTML = ""
            //Chèn ideas HTML vào
        for (let idea of model.ideas) {
            //chuẩn bị code của button like và dislike
            let likeButton = ` <button name="${idea.id}" id="${idea.id + "-like-btn"}" class="like-btn">Like</button>`
            let dislikeButton = `<button name="${idea.id}" id="${idea.id + "-dislike-btn"}" class="dislike-btn">Dislike</button>`
                //chèn ideas
            document.getElementById(tagID).innerHTML += `
            <div class="col-md-4">
            <a href=""></a>
                    <h2>Title: ${idea.title}</h2> 
                    <p>Content: ${idea.content}</p> 
                    <p>Author: ${idea.author.name}
                    <p>Created At: ${idea.createdAt} </p>
                    <p>Likes: ${(idea.likes != undefined) ? idea.likes.length : 0}
                    <br>
                    <button name="${idea.id}" id="${idea.id + "-see-more-btn"}" class="see-more-idea-btn"> Xem thêm </button>
                    ${idea.likes.includes(firebase.auth().currentUser.email) ? dislikeButton : likeButton}
                    </div>`
            ideaIDs.push(idea.id)
        }
        //Làm tất cả button trong ideas hoạt động
        for (let ideaID of ideaIDs) {
            let seeMoreIdeaBtn = document.getElementById(ideaID + "-see-more-btn")
            let likeBtn = document.getElementById(ideaID + "-like-btn")
            let dislikeBtn = document.getElementById(ideaID + "-dislike-btn")
            seeMoreIdeaBtn.onclick = function() { view.showPage("ideaViewPage"); }
            if (likeBtn != null) {
                likeBtn.onclick = async function() {
                    controller.addLike(this.name)
                        // await controller.loadIdeas()
                    view.showIdeas("idea-list") //Thực hiện refresh trang
                }
            }
            if (dislikeBtn != null) {
                dislikeBtn.onclick = async function() {
                    controller.removeLike(this.name)
                        // await controller.loadIdeas()
                    view.showIdeas("idea-list") //Thực hiện refresh trang
                }
            }
        }
    } catch (error) {
        console.log(error)
    }
}

view.showPendingIdeas = function(tagID) {
    try {
        document.getElementById(tagID).innerHTML = ""
        for (let pendingIdea of model.pendingIdeas) {
            document.getElementById(tagID).innerHTML += `
                    <p>Title: ${pendingIdea.title}</p> 
                    <p>Content: ${pendingIdea.content}</p> 
                    <p>Author: ${pendingIdea.author.name}
                    <p>Created At: ${pendingIdea.createdAt} </p>
                    <br>
                    <button name="${pendingIdea.id}" class="accept-pending-idea"> Duyệt! </button>
                    <button name="${pendingIdea.id}" class="delete-pending-idea"> Bố láo  </button>`
                //Làm nút Hủy và Chấp Nhận hoạt động
            let allAcceptPendingIdeaBtn = document.getElementsByClassName("accept-pending-idea")
            let allDeletePendingIdeaBtn = document.getElementsByClassName("delete-pending-idea")

            for (let acceptPendingIdeaBtn of allAcceptPendingIdeaBtn) {
                acceptPendingIdeaBtn.onclick = async function() {
                    this.setActive = false;
                    let authorEmail = model.pendingIdeas[searchIdIndex(this.name, model.pendingIdeas)].author.email
                    await controller.acceptPendingIdeas(this.name);
                    await controller.deletePendingIdeas(this.name);
                    await controller.sendNotification(authorEmail, "Bài viết của bạn đã được admin chấp thuận!")
                }
            }

            for (let deletePendingIdeaBtn of allDeletePendingIdeaBtn) {
                deletePendingIdeaBtn.onclick = async function() {
                    this.setActive = false;
                    let authorEmail = model.pendingIdeas[searchIdIndex(this.name, model.pendingIdeas)].author.email
                    await controller.deletePendingIdeas(this.name);
                    await controller.sendNotification(authorEmail, "Bài viết của bạn đã bị được admin từ chối!")
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}

view.showMyProfile = async function() {
    //Lấy thông tin của current User
    document.getElementById("profile-content").innerHTML = `Đây là profile của ${model.currentUserData.email}`
    await controller.loadInfomationOfUserByEmail(model.currentUserData.email)
        //Hiển thị thông tin
    document.getElementById("profile-content").innerHTML += ``
}

view.showImg = function(tagID, imgURL) {
    document.getElementById(tagID).src = imgURL;
}

view.ideaFilter = function() {
    let filter = document.getElementById('ideas-filter')
    if (filter.value == 'Lượt like nhiều nhất') {
        model.ideas.sort(function(a, b) { return b.likes.length - a.likes.length })
        view.showIdeas("idea-list", model.ideas)
    } else if (filter.value == 'Mới nhất') {
        model.ideas.sort(function(a, b) { return new Date(b.createdAt) - new Date(a.createdAt) })
        view.showIdeas("idea-list", model.ideas)
    }
}

view.ideaSearch = function(searchWay) {
    let data = model.ideas
    let filterdata = []
    let search = document.getElementById("ideas-search")
    switch (searchWay) {
        case "title":
            for (i = 0; i < data.length; i++) {
                let newTitle = removeAccents(data[i].title.toLowerCase())
                let newSearchValue = removeAccents(search.value.toLowerCase().trim())
                if (newTitle.search(newSearchValue) != -1) {
                    filterdata.push(data[i])
                }
            }
            break
        case "author":
            for (i = 0; i < data.length; i++) {
                let newTitle = removeAccents(data[i].author.name.toLowerCase())
                let newSearchValue = removeAccents(search.value.toLowerCase().trim())
                if (newTitle.search(newSearchValue) != -1) {
                    filterdata.push(data[i])
                }
            }
    }
    view.showIdeas("idea-list", filterdata);
    model.ideas = filterdata;
}

//Hiển thị của Follow Function

view.showFollowerListOfFundHaveID = function(id) {
    //Nhận toàn bộ follwer list của
    let followerLists = document.querySelectorAll(`.${id}-follower-list`)
    for (let followerList of followerLists) {
        if (model.getFollowerListOfFundHaveID(id) == []) {
            followerList.innerHTML = "Chưa theo dõi ai cả"
        } else {
            followerList.innerHTML = model.getFollowerListOfFundHaveID(id)
        }
    }
}

view.showUserFollowList = function() {
    let UserfollowListDOMs = document.querySelectorAll(".user-follow-list")
    for (let UserfollowListDOM of UserfollowListDOMs) {
        if (model.getFollowListOfCurrentUser() == []) {
            UserfollowListDOM.innerHTML = "Chưa theo dõi ai cả"
        } else {
            UserfollowListDOM.innerHTML = model.getFollowListOfCurrentUser()
        }
    }
}

view.showFollowersNumberOfFundHaveID = function(id) {
    let followersNumbers = document.querySelectorAll(`.${id}-followers-number`)
    for (let followersNumber of followersNumbers) {
        followersNumber.innerHTML = model.getFollowerListOfFundHaveID(id).length
    }
}

view.makeFollowAndUnfollowBtnWork = function() {
    //Quy định mỗi button sẽ có một name là id của Fund
    let allFollowBtn = document.querySelectorAll(".follow-btn")
    let allUnFollowBtn = document.querySelectorAll(".unfollow-btn")

    for (let followBtn of allFollowBtn) {
        followBtn.onclick = async function() {
            this.disabled = true;
            await controller.followFund(this.name)
            this.disabled = false;
        }
    }
    for (let unfollowBtn of allUnFollowBtn) {
        unfollowBtn.onclick = async function() {
            this.disabled = true;
            await controller.unFollowFund(this.name)
            this.disabled = false;
        }
    }
}