let view = {}

//Function dùng để hiển thị page theo <tên page>
view.showPage = async function (namePage) {
    let content = document.getElementById('content')
    switch (namePage) {
        case 'signIn':
            content.innerHTML = components.sign_in_hung;
            view.MakeAllButtonSwitchPageWork();
            let formSignIn = document.getElementById("signIn");
            formSignIn.onsubmit = function (event) {
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
            content.innerHTML = components.sign_up_hung;
            //Cho toàn bộ button chuyển trang hoạt động
            view.MakeAllButtonSwitchPageWork();
            //Xử lý form Sign Up
            let formSignUp = document.getElementById("signUp");
            formSignUp.onsubmit = function (event) {
                //Đảm bảo trang không bị load lại
                event.preventDefault();
                //Lấy dữ liệu từ form
                let name = formSignUp.name.value.trim()
                let email = formSignUp.email.value.trim()
                let password = formSignUp.password.value.trim()
                let passwordConfirmation = formSignUp.passwordConfirmation.value.trim()
                let typeOfAccount = formSignUp.typeOfAccount.value;
                let phoneNumberData = formSignUp.phoneNumber.value.trim();
                let addressData = formSignUp.address.value.trim();
                //Kiểm tra dữ liệu lấy từ form
                let validateResult = [
                    view.validate(name != '', 'name-error', 'Input your name'),
                    view.validate(email != '' && validateEmail(email), 'email-error', 'Input your email'),
                    view.validate(password != '', 'password-error', 'Input your password'),
                    view.validate(passwordConfirmation != '' && password == passwordConfirmation, 'password-Confirmation-error', 'password Confirmation is not match')
                ]
                if (isPassed(validateResult)) {
                    //Nếu pass gửi dữ liệu lên firebase qua controller
                    controller.signUp(name, email, password, typeOfAccount, phoneNumberData, addressData)
                }
            }

            break;
        case 'mainView':
            content.innerHTML = components.main_view;

            document.getElementById("sign-out-button").onclick = function () {
                controller.signOut();
            }


            //Lấy dữ liệu notification
            await controller.loadUserInfomation(); //load all information of users
            view.showInfo();

            await controller.loadUserNotification(); //Load all notification of current users
            await controller.loadIdeas() //Load all ideas
            await controller.loadNews() //Load all ideas
            //Show info
            view.showNotificationWarning("noti-warning");
            //Show Idea
            view.ideaFilter();
            //Show News (Hiển thị tin tức)
            view.showNews("news-list")
            //Xử lý search button
            let search = document.getElementById('ideas-search')
            let submit = document.getElementById('ideas-submit')

            submit.addEventListener('click', async function () {
                await controller.loadIdeas()
                view.ideaSearch("title")
            })

            search.addEventListener("keyup", function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    document.getElementById("submit").click();
                }
            });

            //Xử lý filter
            let dateFilterBtn = document.getElementById("date-filter-btn")
            let likeFilterBtn = document.getElementById("like-filter-btn")
            dateFilterBtn.onclick = function () {

                document.getElementById("date-filter").checked = true;
                document.getElementById("like-filter").checked = false;
                view.ideaFilter();
                console.log("filter change")
                view.setActive("like-filter-btn", true)
                view.setActive("date-filter-btn", false)
            }
            likeFilterBtn.onclick = function () {

                document.getElementById("date-filter").checked = false;
                document.getElementById("like-filter").checked = true;
                view.ideaFilter();
                console.log("filter change")
                view.setActive("like-filter-btn", false)
                view.setActive("date-filter-btn", true)
            }

            //Làm các button hoạt động
            view.MakeAllButtonSwitchPageWork();

            let showNotiBtn = document.getElementById("show-noti-btn")
            showNotiBtn.onclick = function () {
                view.showNotification("noti-list")
            }
            let hideNotiBtn = document.getElementById("hide-noti-btn")
            hideNotiBtn.onclick = function () {
                view.setText("noti-list", "")
            }

            break;
        case 'adminPage':
            content.innerHTML = components.admin_page;
            view.MakeAllButtonSwitchPageWork();

            await controller.loadPendingIdeas();
            await controller.loadFundsInfomation();
            view.showPendingIdeas("pending-idea-list");
            break;
        case 'profilePage':
            
            content.innerHTML = components.profile_page;
            
            document.getElementById("sign-out-button").onclick = function () {
                controller.signOut();
            }
            view.MakeAllButtonSwitchPageWork();
            break;
        case 'composePage':
            content.innerHTML = components.compose_page;
            view.MakeAllButtonSwitchPageWork();
            //Xử lý form Compose
            let formCompose = document.getElementById("compose");
            formCompose.onsubmit = function (event) {
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
            let titleIdea = document.getElementById("title-idea-page");
            let contentIdea = document.getElementById("content-idea-page");
            let detailsIdea = document.getElementById("details-idea-page");

            titleIdea.innerHTML = model.ideaData.title;
            contentIdea.innerHTML = model.ideaData.content;
            detailsIdea.innerHTML = `
            Theo <span class="author"> ${model.ideaData.author.name} </span> 
            - ${calculateTimeToNow(new Date(model.ideaData.createdAt))} 
            - <span >
                <i class="fa fa-thumbs-up" style="bottom:-20px"></i> 
                ${(model.ideaData.likes != undefined) ? model.ideaData.likes.length : 0}
            </span>
            `
            break;
        case 'depositPage':
            
            content.innerHTML = components.deposit_page;
            document.getElementById("sign-out-button").onclick = function () {
                controller.signOut();
            }
            view.MakeAllButtonSwitchPageWork();
            //Xử lý form
            let formDeposit = document.getElementById("deposit-form");

            formDeposit.onsubmit = async function (event) {
                event.preventDefault();
                //Lấy lượng muốn nạp
                let depositAmount = Number(formDeposit.depositAmount.value);
                console.log("Bạn đang muốn nạp: " + depositAmount);
                //Kiểm tra điều kiện (Điều kiện >0)
                let validateResult = [
                    view.validate(depositAmount > 0, 'deposit-amount-error', 'Lỗi: Số tiền muốn nạp phải lớn hơn 0!'),
                ]

                //Thực hiện thay đổi
                if (isPassed(validateResult)) {
                    view.setActive("deposit-apply-btn", false)
                    await controller.changeBalance(depositAmount);
                    view.setActive("deposit-apply-btn", true)
                    document.getElementById("depositAmount").value = 0;
                }
            }
            break;
        case 'withdrawPage':
            content.innerHTML = components.withdraw_page;
            document.getElementById("sign-out-button").onclick = function () {
                controller.signOut();
            }
            view.MakeAllButtonSwitchPageWork();
            //Xử lý form
            let formWithdraw = document.getElementById("withdraw-form");

            formWithdraw.onsubmit = async function (event) {
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
view.SetUpPageViewBtn = async function (classBtn, namePage) { //input là <class> và <tên page> cần hiển thiển thị
    let allBtn = document.getElementsByClassName(classBtn);
    if (allBtn.length > 0) {
        for (let index = 0; index < allBtn.length; index++) {
            allBtn[index].onclick = async function () {
                await view.showPage(namePage)
                if (namePage == "profilePage") { view.showProfile(model.currentUserData.email) }
            }
        }
    }
}

//Function setup toàn bộ button để chuyển trang

view.MakeAllButtonSwitchPageWork = function () {
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
view.validate = function (condition, errortag, message) {
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

view.setText = function (tagId, text) {
    if (document.getElementById(tagId) == null) return;
    document.getElementById(tagId).innerHTML = text
}

view.setActive = function (tagId, active) {
    if (document.getElementById(tagId) == null) return;
    document.getElementById(tagId).disabled = !active
}

view.showInfo = function () {
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
    let isAdminAccount = (model.currentUserData.other.type == "admin")
    if (isFundAccount || isAdminAccount) {
        let composeBtnHtml = ` 
        <div id="showForm" class="magazine-sb-categories margin-bottom-5 fullWidth">
            <a class="btn btn-outline-secondary trade">
                <i class='fas fa-edit'></i>Đăng Bài
            </a>
        </div>
        `
        let composeFormHtml = `
        <div class="fixed-top compose-form-container" id='newIdea'>
        <div class="compose-controller" id="buttonClose"><button>X</button></div>
        <form id="compose">
            <div class="d-flex bd-highlight">
                <div class="p-2 flex-shrink-1 bd-highlight input-image">
                    <img id="photo-upload" class="image-idea">
                    <input type="file" id="fileButton" name="">
                    <progress id="progressBar" value="0" max="100" style="width:300px;" hidden=true></progress>
                    <span class="message-error" id="compose-img-error"></span>
                </div>

                <div class="p-2 w-100 bd-highlight">
                    <div style="font-weight: bold; ">THÊM DỰ ĐOÁN MỚI</div>
                    <div class="input-wrapper">
                        <div style="width: 100%;">
                            <input style="width: 100%;border: 1px solid #2b579a;font-size:larger; font-weight: bold;"
                                name="title" type="text" placeholder="Tiêu đề dự đoán" autocomplete='off' reqired />
                        </div>
                    </div>
                    <span class="message-error" id="compose-title-error"></span>
                    <!-- Content Input -->
                    <div>
                        <div>
                            <label style="font-weight: bold;" for="content">Nội dung</label>
                        </div>
                        <div id="editor">

                        </div>
                        <span class="message-error" id="compose-content-error"></span>
                    </div>
                    <span class="content-error" id="compose-content-error"></span>
                </div>
                <div class="p-2 flex-shrink-1 bd-highlight" style="font-size: smaller; width: 400px;">
                    <div style="background-color:white; padding: 5px; border-radius: 5px; margin-top: 45px;">
                        <h4>TÓM TẮT</h4>
                        <div style="display: flex; justify-content: space-between;">
                            <label for="">Loại:</label>
                            <select name="product" id="" style="height: 25px; width: 100px;">
                                <option value="gold">Vàng</option>
                                <option value="crypto">Tiền điện tử</option>
                                <option value="forex">Ngoại hối</option>
                                <option value="stock">Chứng khoán</option>
                            </select>
                            
                        </div>
                        <div style="display: flex; justify-content: space-between;margin-top: 10px;">
                            <label for="nameProduct">Tên sản phẩm:</label>
                            <input name="nameProduct" style="height: 25px; width:100px" type="text">
                            <span class="message-error" id="compose-name-product-error"></span>
                        </div>
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                <label>Tăng hay giảm:</label>
                                <select name="priceDirection" id="" style="height: 25px; width: 70px;">
                                    <option value="Up">Tăng</option>
                                    <option value="Down">Giảm</option>
                                </select>
                                <span class="message-error" id="compose-price-predict-error"></span>
                            </div>
                            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                                <label for="pricePredict">Giá dự đoán:</label>
                                <input name="pricePredict" style="width: 100px; height: 25px;" type="number">
                            </div>
                        </div>
                        <div style="margin-top: 10px;">
                            <label for="timePredict">Thời điểm:</label>
                            <input name="timePredict" style="height: 25px;" type="date">
                            <span class="message-error" id="compose-time-error"></span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: flex-end;">
                        <button class="compose-btn" type="submit">Đăng bài</button>
                    </div>
                    <div class="message-error" id="compose-error"></div>
                    <div class="message-success" id="compose-success"></div>
                </div>
            </div>
        </form>
    </div>
        `
        let composeBtn = document.getElementById("compose-btn-wapper");
        composeBtn.innerHTML = composeBtnHtml + composeFormHtml;
        //Make compose form work
        composeJS()

        //Process upload file
        initApp() //Make progress bar work when data change
        let formCompose = document.getElementById("compose");
        formCompose.onsubmit = function (event) {
            //Đảm bảo trang không bị load lại
            event.preventDefault();
            //Lấy dữ liệu từ form
            let title = formCompose.title.value.trim()
            let contentIframe = document.getElementsByTagName("iframe")[0]
            let content = contentIframe.contentDocument.getElementsByClassName("cke_editable")[0].innerHTML
            let product = formCompose.product.value
            let nameProduct = formCompose.nameProduct.value
            let priceDirection = formCompose.priceDirection.value
            let pricePredict = formCompose.pricePredict.value
            let timePredict = formCompose.timePredict.value
            let imgURL = model.imgURL
            //Test
            console.log("===COMPOSE FORM TEST===")
            console.log("TITLE=" + title)
            console.log("CONTENT=" + content)
            console.log("PRODUCT=" + product)
            console.log("NAMEPRODUCT=" + nameProduct)
            console.log("PRICEDIRECTION=" + priceDirection)
            console.log("PRICEPREDICT=" + pricePredict)
            console.log("TIMEPREDICT=" + timePredict)
            console.log("LINKIMAGE=" + imgURL)
            console.log("===END===")
            //Kiểm tra dữ liệu lấy từ form
            let validateResult = [
                view.validate(title != '', 'compose-title-error', 'Lỗi: Vui lòng điền tiêu đề'),
                view.validate(content != '', 'compose-content-error', 'Lỗi: Vui lòng điền nội dụng'),
                view.validate(pricePredict != '', 'compose-price-predict-error', 'Lỗi: Giá đoán để trống'),
                view.validate(nameProduct != '', 'compose-name-product-error', 'Lỗi: Tên sản phẩm để trống'),
                view.validate(timePredict != '', 'compose-time-error', 'Lỗi: Ngày dự đoán để trống'),
                view.validate(imgURL != '', 'compose-img-error', 'Lỗi: Không có ảnh')
            ]

            if (isPassed(validateResult)) {
                //Nếu pass gửi dữ liệu lên firebase qua controller
                controller.Compose(title, content, product, nameProduct, priceDirection, pricePredict, timePredict, imgURL)
            }
        }
    }

    if (isAdminAccount) {
        //Khởi tạo html của nút Duyệt Bài
        let browseBtnHtml = `
        <div class="magazine-sb-categories margin-bottom-5 fullWidth">
            <a class="btn btn-outline-secondary trade admin-page-btn">
            <i class="fas fa-clipboard-check"></i> Duyệt Bài
            </a>
        </div>
        `
        //Chèn vào HTML
        let browseBtn = document.getElementById("admin-page-btn-wapper")
        browseBtn.innerHTML = browseBtnHtml

        //Khởi tạo html của nút showNewsForm
        let newsComposeBtnHtml = ` 
        <div id="showNewsForm" class="magazine-sb-categories margin-bottom-5 fullWidth">
            <a class="btn btn-outline-secondary trade">
                <i class='fa fa-newspaper-o'></i>Đăng Tin
            </a>
        </div>
        `
        let newsComposeFormHtml = `
        <div class="fixed-top compose-form-container" id='newsComposeForm'>
        <div class="compose-controller" id="newsFormBtnClose"><button>X</button></div>
        <form id="news-compose">
            <div class="d-flex bd-highlight">
                <div class="p-2 w-100 bd-highlight">
                    <div style="font-weight: bold; ">ĐĂNG TIN TỨC MỚI</div>
                    <!-- Tittle Input -->
                    <div>
                        <div>
                            <label style="font-weight: bold;" for="content">Tiêu đề</label>
                        </div>
                        <div style="width: 100%;">
                            <input style="width: 70%;font-size:larger; font-weight: bold;"
                                name="title" type="text" placeholder="Tiêu đề tin..." autocomplete='off' reqired />
                        </div>
                        <span class="message-error" id="news-compose-title-error"></span>
                    </div>
                    <!-- Content Input -->
                    <div>
                        <div>
                            <label style="font-weight: bold;margin-top:20px;" for="content">Nội dung</label>
                        </div>
                        <div>
                            <textarea name="content" placeholder="Điền nội dung.." style="height:200px;width: 70%"></textarea>
                        </div>
                        <span class="message-error" id="news-compose-content-error"></span>
                    </div>
                    <!-- Link Input -->
                    <div>
                        <div>
                            <label style="font-weight: bold;" for="content">Link tin tức</label>
                        </div>
                        <div style="width: 100%;">
                            <input style="width: 70%;height:25px"
                                name="linkURL" type="text" placeholder="Link..." autocomplete='off' reqired />
                        </div>
                        <span class="message-error" id="news-compose-link-error"></span>
                    </div>
                    <div style="display: flex; justify-content: flex-end;">
                        <button class="news-compose-btn" type="submit">Đăng Tin</button>
                        <div class="message-error" id="news-compose-error"></div>
                        <div class="message-success" id="news-compose-success"></div>
                    </div>
                
                </div>
            </div>
        </form>
    </div>
        `
        //Chèn vào HTML
        let newsComposeBtnWapper = document.getElementById("news-compose-btn-wapper")
        newsComposeBtnWapper.innerHTML = newsComposeBtnHtml + newsComposeFormHtml;
        //Tạo chứng năng cho phần showNewsForm
        let newsComposeForm = document.getElementById('newsComposeForm')
        let newsComposeBtn = document.getElementById('showNewsForm')

        newsComposeBtn.addEventListener('click', function () {
            newsComposeForm.style.display = 'initial';
        })

        let newsFormBtnClose = document.getElementById("newsFormBtnClose")
        newsFormBtnClose.addEventListener('click', function () {
            newsComposeForm.style.display = 'none';
        })
        initSample()
        //Tạo chức năng đăng tin
        let newsForm = document.getElementById("news-compose");
        newsForm.onsubmit = function (event) {
            //Đảm bảo trang không bị load lại
            event.preventDefault();
            //Lấy dữ liệu từ form
            let title = newsForm.title.value.trim()
            let content = newsForm.content.value.trim()
            let link = newsForm.linkURL.value.trim()
            //Test
            console.log("===NEWS COMPOSE FORM TEST===")
            console.log("TITLE=" + title)
            console.log("CONTENT=" + content)
            console.log("LINK=" + link)
            //Kiểm tra dữ liệu lấy từ form
            let validateResult = [
                view.validate(title != '', 'news-compose-title-error', 'Lỗi: Vui lòng điền tiêu đề'),
                view.validate(content != '', 'news-compose-content-error', 'Lỗi: Vui lòng điền nội dụng'),
                view.validate(link != '', 'news-compose-link-error', 'Lỗi: Giá đoán để trống'),
            ]
            if (isPassed(validateResult)) {
                //Nếu pass gửi dữ liệu lên firebase qua controller
                controller.NewsCompose(title, content, link)
            }
        }
    }
    if (!model.currentUserData.other.avatarURL) {
        view.showImg("user-avatar", "https://firebasestorage.googleapis.com/v0/b/thocthom-project.appspot.com/o/img%2FDefaut%2Fdefault-avatar.png?alt=media&token=55eec6a1-cb2f-4d0d-9bd2-564ef8b45eec")
    } else { view.showImg("user-avatar", model.currentUserData.other.avatarURL) }
}

view.showNotification = function (tagID) {
    document.getElementById(tagID).innerHTML = ""
    for (let noti of model.notifications) {
        document.getElementById(tagID).innerHTML += `<div style="display: flex; justify-content: space-between;" ><div><p>${noti.createdAt} : ${noti.content}</p></div> <div><button name="${noti.id}" class="delete-noti"> Xóa </button></div></div>`
        let allDeleteNotiBtn = document.getElementsByClassName("delete-noti")
        //Làm nút Xóa hoạt động
        for (let deleteNotiBtn of allDeleteNotiBtn) {
            deleteNotiBtn.onclick = function () { controller.deleteNotification(this.name) }
        }
    }

}


view.showNotificationWarning = function (tagID) {
    document.getElementById(tagID).innerHTML = model.notifications.length.toString()
}

view.showIdeas = function (tagID) {
    let ideaIDs = [];
    try {
        //Khởi động
        document.getElementById(tagID).innerHTML = ``
        //Chèn ideas HTML vào
        for (let idea of model.ideas) {
            //chuẩn bị code của button like và dislike
            let likeButton = ` <button name="${idea.id}" id="${idea.id + "-like-btn"}" class="like-btn"><i class="fa fa-thumbs-up"></i> Like</button>`
            let dislikeButton = `<button name="${idea.id}" id="${idea.id + "-dislike-btn"}" class="dislike-btn"><i class="fa fa-thumbs-up"></i>  Liked!</button>`
            //chèn ideas
            document.getElementById(tagID).innerHTML += `
                    <div class="flex-column">
                        <div id="ideaClick" class="hover fund-post" style="cursor: pointer;">
                            <div class="title1 hover">
                                <p class="title-fund-post" onclick="model.saveIdeaData('${idea.id}')">${idea.title.toUpperCase()}</p> 
                            </div>
                            <div class="content-idea-list">
                            <p class="author-fund-post"> Theo <span class="author"> ${idea.author.name} </span> - ${calculateTimeToNow(new Date(idea.createdAt))} - <span ><i class="fa fa-thumbs-up" style="bottom:-20px"></i> ${(idea.likes != undefined) ? idea.likes.length : 0}</span></p>
                            </div>
                            <div class="content-idea-list" style="display: flex; align-items: center;">
                                <span>XAUUSD</span><span>, 60</span><span class="icon-down" style="background-color: #26A69A;"><svg style="margin-right: 4px;" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H14V10H12V3.5L1.5 14L0 12.5L10.5 2H4V0Z" fill="currentColor"></path></svg>Giá Lên</span>
                            </div>
                            <div class="img-content flex-center">
                                <img class="img-fund-post" alt="Lỗi tải ảnh" src=${idea.ideaImageURL == undefined ? null : idea.ideaImageURL} >
                            </div>
                           
                            <div class="content-idea-list">
                                <p id="${idea.id + "-content"}" class="content-fund-post">${idea.content.slice(0, 100)}  </p>
                            </div>
                            <div>
                            ${idea.likes.includes(firebase.auth().currentUser.email) ? dislikeButton : likeButton}
                            </div>
                        </div>
                    </div>
            `
            document.getElementById(idea.id + "-content").innerHTML = idea.content.slice(0, 100) + `...<a name="${idea.id}" id="${idea.id + "-see-more-btn"}" class="see-more-idea-btn"> Xem thêm </a>`
            ideaIDs.push(idea.id)
        }
        //Làm tất cả button trong ideas hoạt động
        for (let ideaID of ideaIDs) {
            let seeMoreIdeaBtn = document.getElementById(ideaID + "-see-more-btn")
            let likeBtn = document.getElementById(ideaID + "-like-btn")
            let dislikeBtn = document.getElementById(ideaID + "-dislike-btn")
            seeMoreIdeaBtn.onclick = function () { view.showPage("ideaViewPage"); }
            if (likeBtn != null) {
                likeBtn.onclick = async function () {
                    await controller.addLike(this.name)
                    // await controller.loadIdeas()
                    view.showIdeas("idea-list", model.ideas) //Thực hiện refresh trang
                }
            }
            if (dislikeBtn != null) {
                dislikeBtn.onclick = async function () {
                    await controller.removeLike(this.name)
                    // await controller.loadIdeas()
                    view.showIdeas("idea-list", model.ideas) //Thực hiện refresh trang
                }
            }
        }
    } catch (error) {
        console.log(error)
    }
}

view.showNews = function (tagID) {
    let newIDs = [];
    try {
        //Khởi động
        document.getElementById(tagID).innerHTML = ``
        //Chèn ideas HTML vào
        for (let news of model.news) {
            //chèn ideas
            document.getElementById(tagID).innerHTML += `
                    <div class="flex-column">
                        <div id="ideaClick" class="hover fund-post" style="cursor: pointer;">
                            <div class="title1 hover">
                                <p class="title-news-post" onclick="view.openNewTab('${news.linkURL}')">${news.title.toUpperCase()}</p> 
                            </div>
                            <div class="content-idea-list">
                                <p id="${news.id + "-content"}" class="content-news-post">${news.content.slice(0, 100)} ...</p>
                            </div>
                            <div class="content-idea-list">
                                <p class="author-fund-post"> - ${calculateTimeToNow(new Date(news.createdAt))}</p>
                            </div>
                        </div>
                    </div>
            `
            newIDs.push(news.id)
        }
        //Làm tất cả button trong ideas hoạt động

    } catch (error) {
        console.log(error)
    }
}

view.showPendingIdeas = function (tagID) {
    try {
        document.getElementById(tagID).innerHTML = ""
        for (let pendingIdea of model.pendingIdeas) {
            document.getElementById(tagID).innerHTML += `
                    <img src="${pendingIdea.ideaImageURL}" >
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
                acceptPendingIdeaBtn.onclick = async function () {
                    this.setActive = false;
                    let authorEmail = model.pendingIdeas[searchIdIndex(this.name, model.pendingIdeas)].author.email
                    await controller.acceptPendingIdeas(this.name);
                    await controller.deletePendingIdeas(this.name);
                    await controller.sendNotification(authorEmail, "Bài viết của bạn đã được admin chấp thuận!")
                }
            }

            for (let deletePendingIdeaBtn of allDeletePendingIdeaBtn) {
                deletePendingIdeaBtn.onclick = async function () {
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

view.showProfile = async function (email) {
    //Lấy dữ liệu
    model.getAllIdeas(email)
    await controller.loadAllUsersData()
    //Định nghĩa các thẻ
    let profileAvatar = document.getElementById("profile-avatar")
    let profileName = document.getElementById("profile-name")
    let profileFollowers = document.getElementById("profile-follower-numbers")
    let profileIdeas = document.getElementById("profile-idea-numbers")
    let profilePercent = document.getElementById("profile-guess-percent")
    //Kiểm tra nếu email là user hiện tại
    if (email == model.currentUserData.email) {
        let allFollower=model.currentUserData.follower
        let allFollow=model.currentUserData.follow
        let typeAccount = model.currentUserData.other.type
        //Hiển thị thông tin ban đầu
        profileAvatar.src = model.currentUserData.other.avatarURL
        profileName.innerHTML = `
            ${model.currentUserData.name}
            <br>
            <span style="font-size:1rem;color: #787b86"> ${(model.currentUserData.other.type == "member") ? "THÀNH VIÊN" : (model.currentUserData.other.type == "fund") ? "QUỸ" : "ADMIN"}</span></h1>
        `
        if (typeAccount == "member" || typeAccount == "admin") {
            profileFollowers.innerHTML = ``
            profileIdeas.innerHTML = ``
            profilePercent.innerHTML = ``
        }
        //Hiển thị Menu
        let profileMenu = document.getElementById("profile-menu")
        if (typeAccount == "member") {
            profileMenu.innerHTML = `
            <div id="dangTheoDoi" class="tap">Đang theo dõi</div>
            <div id="Edit" class="tap">Cài đặt</div>
            `
        } else if (typeAccount == "fund") {
            profileMenu.innerHTML = `
            <div id='yTuong' class="tap">Ý tưởng</div>
            <div id="nguoiTheoDoi" class="tap">Người theo dõi</div>
            <div id="dangTheoDoi" class="tap">Đang theo dõi</div>
            <div id="Edit" class="tap">Cài đặt</div>
            `
        } else if (typeAccount == "admin") {
            profileMenu.innerHTML = `
            `
        }
        //Hiển thị phần nội dung từng chức năng
        let hienThi = document.getElementById('hienThi')

        let yTuong = document.getElementById('yTuong')
        let nguoiTheoDoi = document.getElementById('nguoiTheoDoi')
        let dangTheoDoi = document.getElementById('dangTheoDoi')
        let Edit = document.getElementById('Edit')
        let arrayOfBtnID = ['yTuong', 'nguoiTheoDoi', 'dangTheoDoi', 'Edit']
        if (yTuong != null) {
            yTuong.addEventListener('click', function () {
                hienThi.innerHTML = `<div id="ideaShow" style="display: flex; justify-content: center;flex-grow: 1;">
                <div>
                    <div style="display: flex; display: flex;justify-content: flex-end;width: 1000px;">
                        <div class="btn-search"><input class="hover" id="search" type="text" placeholder="Search..">
                            <button class="hover" id="submit" type="submit"><i class="fa fa-search"></i></button>
                        </div>
                        <div class=" flex-between">
                            <div class="filter-icon">
                                Sắp xếp
                                <span><button class="btn-icon hover"><i class="far fa-clock icon fa-2x"></i></button></span>
                                <span><button class="btn-icon hover"><i class="far fa-thumbs-up icon fa-2x"></i></button></span>
                            </div>
                        </div>
                    </div>
            
                    <div id="ideaList" style="display: flex; flex-wrap: wrap; width: 1100px;">
                        <div style=" width: 500px;">
            
                            <div class="flex-column">
                                <div id="ideaClick" class="hover" style="cursor: pointer;">
                                    <div class="title1 hover">
                                        GOLD - Nhịp lấy Đỉnh!!
                                    </div>
                                    <div class="content-idea-list" style="display: flex; align-items: center;">
                                        <span>XAUUSD</span><span>, 60</span><span class="icon-down" style="background-color: #26A69A;"><svg style="margin-right: 4px;" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H14V10H12V3.5L1.5 14L0 12.5L10.5 2H4V0Z" fill="currentColor"></path></svg>Giá Lên</span>
                                    </div>
                                    <div class="img-content flex-center">
                                        <img src="https://s3.tradingview.com/f/fGSiLbDw_mid.webp" alt="">
                                    </div>
                                    <div class="content-idea-list">
                                        LuTienSinh
                                    </div>
                                    <div class="content-idea-list">
                                        Mốc $1808 tối thứ 6 vừa rồi có phản ứng nhưng như tui đã đưa tin về vụ Trung tạm ngưng nhập 02 chuyến tàu nông sản Mĩ (cái này nhạy cảm vì Trung đang lũ lụt tè le mà ngưng nhập cho thấy chắc có gì đó ghê gớm lắm!!)khiến Cậu cứ cheo leo ở mốc $180
                                    </div>
                                    <div>
                                        like
                                    </div>
                                </div>
                                <div>
            
                                </div>
                            </div>
                        </div>
            
                        <div style="width: 500px;">
                            <div class="flex-column">
                                <div id="ideaClick" class="hover" style="cursor: pointer;">
                                    <div class="title1 hover">
                                        GOLD - Nhịp lấy Đỉnh!!
                                    </div>
                                    <div class="content-idea-list" style="display: flex; align-items: center;">
                                        <span>XAUUSD</span><span>, 60</span><span class="icon-down" style="background-color: #26A69A;"><svg style="margin-right: 4px;" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H14V10H12V3.5L1.5 14L0 12.5L10.5 2H4V0Z" fill="currentColor"></path></svg>Giá Lên</span>
                                    </div>
                                    <div class="img-content flex-center">
                                        <img src="https://s3.tradingview.com/f/fGSiLbDw_mid.webp" alt="">
                                    </div>
                                    <div class="content-idea-list">
                                        LuTienSinh
                                    </div>
                                    <div class="content-idea-list">
                                        Mốc $1808 tối thứ 6 vừa rồi có phản ứng nhưng như tui đã đưa tin về vụ Trung tạm ngưng nhập 02 chuyến tàu nông sản Mĩ (cái này nhạy cảm vì Trung đang lũ lụt tè le mà ngưng nhập cho thấy chắc có gì đó ghê gớm lắm!!)khiến Cậu cứ cheo leo ở mốc $180
                                    </div>
                                    <div>
                                        like
                                    </div>
                                </div>
                                <div>
            
                                </div>
                            </div>
                        </div>
            
            
                        <div style="width: 500px;">
            
                            <div class="flex-column">
                                <div id="ideaClick" class="hover" style="cursor: pointer;">
                                    <div class="title1 hover">
                                        GOLD - Nhịp lấy Đỉnh!!
                                    </div>
                                    <div class="content-idea-list" style="display: flex; align-items: center;">
                                        <span>XAUUSD</span><span>, 60</span><span class="icon-down" style="background-color: #26A69A;"><svg style="margin-right: 4px;" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H14V10H12V3.5L1.5 14L0 12.5L10.5 2H4V0Z" fill="currentColor"></path></svg>Giá Lên</span>
                                    </div>
                                    <div class="img-content flex-center">
                                        <img src="https://s3.tradingview.com/f/fGSiLbDw_mid.webp" alt="">
                                    </div>
                                    <div class="content-idea-list">
                                        LuTienSinh
                                    </div>
                                    <div class="content-idea-list">
                                        Mốc $1808 tối thứ 6 vừa rồi có phản ứng nhưng như tui đã đưa tin về vụ Trung tạm ngưng nhập 02 chuyến tàu nông sản Mĩ (cái này nhạy cảm vì Trung đang lũ lụt tè le mà ngưng nhập cho thấy chắc có gì đó ghê gớm lắm!!)khiến Cậu cứ cheo leo ở mốc $180
                                    </div>
                                    <div>
                                        like
                                    </div>
                                </div>
                                <div>
            
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>`
                //Thay đổi màu của nút
                view.changeColor(arrayOfBtnID, 'yTuong', "royalblue", "#1e609e")
            })
        }
        if (nguoiTheoDoi != null) {
            nguoiTheoDoi.addEventListener('click', function () {
                hienThi.innerHTML=``
                //Gán từng follwer vào
                for(let follower of allFollower){
                    let buttonFollow=`
                    <div style="display: flex; padding: 10px;">
                    <button onclick="await controller.followFund(${model.getUserDataByEmail(follower).id})" style="margin: 20px 20px 20px 0px; outline: none; border: 1px soild #ddd; border-radius: 10px; color: #00897B;">Theo dõi</button>
                    </div>
                    `
                    hienThi.innerHTML += `        
                        <div id="follower-container" style="display: flex;flex-grow: 1; justify-content: space-between; border: 1px solid #ddd; margin: 15px 50px 15px 50px; border-radius: 10px;">
                            <div style="display: flex; padding: 10px;">
                                <div>
                                    <a href="#published-charts">
                                        <img style="height: 80px; width: 80px;" src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220,0,20,20%22%20width=%22171%22%20height=%22171%22%3E%3Crect%20height=%2220%22%20width=%2220%22%20fill=%22hsl%28171,25%25,50%25%29%22/%3E%3Ctext%20fill=%22white%22%20x=%2210%22%20y=%2214.8%22%20font-size=%2214%22%20font-family=%22Trebuchet%20MS,Arial,sans-serif%22%20text-anchor=%22middle%22%3ED%3C/text%3E%3C/svg%3E"
                                            alt="">
                                    </a>
                                </div>
                                <div style="margin-left: 20px;">
                                    <h5>${follower}</h5>
                                </div>
                                ${model.getUserDataByEmail(follower).other.type=="fund"?buttonFollow:``}
                            </div>
                            
                        </div>`
                }
                //Thay đổi màu của nút
                view.changeColor(arrayOfBtnID, 'nguoiTheoDoi', "royalblue", "#1e609e")
            })
        }
        if (dangTheoDoi != null) {
            dangTheoDoi.addEventListener('click', function () {
                hienThi.innerHTML = `        <div style="display: flex;flex-grow: 1; justify-content: space-between; border: 1px solid #ddd; margin: 15px 50px 15px 50px; border-radius: 10px;">
                <div style="display: flex; padding: 10px;">
                    <div>
                        <a href="#published-charts">
                            <img style="height: 80px; width: 80px;" src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220,0,20,20%22%20width=%22171%22%20height=%22171%22%3E%3Crect%20height=%2220%22%20width=%2220%22%20fill=%22hsl%28171,25%25,50%25%29%22/%3E%3Ctext%20fill=%22white%22%20x=%2210%22%20y=%2214.8%22%20font-size=%2214%22%20font-family=%22Trebuchet%20MS,Arial,sans-serif%22%20text-anchor=%22middle%22%3ED%3C/text%3E%3C/svg%3E"
                                alt="">
                        </a>
                    </div>
                    <div style="margin-left: 20px;">
                        <h5>ducthinh1341993</h5>
                    </div>
                </div>
                <div style="display: flex; padding: 10px;">
                    <button style="margin: 20px 20px 20px 0px; outline: none; border: 1px soild #ddd; border-radius: 10px; color: #00897B;">Huỷ theo dõi</button>
                </div>
            </div>`
                //Thay đổi màu của nút
                view.changeColor(arrayOfBtnID, 'dangTheoDoi', "royalblue", "#1e609e")
            })
        }
        if (Edit != null) {
            Edit.addEventListener('click', function () {
                hienThi.innerHTML = `        <div style="justify-content: space-around; padding: 0px 350px 50px 350px; display: flex;">
                <form style=" padding-top: 40px;" id="edit-profile-form">
                    <h2 class="nameIf">Thông Tin Cá Nhân</h2>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <div>Hình đại diện:</div>
                            <img id="photo-upload" style="width: 80px;height: 80px;" src=${model.currentUserData.other.avatarURL}
                                alt="">
                            <input type="file" name="" id="fileButton">
                            <progress id="progressBar" value="0" max="100" style="width:300px;" hidden=true></progress>
                        </div>
                        <div class="form-group col-md-12">
                            <label for="email"><span class="warning"></span>Địa Chỉ Email:</label>
                            <span>${model.currentUserData.email}</span>
                        </div>
            
                        <div class="form-group col-md-6">
                            <label for="name"><span class="warning"></span>Tên Hiển Thị</label>
                            <input name="name" type="text" class="form-control" id="" value=${model.currentUserData.name}>
                            <span class="warning" id="name-error"></span>
                        </div>
            
                        <div class="form-group col-md-6">
                            <label><span class="warning"></span>Số Điện Thoại</label>
                            <input name="phoneNumber" type="text" class="form-control" id="" value=${model.currentUserData.other.phone}>
                            <span class="warning" id="phone-number-error"></span>
                        </div>
            
                    </div>
                    <div class="form-group">
                        <label for="address"><span class="warning"></span>Địa Chỉ</label>
                        <input name="address" type="text" class="form-control" id="inputAddress" value=${model.currentUserData.other.address}>
                        <span class="warning" id="address-error"></span>
                    </div>
                    <div style="display: flex; justify-content: flex-end;margin-right: 50px;">
                        <button id="edit-profile-btn" type="submit" class="success" style="float:right">Lưu</button>
                        <span class="warning" id="edit-profile-error"></span>
                        <span id="edit-profile-success"></span>
                    </div>
                </form>
            </div>`
                view.changeColor(arrayOfBtnID, 'Edit', "royalblue", "#1e609e")
                //Chức năng upload ảnh
                initApp()
                //Chức năng Edit thông tin
                let editProfileForm = document.getElementById("edit-profile-form")
                editProfileForm.name.value=model.currentUserData.name
                editProfileForm.address.value=model.currentUserData.other.address
                editProfileForm.onsubmit = function (event) {
                    //Đảm bảo trang không bị load lại
                    event.preventDefault();
                    console.log("submit")
                    //Lấy dữ liệu từ form
                    let name = editProfileForm.name.value.trim()
                    let phone = editProfileForm.phoneNumber.value.trim()
                    let address = editProfileForm.address.value.trim()
                    let avatarURL = model.imgURL
                    //Kiểm tra dữ liệu lấy từ form
                    let validateResult = [
                        view.validate(name != '', 'name-error', 'Lỗi: Tên đang để trống'),
                        view.validate(phone != '', 'phone-number-error', 'Lỗi: Điện thoại đang để trống'),
                        view.validate(address != '', 'address-error', 'Lỗi: Địa chỉ đang để trống'),
                    ]
                    if (isPassed(validateResult)) {
                        //Nếu pass gửi dữ liệu lên firebase qua controller
                        controller.editProfile(name, phone, address, avatarURL)
                    }
                }
            })
        }
        Edit.click();
    }
    else {
        //Hiển thị thông tin
        profileAvatar.src = model.currentUserData.other.avatarURL
        profileName.innerHTML = model.currentUserData.name
        profileFollowers.innerHTML = `
            <i class="fas fa-user-friends"></i>
            ${model.currentUser.follower.length}
            <br>
            <span style="font-size:1rem">NGƯỜI THEO DÕI</span>
            `
        //Hiển thị số lượng bài đăng
        profileIdeas.innerHTML = `
            <i class="fas fa-edit"></i>
            ${model.getNumIdeasCreateBy(email)}
            <br>
            <span style="font-size:1rem">BÀI VIẾT</span>
            `
        profilePercent.innerHTML = ``
    }

    //
}

view.showImg = function (tagID, imgURL) {
    document.getElementById(tagID).src = imgURL;
}

view.ideaFilter = function () {
    let isFilterByLikes = document.getElementById('like-filter')
    let isFilterByDates = document.getElementById('date-filter')
    console.log("Like Filter:" + isFilterByLikes.checked)
    console.log("Date Filter:" + isFilterByDates.checked)
    if (isFilterByLikes.checked) {
        model.ideas.sort(function (a, b) { return b.likes.length - a.likes.length })
        view.showIdeas("idea-list", model.ideas)
    } else if (isFilterByDates.checked) {
        model.ideas.sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt) })
        view.showIdeas("idea-list", model.ideas)
    }
}

view.ideaSearch = function (searchWay) {
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
    model.ideas = filterdata;
    view.showIdeas("idea-list");
}

//Hiển thị của Follow Function

view.showFollowerListOfFundHaveID = function (id) {
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

view.showUserFollowList = function () {
    let UserfollowListDOMs = document.querySelectorAll(".user-follow-list")
    for (let UserfollowListDOM of UserfollowListDOMs) {
        if (model.getFollowListOfCurrentUser() == []) {
            UserfollowListDOM.innerHTML = "Chưa theo dõi ai cả"
        } else {
            UserfollowListDOM.innerHTML = model.getFollowListOfCurrentUser()
        }
    }
}

view.showFollowersNumberOfFundHaveID = function (id) {
    let followersNumbers = document.querySelectorAll(`.${id}-followers-number`)
    for (let followersNumber of followersNumbers) {
        followersNumber.innerHTML = model.getFollowerListOfFundHaveID(id).length
    }
}

view.makeFollowAndUnfollowBtnWork = function () {
    //Quy định mỗi button sẽ có một name là id của Fund
    let allFollowBtn = document.querySelectorAll(".follow-btn")
    let allUnFollowBtn = document.querySelectorAll(".unfollow-btn")

    for (let followBtn of allFollowBtn) {
        followBtn.onclick = async function () {
            this.disabled = true;
            await controller.followFund(this.name)
            this.disabled = false;
        }
    }
    for (let unfollowBtn of allUnFollowBtn) {
        unfollowBtn.onclick = async function () {
            this.disabled = true;
            await controller.unFollowFund(this.name)
            this.disabled = false;
        }
    }
}


//Chuyển trang
view.redirect = function (url) {
    window.location.href = url;
}

//Reload trang
view.reload = function () {
    window.location.reload()
}

//Mở tab mới
view.openNewTab = function (url) {
    window.open(url)
}


//Thay đổi màu
view.changeColor = function (arrayOfID, docID, colorNormal, colorFocus) {
    for (let ID of arrayOfID) {
        if (document.getElementById(ID) != null) {
            document.getElementById(ID).style.backgroundColor = colorNormal
        }
    }
    document.getElementById(docID).style.backgroundColor = colorFocus
}