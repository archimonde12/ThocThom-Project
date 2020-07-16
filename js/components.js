let components = {};

components.sign_up=`
SIGN UP PAGE - TRANG ĐĂNG KÍ
<h1>DEMO</h1>
<div class="container">
<form class="signUp" id="signUp">
    <h3>Create Your Account</h3>
    <p>Just enter your email address</br>
        and your password for join.
    </p>

    <div class="input-wrapper">
        <label for="name"><i class="fa fa-user"></i></label>
        <input type="text" name="name" id="name" placeholder="Your name">
    </div>
    <span class="message-error" id="name-error"></span>

    <div class="input-wrapper">
        <label for="email"><i class="fa fa-envelope"></i></label>
        <input class="w100" id="email" type="email" placeholder="Insert eMail" reqired autocomplete='off' />
    </div>
    <span name="email" class="message-error" id="email-error"></span>

    <div class="input-wrapper">
        <label for="password"><i class="fa fa-lock"></i></label>
        <input name="password" id="password" type="password" placeholder="Insert Password" reqired />
    </div>
    <span class="message-error" id="password-error"></span>

    <div class="input-wrapper">
        <label for="password-Confirmation"><i class="fa fa-lock"></i></label>
        <input name="passwordConfirmation" id="password-Confirmation" type="password"
            placeholder="Verify Password" reqired />
    </div>
    <span class="message-error" id="password-Confirmation-error"></span>

    <button class="form-btn sx log-in" id="log-in" type="button">Don't have account yet</button>
    <button id="sign-up-btn" class="form-btn dx" type="submit">Register</button>
    <div class="message-error" id="sign-up-error"></div>
    <div class="message-success" id="sign-up-success"></div>

</form>
<form class="signIn" id="signIn">
    <h3>Welcome</br>Back !</h3>
    <button class="fb" type="button">Log In With Facebook</button>
    <p>- or -</p>

    <div class="input-wrapper">
        <label for="email"><i class="fa fa-envelope"></i></label>
        <input name="email" id="email" type="email" placeholder="Insert eMail" autocomplete='off' reqired />
    </div>
    <span class="message-error" id="sign-in-email-error"></span>

    <div class="input-wrapper">
        <label for="password"><i class="fa fa-lock"></i></label>
        <input name="password" id="password" type="password" placeholder="Insert Password" reqired />
    </div>
    <span class="message-error" id="sign-in-password-error"></span>

    <button class="form-btn sx back" id="back" type="button">Back</button>
    <button class="form-btn dx" type="submit" id="sign-in-btn">Log In</button>
    <div class="message-error" id="sign-in-error"></div>
</form>
<h1>END DEMO</h1>
<p>====================================================================</p>
<h1>Các Button chuyển trang chính</h1>
<br>
<button class="main-view-btn">Register</button>
<h1>Các chức năng chính</h1>
<p>- Đăng kí</p>

<h1>Các hiển thị chính</h1>
<p>- Form đăng ký</p>
<p>- Button đăng ký </p>


</div>
`;

components.sign_in=`
<div class="container">
<h1>DEMO</h1>
<form class="signIn" id="signIn">
    <h3>Welcome</br>Back !</h3>
    <button class="fb" type="button">Log In With Facebook</button>
    <p>- or -</p>

    <div class="input-wrapper">
        <label for="email"><i class="fa fa-envelope"></i></label>
        <input name="email" id="email" type="email" placeholder="Insert eMail" autocomplete='off' reqired />
    </div>
    <span class="message-error" id="sign-in-email-error"></span>

    <div class="input-wrapper">
        <label for="password"><i class="fa fa-lock"></i></label>
        <input name="password" id="password" type="password" placeholder="Insert Password" reqired />
    </div>
    <span class="message-error" id="sign-in-password-error"></span>

    <button class="form-btn sx back" id="back" type="button">Back</button>
    <button class="form-btn dx" type="submit" id="sign-in-btn">Log In</button>
    <div class="message-error" id="sign-in-error"></div>
</form>
<h1>END DEMO</h1>
<p>====================================================================</p>
SIGN IN PAGE - TRANG ĐĂNG NHẬP
<h1>Các Button chuyển trang chính</h1>
<br>
<button class="main-view-btn">Log In</button>
<br>
<button class="sign-up-btn">Bạn chưa có tài khoản?</button>
<h1>Các chức năng chính</h1>
<p>- Đăng nhập</p>

<h1>Các hiển thị chính</h1>
<p>- Form đăng nhập</p>
<p>- Button đăng nhập </p>


</div>

`;

components.main_view=`
<h1>MAIN VIEW - MÀN HÌNH CHÍNH</h1>
<h2>DEMO</h2>
<div class="header">
<button class="main-view-btn">Trang Chủ</button>
<button id="sign-out-button">Sign Out</button>
</div>
<div class="info-container">
<h3>Account Information</h3>
<p id="user-name">Name:</p>
<p id="user-balance">Balance:</p>
<button class="deposit-page-btn">Deposit</button>
<button class="withdraw-page-btn">WithDraw</button>
</div>
<div class="ideas-container">
<h3>Show all ideas</h3>
<label for="searchBox">Search Name</label>
<input type="search" name="searchBox" id="">
<select>
    <option value=”0″>Mới nhất</option>
    <option value=”1″>Nhiều người thích nhất</option>
    <option value=”2″>Của quỹ theo dõi</option>
 </select>
<table>
    <tr><td>Image 1</td><td>Idea 1</td><td>Title 1</td><td>Content 1</td><td>Author 1</td></tr>
    <tr><td>Image 2</td><td>Idea 2</td><td>Title 2</td><td>Content 2</td><td>Author 2</td></tr>
    <tr><td>Image 3</td><td>Idea 3</td><td>Title 3</td><td>Content 3</td><td>Author 3</td></tr>
</table>
</div>
<div class="fund-info-container">
<h3>Show all fund</h3>
<label for="searchBox">Search Name</label>
<input type="search" name="searchBox" id="">
<select>
    <option value=”0″>Nhiều người theo dõi nhất</option>
    <option value=”1″>Kết quả hoạt động tốt nhất</option>
 </select>
<table>
    <tr><td>Fund 1</td><td>Name 1</td><td>Result 1</td></tr>
    <tr><td>Fund 2</td><td>Name 2</td><td>Result 2</td></tr>
    <tr><td>Fund 3</td><td>Name 3</td><td>Result 3</td></tr>
</table>
</div>
<h2>END DEMO</h2>
<h2>Các Button chuyển trang chính</h2>
<br>
<button class="idea-view-page-btn">Xem Kèo - Đề Về Bao Nhiêu Nào!</button>
<br>
<button class="sign-in-btn">Log Out - Chán Vãi Out Thôi!</button>
<br>
<button class="profile-page-btn">Xem Profile - Xem avatar đẹp trai không nào </button>
<br>
<button class="deposit-page-btn">Nạp Tiền - Nuôi Béo Quỹ Thôi!</button>
<br>
<button class="withdraw-page-btn">Rút Tiền - Quỹ như shit rút tiền về thôi</button>
<p>Quỹ mới thấy cái này </p>
<button class="compose-page-btn" >Đăng Bài - Dụ Gà Nào!</button>
<p> Admin mới thấy cái này </p>
<button class="admin-page-btn">Admin Page</button>

<h1>Các chức năng chính</h1>
<p>- Tìm kiếm kèo</p>
<p>- Bộ lọc kèo</p>
<p>- Tìm kiếm quỹ</p>
<p>- Bộ lọc quỹ</p>
<p>- Xem bài viết của những quỹ mình theo dõi </p>

<h1>Các hiển thị chính</h1>
<p>- Tên user hiện tại</p>
<p>- Balance đang có </p>
<p>- Danh sách các kèo</p>
<p>- Bộ lọc kèo</p>
<p>- Danh sách các quỹ</p>
<p>- Bộ lọc quỹ</p>
<p>- Danh sách các kèo của quỹ theo dõi</p>


`;

components.admin_page= `
<h1>ADMIN PAGE - TRANG THÔNG TIN CỦA ADMIN</h1>
<h1>Các Button chuyển trang chính</h1>
<br>
<button class="main-view-btn">Quay lại Trang Chủ </button>
<br>
<button class="sign-in-btn">Log Out - Chán Vãi Out Thôi!</button>

<h1>Các chức năng chính</h1>
<p>- Duyệt bài đăng của Quỹ</p>
<p>- Duyệt bài thay đổi thông tin của Quỹ</p>
<p>- Duyệt bài những tài khoản đăng kí làm Quỹ</p>

<h1>Các chức năng chính</h1>
<p>Duyệt</p>
<p>Hiển thị thông tin mới </p>
`;

components.profile_page=`
<h1>PROFILE - TRANG THÔNG TIN TÀI KHOẢN</h1>
<h1>Các Button chuyển trang chính</h1>
<br>
<button class="main-view-btn">Quay lại Trang Chủ </button>
<br>
<button class="sign-in-btn">Log Out - Chán Vãi Out Thôi!</button>
<h1>Các chức năng chính</h1>
<p>- Chỉnh sửa thông tin cá nhân (nếu là profile của mình) </p>
<p>- Đầu tư (Nếu đang xem profile của quỹ) </p>
<p>- Rút vốn (Nếu đang xem profile của quỹ) </p>
<p>- Theo dõi (Nếu đang xem profile của quỹ) </p>

<h1>DEMO</h1>
`;

components.idea_view_page=`
<h1>IDEA PAGE - TRANG ĐỌC MỘT KÈO CHI TIẾT</h1>
<h1>Các Button chuyển trang chính</h1>
<br>
<button class="main-view-btn">Quay lại Trang Chủ </button>
<br>
<button class="profile-page-btn">Xem Profile - Xem thằng chém gió là ai nào </button>
<br>
<button class="sign-in-btn">Log Out - Chán Vãi Out Thôi!</button>

<h1>Các chức năng chính</h1>
<p>- Gợi ý một số bài liên quan </p>
<p>- Thích</p>
<p>- Comment ý kiến</p>
<p>- Theo dõi</p>

<h1>DEMO</h1>
`;

components.deposit_page=`
<h1>DEPOSIT PAGE - TRANG NẠP TIỀN</h1>
<h1>DEMO</h1>
<div class="container">
<div class="header">
    <button class="main-view-btn">Trang Chủ</button>
    <button id="sign-out-button">Thoát</button>
</div>
<form id="deposit-form">
    <div class="input-wrapper">
        <label for="depositAmount"><i class="fa fa-envelope"></i>Nhập số tiền cần nạp</label>
        <input name="depositAmount" id="depositAmount" type="number" placeholder="Insert deposit amount" autocomplete='off' reqired />
    </div>
    <span id="deposit-amount-error"></span>
    <button type="submit" id="deposit-apply-btn">Deposit</button>
</form>
</div>
<h1>END DEMO</h1>
<p>====================================================================</p>
<h1>Các Button chuyển trang chính</h1>
<br>
<button class="main-view-btn">Quay lại Trang Chủ </button>
<br>
<button class="sign-in-btn">Log Out - Chán Vãi Out Thôi!</button>

<h1>Các chức năng chính</h1>
<p>- Nạp tiền (kiểm tra số tiền rút có lớn hơn 0 hay không rồi mới cho rút) </p>

`;

components.withdraw_page=`
<h1>WITHDRAW PAGE - TRANG RÚT TIỀN</h1>
<h1>DEMO</h1>
<div class="container">
<div class="header">
    <button class="main-view-btn">Trang Chủ</button>
    <button id="sign-out-button">Thoát</button>
</div>
<form id="withdraw-form">
    <div class="input-wrapper">
        <label for="withdrawAmount"><i class="fa fa-envelope"></i>Nhập số tiền cần rút</label>
        <input name="withdrawAmount" id="withdrawAmount" type="number" placeholder="Insert withdraw amount" autocomplete='off' reqired />
    </div>
    <span id="withdraw-amount-error"></span>
    <button type="submit" id="withdraw-apply-btn">Withdraw</button>
</form>
</div>
<h1>END DEMO</h1>
<p>====================================================================</p>
<h1>Các Button chuyển trang chính</h1>
<br>
<button class="main-view-btn">Quay lại Trang Chủ </button>
<br>
<button class="sign-in-btn">Log Out - Chán Vãi Out Thôi!</button>
<h1>Các chức năng chính</h1>
<p>- Rút tiền (kiểm tra số tiền rút có lớn hơn số tài khoản đang có hay không rồi mới cho rút) </p>
`;

components.compose_page=`
<h1>COMPOSE PAGE - TRANG ĐĂNG BÀI</h1>
<h1>Các Button chuyển trang chính</h1>
<br>
<button class="main-view-btn">Quay lại Trang Chủ </button>
<br>
<button class="sign-in-btn">Log Out - Chán Vãi Out Thôi!</button>
<h1>Các chức năng chính</h1>
<p>- Đăng bài </p>
<p>- Up ảnh vào bài </p>

<h1>DEMO</h1>
`;


components.compose_page = `COMPOSE PAGE - TRANG ĐĂNG BÀI`;