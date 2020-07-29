let components = {};
components.footer = ` <div class="footer">
<footer class="container">
  <div class="row">
    <div class="col-md-4">
      <span class="foorterName">ABOUT US</span>
      <img src="../ThocThom-Project/images/logo.png" alt="">
      <p>Forex Services offered through Advisory Group. Insurance products and services are offered through the
        Insurance Group. Advisory Group and Insurance Group do business collectively as Financial Group. The
        aforementioned are affiliated companies.</p>
      <div class="icon">
        <a href=""><i class="fab fa-facebook-f"></i></a>
        <a href=""><i class="fab fa-twitter"></i></a>
        <a href=""><i class="fab fa-skype"></i></a>
        <a href=""><i class="fab fa-telegram-plane"></i></a>
      </div>
    </div>
    <div class="col-md-4">
      <span class="foorterName">OUR SERVICES</span>
      <ul id="menu-services" class="menu">
        <li id="menu-item-13" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-13"><a
            href="#">Investment management</a></li>
        <li id="menu-item-32" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-32"><a
            href="#">Bonds &amp; Commodities</a></li>
        <li id="menu-item-31" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-31"><a
            href="#">Private Finance Solutions</a></li>
        <li id="menu-item-76" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-76"><a
            href="#">Tax and Trusts</a></li>
        <li id="menu-item-77" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-77"><a
            href="#">Banking services</a></li>
        <li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-78"><a
            href="#">Financial Advisory &amp; Structuring</a></li>
        <li id="menu-item-79" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-79"><a
            href="#">Insurance Solutions</a></li>
        <li id="menu-item-80" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80"><a
            href="#">Trades &amp; Stocks</a></li>
      </ul>
    </div>
    <div class="col-md-4">
      <span class="foorterName">RECENT NEWS</span>
      <ul id="menu-services" class="menux">
        <li> <a href="#">Underwriting And Agency Roles</a>
          <div class="post-date">August 30, 2020</div>
        </li>
        <li> <a href="#">A Look At Primary And Secondary Markets</a>
          <div class="post-date">August 30, 2020</div>
        </li>
        <li> <a href="#">How spot factoring helps resolve cash flow gaps</a>
          <div class="post-date">August 30, 2020</div>
        </li>
      </ul>
    </div>
  </div>
</footer>
<p class="end">© 2020 Forex Theme by HeroFX.</p>
</div>`

components.header = `
<header>
<nav class="navbar navbar-expand-md navbar-dark fixed-top heg">
  <a class="navbar-brand" href="#"><img src="../ThocThom-Project/images/logo.png" alt="" class="logo"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><span>HOME</span><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
          
        <a class="nav-link links" href="#"><span>ABOUT US</span></a>
      </li>
      <li class="nav-item">
          <a class="nav-link links" href="#"><span>SERVICES</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link links" href="#"><span>CONSTACT US</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link links sign-in-btn" href="#"><span>SIGN IN</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link links active sign-up-btn" href="#"><span>SIGN UP</span></a>
        </li>
    </ul>   
  </div>
</nav>
</header>`

components.headerWhenLogIn = `
<header>
<nav class="navbar navbar-expand-md navbar-dark fixed-top heg">
  <a class="navbar-brand main-view-btn" href="#"><img src="../ThocThom-Project/images/logo.png" alt="" class="logo"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item main-view-btn">
        <a class="links nav-link active" href="#"><span>TRANG CHỦ</span><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item links profile-page-btn">
        <a class="links nav-link" href="#"><span>HỒ SƠ</span><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item links deposit-page-btn">
        <a class="links nav-link " href="#"><span>NẠP TIỀN</span><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item links withdraw-page-btn">
        <a class="links nav-link" href="#"><span>RÚT TIỀN</span><span class="sr-only">(current)</span></a>
      </li>
    </ul>   
  </div>
  <div class="form-inline mt-2 mt-md-0">
  <a class="nav-link links" href="#" style="color:#d00000;margin-bottom: 20px;" id="sign-out-button"><span>ĐĂNG XUẤT </span><i class="fas fa-sign-out-alt"></i></a>
          </div>
</nav>
</header>`


components.sign_up = `
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
    <span class="message-error warning" id="name-error"></span>

    <div class="input-wrapper">
        <label for="email"><i class="fa fa-envelope"></i></label>
        <input class="w100" id="email" type="email" placeholder="Insert eMail" reqired autocomplete='off' />
    </div>
    <span name="email" class="message-error warning" id="email-error"></span>

    <div class="input-wrapper">
        <label for="password"><i class="fa fa-lock"></i></label>
        <input name="password" id="password" type="password" placeholder="Insert Password" reqired />
    </div>
    <span class="message-error warning" id="password-error"></span>

    <div class="input-wrapper">
        <label for="password-Confirmation"><i class="fa fa-lock"></i></label>
        <input name="passwordConfirmation" id="password-Confirmation" type="password"
            placeholder="Verify Password" reqired />
    </div>
    <span class="message-error" id="password-Confirmation-error"></span>
    <label for="typeOfAccount">Choose a type of account:</label>
    <select id="typeOfAccount" name="typeOfAccount">
        <option value="member">Gà</option>
        <option value="fund">Thịt Gà</option>
    </select>
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
components.sign_up_hung = `  <main role="main">
<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top heg">
      <a class="navbar-brand" href="#"><img src="../ThocThom-Project/images/logo.png" alt="" class="logo"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"><span>TRANG CHỦ</span><span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link links sign-in-btn" href="#"><span>ĐĂNG NHẬP</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link links active sign-up-btn" href="#"><span>ĐĂNG KÝ</span></a>
          </li>
        </ul>   
      </div>
    </nav>
  </header>
  
</main>
<div class="container signUp" style="margin-top:100px;margin-bottom: 35px;">
<div class="row">
    <div class="col-lg-7">
        <h2>Real Account Registration</h2>
        <p><i class="far fa-clock"></i> Estimated time to complete your registration is 2 Minutes</p>
        <p><i class="fas fa-pencil-alt"></i> Please complete the following form using English alphabet characters only.</p>
        <p><i class="fas fa-address-card"></i> Please complete the form below by using your first name and surname as they are displayed in your identity document.</p>
        <p><i class="fas fa-inbox"></i> Please make sure that emails from site@investor.com do not get marked as spam so that you can receive all communication emails seamlessly. We suggest adding site@investor.com to your list of contacts to avoid emails landing in your spam folder.</p>
    </div>
    <div class="col-lg-5">
        <h2 class="nameBroker" style="color:black"><span>Broker of choice with over</span><br>
            2,000,000 Live Accounts!</h2>
            <img src="../ThocThom-Project/images/broker.png" style="width: 400px;height: 300px;" alt="">
    </div>
    <div class="col-lg-7 col-md-7">
        <form style="border-top: #a8a8a8 1px solid; padding-top: 40px;" id="signUp">
            <h2 class="nameIf">Personal Details</h2>
            <div class="form-row">

              <div class="form-group col-md-12">
                <label for="email"><span class="warning">*</span>Email</label>
                <input name="email" type="email" class="form-control" id="inputEmail4">
                <span class="warning" id="email-error"></span>
              </div>

              <div class="form-group col-md-6">
                <label for="password"><span class="warning">*</span>Password</label>
                <input name="password" type="password" class="form-control" id="inputPassword4">
                <span class="warning" id="password-error"></span>
              </div>
              
              <div class="form-group col-md-6">
                <label for="passwordConfirmation"><span class="warning">*</span>Password Confirmation</label>
                <input name="passwordConfirmation" type="password" class="form-control" id="rePassword4">
                <span class="warning" id="password-Confirmation-error"></span>
              </div>
              
              <div class="form-group col-md-6">
                <label for="name"><span class="warning">*</span>Display Name</label>
                <input name="name" type="text" class="form-control" id="rePassword4">
                <span class="warning" id="name-error"></span>
              </div>
             
              <div class="form-group col-md-6">
                <label><span class="warning">*</span>Phone Number</label>
                <input name="phoneNumber" type="text" class="form-control" id="rePassword4">
                <span class="warning" id="phone-number-error"></span>
              </div>
              
            </div>
            <div class="form-group">
              <label for="address"><span class="warning">*</span>Address</label>
              <input name="address" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
              <span class="warning" id="address-error"></span>
            </div>
            
            <div class="form-group col-md-6" style="padding-left: 0;">
              <label for="inputState"><span class="warning">*</span>Type of Account</label>
              <select class="form-control valid" id="country" name="typeOfAccount"><option value="member">Chicken</option><option value="fund">Chicken Killer</option></select>
            </div>
            <div class="col-md-4">
                <input name="login" id="sign-up-btn" value="Registration" type="submit" class="success" style="float:right">
                <span class="warning" id="sign-up-error"></span>
                <span id="sign-up-success"></span>
            </div>
          </form>
    </div>
    <div class="col-lg-5" style="padding-top: 3
    0px;">
        <img src="../ThocThom-Project/images/tower.jpg"  style="width: 400px;margin-top: 25px;"  alt="">
    </div>
</div>
</div>
<div class="footer">
<footer class="container">
  <div class="row">
    <div class="col-md-4">
      <span class="foorterName">ABOUT US</span>
      <img src="../ThocThom-Project/images/logo.png" alt="">
      <p>Forex Services offered through Advisory Group. Insurance products and services are offered through the Insurance Group. Advisory Group and Insurance Group do business collectively as Financial Group. The aforementioned are affiliated companies.</p>
      <div class="icon">
        <a href=""><i class="fab fa-facebook-f"></i></a>
        <a href=""><i class="fab fa-twitter"></i></a>
        <a href=""><i class="fab fa-skype"></i></a>
        <a href=""><i class="fab fa-telegram-plane"></i></a>
      </div>
    </div>
    <div class="col-md-4">
      <span class="foorterName">OUR SERVICES</span>
      <ul id="menu-services" class="menu"><li id="menu-item-13" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-13"><a href="#">Investment management</a></li><li id="menu-item-32" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-32"><a href="#">Bonds &amp; Commodities</a></li><li id="menu-item-31" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-31"><a href="#">Private Finance Solutions</a></li><li id="menu-item-76" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-76"><a href="#">Tax and Trusts</a></li><li id="menu-item-77" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-77"><a href="#">Banking services</a></li><li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-78"><a href="#">Financial Advisory &amp; Structuring</a></li><li id="menu-item-79" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-79"><a href="#">Insurance Solutions</a></li><li id="menu-item-80" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80"><a href="#">Trades &amp; Stocks</a></li></ul>
    </div>
    <div class="col-md-4">
      <span class="foorterName">RECENT NEWS</span>
      <ul id="menu-services" class="menux"><li> <a href="#">Underwriting And Agency Roles</a> <div class="post-date">August 30, 2020</div></li><li> <a href="#">A Look At Primary And Secondary Markets</a> <div class="post-date">August 30, 2020</div></li><li> <a href="#">How spot factoring helps resolve cash flow gaps</a> <div class="post-date">August 30, 2020</div></li></ul>
    </div>
  </div>
</footer>
<p class="end">© 2020 Forex Theme by HeroFX.</p>
</div>`
components.sign_in_hung = `
<main role="main">
<header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top heg">
    <a class="navbar-brand" href="#"><img src="../ThocThom-Project/images/logo.png" alt="" class="logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
      aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link home" href="#"><span>TRANG CHỦ</span><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link links active sign-in-btn" href="#"><span>ĐĂNG NHẬP</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link links sign-up-btn" href="#"><span>ĐĂNG KÍ</span></a>
        </li>
      </ul>
    </div>
  </nav>
</header>
</main>
<div class="container" style="margin-top: 100px;">
<div class="row">
  <div class="col-lg-7">
    <div class="name"
      style="color: black;font-size: 28px;font-weight: bold;margin-bottom: 70px;font-family:initial;">
      Chào mừng bạn quay trở lại!
    </div>
    <form style="border:1px rgba(128, 128, 128, 0.555) solid;padding: 30px;" id="signIn">
      <div class="loginName" style="text-align: center;color: gray;font-size: 40px;">ĐĂNG NHẬP</div>
      <div class="form-group">
        <label for="exampleInputEmail1">Địa Chỉ Email</label>
        <input name="email" type="email" placeholder="Điền email của bạn ..." class="form-control" id="exampleInputEmail1"
          aria-describedby="emailHelp">
      </div>
      <span class="message-error warning" id="sign-in-email-error"></span>
      <div class="form-group">
        <label for="exampleInputPassword1">Mật Khẩu</label>
        <input name="password" type="password" placeholder="Điền mật khẩu của bạn ..." class="form-control" id="exampleInputPassword1">
      </div>
      <span class="message-error warning" id="sign-in-password-error"></span>
      <div class="row summits">
        <div class="col-md-6">
          
        </div>
        <div class="col-md-6">
          <input name="login" id="sign-in-btn" value="Đăng nhập" type="submit" class="success" style="float:right">
        </div>
        <div class="message-error warning" id="sign-in-error"></div>
      </div>
      <div class="col-md-12" id="register-box" style="background:#F9F9F9">
        <h4>Bạn chưa đăng ký?</h4>
        <a class="btn btn-success sign-up-btn">Đăng kí ngay</a><br>
        <span id="warning" style="font-size: 11px;color:#999999">Đầu tư luôn tồn tại rủi ro!</span>

        <br clear="all"><br clear="all">
      </div>
    </form>
  </div>
  <div class="col-lg-3">
  </div>
</div>
</div>
<div class="footer" style="margin-top:50px">
<footer class="container">
  <div class="row">
    <div class="col-md-4">
      <span class="foorterName">ABOUT US</span>
      <img src="../ThocThom-Project/images/logo.png" alt="">
      <p>Forex Services offered through Advisory Group. Insurance products and services are offered through the
        Insurance Group. Advisory Group and Insurance Group do business collectively as Financial Group. The
        aforementioned are affiliated companies.</p>
      <div class="icon">
        <a href=""><i class="fab fa-facebook-f"></i></a>
        <a href=""><i class="fab fa-twitter"></i></a>
        <a href=""><i class="fab fa-skype"></i></a>
        <a href=""><i class="fab fa-telegram-plane"></i></a>
      </div>
    </div>
    <div class="col-md-4">
      <span class="foorterName">OUR SERVICES</span>
      <ul id="menu-services" class="menu">
        <li id="menu-item-13" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-13"><a
            href="#">Investment management</a></li>
        <li id="menu-item-32" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-32"><a
            href="#">Bonds &amp; Commodities</a></li>
        <li id="menu-item-31" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-31"><a
            href="#">Private Finance Solutions</a></li>
        <li id="menu-item-76" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-76"><a
            href="#">Tax and Trusts</a></li>
        <li id="menu-item-77" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-77"><a
            href="#">Banking services</a></li>
        <li id="menu-item-78" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-78"><a
            href="#">Financial Advisory &amp; Structuring</a></li>
        <li id="menu-item-79" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-79"><a
            href="#">Insurance Solutions</a></li>
        <li id="menu-item-80" class="menu-item menu-item-type-post_type menu-item-object-services menu-item-80"><a
            href="#">Trades &amp; Stocks</a></li>
      </ul>
    </div>
    <div class="col-md-4">
      <span class="foorterName">RECENT NEWS</span>
      <ul id="menu-services" class="menux">
        <li> <a href="#">Underwriting And Agency Roles</a>
          <div class="post-date">August 30, 2020</div>
        </li>
        <li> <a href="#">A Look At Primary And Secondary Markets</a>
          <div class="post-date">August 30, 2020</div>
        </li>
        <li> <a href="#">How spot factoring helps resolve cash flow gaps</a>
          <div class="post-date">August 30, 2020</div>
        </li>
      </ul>
    </div>

  </div>
</footer>
<p class="end">© 2020 Forex Theme by HeroFX.</p>
</div>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
crossorigin="anonymous"></script>
<script src="/docs/4.4/assets/js/vendor/jquery.slim.min.js"></script>
<script src="/docs/4.4/dist/js/bootstrap.bundle.min.js"
integrity="sha384-6khuMg9gaYr5AxOqhkVIODVIvm9ynTT5J4V1cfthmT+emCG6yVmEZsRHdxlotUnm"
crossorigin="anonymous"></script>
`
components.sign_in = `
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

    <button class="form-btn sx back sign-up-btn" id="back" type="button">Đăng kí tài khoản mới</button>
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

components.main_view = components.headerWhenLogIn + `
<div class="spaceForHeader"></div>
<div class="main-flex-container">
  <div class="left-main-page-container" style="flex-grow: 3">
  <div class="col-md-4 col-sm-4 col-xs-12 magazine-page ar-reverse">
        <div class="headline firstNegativeMargin"
          style="background:#F9F9F9;padding:10px 10px;width:315px;border:1px solid #EEEEEE;margin-top: 0px;float: left;">
          <div class="myIdBox fullWidth" style="border-bottom:1px solid #EEEEEE;padding-bottom:10px;margin-bottom:5px">
            <div class="col-md-12" style="padding:7px 0px 0px 0px">

              <a href="/en/central/profile.html" id="editMyDetails" title="Edit Details">

                <img id="user-avatar" width="100" style="border:1px solid #CCCCCC">
                <a href="/en/central/profile.html" id="editMyDetails" title="Edit Details" class="color-red"><i
                    class="fa fa-edit color-grown" style="font-size:18px;float: right;"></i></a>
              </a>
            </div>
            <div id="user-settings-text" class="col-md-8 col-sm-8 col-xs-8"
              style="padding:7px 0px 5px 10px;font-size:13px">
              <span>Xin Chào&nbsp;</span>
              <span id="user-name"></span><br>
              <span>Loại Tài Khoản:&nbsp;</span>
              <span id="user-type"></span>
            </div>
          </div>
          <!---->
          <div class="row" style="width: 280px;">
            <div class="col-sm-6" style="padding:0px;font-size:16px !important;color: #333333;padding-left: 10px;">
              Số dư:&nbsp;
            </div>
            <div class="col-sm-6" style="padding:0px;text-align:right">
              <input type="hidden" name="_xsrf" value="2|6a37f94e|37c42e4cce55c01031f414328ccd69aa|1594861975">
              <span id="user-balance" class="wallet_balance" style="font-weight:bold;font-size:16px !important">0.0 USD</span>
            </div>
          </div>
        </div>
        <div class="tradeMoney">
          <div class="magazine-sb-categories margin-bottom-5 fullWidth">

            <a href="#" class="btn btn-success trade deposit-page-btn">

              <b>Nạp Tiền</b></a>
          </div>
          <div class="magazine-sb-categories margin-bottom-5 fullWidth">

            <a href="#" class="btn btn-outline-secondary trade withdraw-page-btn">

              <b>Rút Tiền</b></a>
          </div>

          <div class="magazine-sb-categories margin-bottom-20 fullWidth">

            <a href="#" class="btn btn-outline-info trade">

              <b>Chuyển Tiền Nội Bộ</b></a>
          </div>
          <div id="compose-btn-wapper"></div>
          <div id="admin-page-btn-wapper"></div>
          <div id="news-compose-btn-wapper"></div>
        </div>
      </div>
    <div class="info-container"> 
        <div class="noti-container">
            <span class="badge" id="noti-warning"></span>
            <h3>Notification </h3>
            <button id="show-noti-btn" class="Button-Notification">Show Notification</button>
            <div id="noti-list"></div>
            <button id="hide-noti-btn" class="Button-Notification">Hide Notification</button>
        </div>
    </div>
  </div>
  
  <!-- Show ra các dự đoán và tin tức -->
  <div style="flex-grow: 7" class="flex-left body-main" id="viewList">
      <!-- (B-I) Phần chứa dự đoán-->
      <div class="ideas-container" style="margin-right: 10px;">
        <!-- (B-I-1) Tiêu đề, filter và thanh search -->
        <div class="content-header">Dự Đoán Của Quỹ</div>
        <div class=" flex-between">
        <div class="radio-btn-container">
            <label class="radio-input-container left-side">
                <input id="date-filter" type="radio" name="radio" checked="checked" value="newFilter">
                <span id="date-filter-btn" class="checkmark" title="Mới nhất"><i class="far fa-clock icon fa-1x"></i></span>
            </label>
            <label class="radio-input-container right-side">
                <input id="like-filter" type="radio" name="radio" value="likeFilter">
                <span id="like-filter-btn" class="checkmark" title="Nhiều người thích nhất"><i class="far fa-thumbs-up icon"></i></span>
            </label>
        </div>
        <div class="btn-search">
            <input class="hover" id="ideas-search" type="text" placeholder="Tìm kiếm theo tiêu đề..">
            <button class="hover" id="ideas-submit" type="submit"><i class="fa fa-search"></i></button>
        </div>
        </div>
        <!-- (B-I-2) Nội dung của các dự đoán -->
        <div id="idea-list"></div>
      </div>  
      <!-- (B-II)Phần chứa tin tức-->       
      <div id="news-container" style="margin-left: 10px;"> 
        <div class=" flex-between">
            <div class="content-header">
              Tổng hợp tin tức
            </div>
        </div>
        <!-- (B-I-2) Nội dung của các tin tức -->
        <div id="news-list"></div>
      </div>  
</div>  

</div>
` + components.footer;

components.admin_page = `
<h1>ADMIN PAGE - TRANG THÔNG TIN CỦA ADMIN</h1>
<h2>DEMO</h2>
<div class="header">
<button class="main-view-btn">Trang Chủ</button>
<button id="sign-out-button">Sign Out</button>
</div>
<div id="pending-idea-list"></div>
<h2>END DEMO</h2>
<p>====================================================================</p>
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

components.profile_page =
    //Header
    `
  <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top heg">
    <a class="navbar-brand main-view-btn" href="#"><img src="../ThocThom-Project/images/logo.png" alt="" class="logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item main-view-btn">
          <a class="links nav-link " href="#"><span>MAIN</span><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item links profile-page-btn">
          <a class="links nav-link active" href="#"><span>PROFILE</span><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item links deposit-page-btn">
          <a class="links nav-link " href="#"><span>DEPOSIT</span><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item links withdraw-page-btn">
          <a class="links nav-link" href="#"><span>WITHDRAW</span><span class="sr-only">(current)</span></a>
        </li>
      </ul>   
    </div>
    <div class="form-inline mt-2 mt-md-0">
    <a class="nav-link links" href="#" style="color:#d00000;margin-bottom: 20px;" id="sign-out-button"><span>ĐĂNG XUẤT </span><i class="fas fa-sign-out-alt"></i></a>
            </div>
  </nav>
  </header>`
  //End Header
  +
  //Main 
  `
  <div class="spaceForHeader"></div>
  <div class="profile-container">
      <div style="display: flex; background-color: #2A2E39;">
          <div>
              <a href="#published-charts"  style="padding: 20px 0px 20px 50px;">
                  <img style="width:171px;height:171px" id="profile-avatar" src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220,0,20,20%22%20width=%22171%22%20height=%22171%22%3E%3Crect%20height=%2220%22%20width=%2220%22%20fill=%22hsl%28171,25%25,50%25%29%22/%3E%3Ctext%20fill=%22white%22%20x=%2210%22%20y=%2214.8%22%20font-size=%2214%22%20font-family=%22Trebuchet%20MS,Arial,sans-serif%22%20text-anchor=%22middle%22%3ED%3C/text%3E%3C/svg%3E"
                  alt="">
              </a>
          </div>
          <div style="margin-left: 50px;">
                  <div>
                      <span>
                          <h1 id="profile-name" style="color: white;padding: 50px;">
                            ducthinh1341993
                            <br>
                            <span style="font-size:1rem;color: #787b86">THÀNH VIÊN</span></h1>
                            </h1>
                          
                      </span>
                  </div>
            </div>
            <div style="margin-right: 20px;">
                  <div>
                      <span>
                          <h4 id="profile-follower-numbers" style="color: #787b86;padding: 50px 20px;">
                            <i class="fas fa-user-friends"></i>
                            100
                            <br>
                            <span style="font-size:1rem">NGƯỜI THEO DÕI</span>
                          </h4>
                      </span>
                  </div>
            </div>
            <div style="margin-right: 20px;">
                <div>
                    <span>
                        <h4 id="profile-idea-numbers" style="color: #787b86;padding: 50px 20px;">
                          <i class="fas fa-edit"></i>
                          100
                          <br>
                          <span style="font-size:1rem">BÀI VIẾT</span>
                        </h4>
                    </span>
                </div>
            </div>
            <div style="margin-right: 20px;">
                <div>
                    <span>
                        <h4 id="profile-guess-percent" style="color: #787b86;padding: 50px 20px;">
                          <i class="fas fa-percent"></i>
                          80
                          <br>
                          <span style="font-size:1rem">TỶ LỆ DỰ ĐOÁN ĐÚNG</span>
                        </h4>
                    </span>
                </div>
            </div>
        </div>
      <div id="profile-menu" style="display: flex;margin: 0px 0px 20px 0px;height: 50px;background-color: royalblue;">
              <div id='yTuong' class="tap">Ý tưởng</div>
              <div id="nguoiTheoDoi" class="tap">Người theo dõi</div>
              <div id="dangTheoDoi" class="tap">Đang theo dõi</div>
              <div id="Edit" class="tap">Cài đặt</div>
      </div>
      <div id="hienThi" style="display: flex; justify-content: center;">
      </div>
  </div>
  `
  + 
  //Footer
components.footer;
components.idea_view_page = 
  //Header
  `
  <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top heg">
    <a class="navbar-brand main-view-btn" href="#"><img src="../ThocThom-Project/images/logo.png" alt="" class="logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item main-view-btn ">
          <a class="links nav-link active" href="#"><span>MAIN</span><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item links profile-page-btn">
          <a class="links nav-link " href="#"><span>PROFILE</span><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item links deposit-page-btn">
          <a class="links nav-link " href="#"><span>DEPOSIT</span><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item links withdraw-page-btn">
          <a class="links nav-link" href="#"><span>WITHDRAW</span><span class="sr-only">(current)</span></a>
        </li>
      </ul>   
    </div>
    <div class="form-inline mt-2 mt-md-0">
    <a class="nav-link links" href="#" style="color:#d00000;margin-bottom: 20px;" id="sign-out-button"><span>ĐĂNG XUẤT </span><i class="fas fa-sign-out-alt"></i></a>
            </div>
  </nav>
  </header>`
    //End Header
    +
    //Main 
    `
  <div class="spaceForHeader"></div>
  <div class="profile-container">
      <div style="display: flex; background-color: #2A2E39; margin-left: 50px; margin-right: 50px;">
          <div>
              <a href="#published-charts">
                  <img id="profile-avatar" src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220,0,20,20%22%20width=%22171%22%20height=%22171%22%3E%3Crect%20height=%2220%22%20width=%2220%22%20fill=%22hsl%28171,25%25,50%25%29%22/%3E%3Ctext%20fill=%22white%22%20x=%2210%22%20y=%2214.8%22%20font-size=%2214%22%20font-family=%22Trebuchet%20MS,Arial,sans-serif%22%20text-anchor=%22middle%22%3ED%3C/text%3E%3C/svg%3E"
                  alt="">
              </a>
              </div>
              <div style="margin-left: 50px;">
                  <div>
                      <span>
                          <h1 id="profile-name" style="color: white;">ducthinh1341993</h1>
                      </span>
                  </div>
              </div>
          </div>
          <div style="display: flex;margin: 0px 50px 20px 50px;height: 50px;background-color: royalblue;">
              <div id='yTuong' class="tap">Ý tưởng</div>
              <div id="nguoiTheoDoi" class="tap">Người theo dõi</div>
              <div id="dangTheoDoi" class="tap">Đang theo dõi</div>
              <div id="Edit" class="tap">Cài đặt</div>
          </div>
      </div>
  </div>
  `
  + 
  //Footer
  components.footer;
components.deposit_page = 
  //Header
  `
  <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top heg">
    <a class="navbar-brand main-view-btn" href="#"><img src="../ThocThom-Project/images/logo.png" alt="" class="logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item main-view-btn">
          <a class="links nav-link " href="#"><span>MAIN</span><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item links profile-page-btn">
          <a class="links nav-link " href="#"><span>PROFILE</span><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item links deposit-page-btn">
          <a class="links nav-link active " href="#"><span>DEPOSIT</span><span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item links withdraw-page-btn">
          <a class="links nav-link" href="#"><span>WITHDRAW</span><span class="sr-only">(current)</span></a>
        </li>
      </ul>   
    </div>
    <div class="form-inline mt-2 mt-md-0">
    <a class="nav-link links" href="#" style="color:#d00000;margin-bottom: 20px;" id="sign-out-button"><span>ĐĂNG XUẤT </span><i class="fas fa-sign-out-alt"></i></a>
            </div>
  </nav>
  </header>`
    //End Header
    +
    //Main 
    `
  <div class="spaceForHeader"></div>
  <div class="deposit-container">
  <div class="deposit-form-container">
  <h1>GIAO DIỆN NẠP TIỀN</h1>
  <form id="deposit-form">
      <div class="deposit-input">
          <p class="input-title">Nhập số tiền cần nạp</p> 
          <input name="depositAmount" id="depositAmount" type="number" placeholder="Số tiền ..." autocomplete='off' reqired />
          <br><span class="message-error" id="deposit-amount-error"></span>
      </div>
      <div class="deposit-input">
          <p class="input-title">Lựa chọn phương thức nạp tiền</p> 
          <label>
            <input type="radio" checked="checked" name="depositType">
            Nạp Demo
          </label><br>
          <label >
            <input type="radio" name="depositType">
            Thẻ VISA <span class="message-error">(chưa hỗ trợ)</span>
          </label><br>
          <label>
            <input type="radio" name="depositType">
            Ngân hàng trực tuyến <span class="message-error">(chưa hỗ trợ)</span>
          </label><br>
          <label>
            <input type="radio" name="depositType">
            Ví điện tử <span class="message-error">(chưa hỗ trợ)</span>
          </label>
      </div>
      <button class="deposit-submit-btn" type="submit" id="deposit-apply-btn">NẠP TIỀN</button>
      <span class="message-success" id="deposit-success"></span>
      <span class="message-error" id="deposit-error"></span>
  </form>
  </div>
  </div>
  ` +
    //Footer
    components.footer;

components.withdraw_page =
    //Header
    `
<header>
<nav class="navbar navbar-expand-md navbar-dark fixed-top heg">
  <a class="navbar-brand main-view-btn" href="#"><img src="../ThocThom-Project/images/logo.png" alt="" class="logo"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item main-view-btn">
        <a class="links nav-link " href="#"><span>MAIN</span><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item links profile-page-btn">
        <a class="links nav-link " href="#"><span>PROFILE</span><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item links deposit-page-btn">
        <a class="links nav-link  " href="#"><span>DEPOSIT</span><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item links withdraw-page-btn">
        <a class="links nav-link active" href="#"><span>WITHDRAW</span><span class="sr-only">(current)</span></a>
      </li>
    </ul>   
  </div>
  <div class="form-inline mt-2 mt-md-0">
  <a class="nav-link links" href="#" style="color:#d00000;margin-bottom: 20px;" id="sign-out-button"><span>ĐĂNG XUẤT </span><i class="fas fa-sign-out-alt"></i></a>
          </div>
</nav>
</header>`
    //End Header
    +
    //Main 
    `
<div class="spaceForHeader"></div>
<div class="withdraw-container">
  <div class="withdraw-form-container">
  <h1>GIAO DIỆN RÚT TIỀN</h1>
  <form id="withdraw-form">
      <div class="withdraw-input-wrapper">
          <p class="input-title">Nhập số tiền cần rút</p> 
          <input name="withdrawAmount" id="withdrawAmount" type="number" placeholder="Số tiền ..." autocomplete='off' reqired />
      </div>
      <div class="withdraw-input-wrapper">
          <p class="input-title">Lựa chọn phương thức rút tiền</p> 
          <label>
            <input type="radio" checked="checked" name="withdrawType">
            Nạp Demo
          </label><br>
          <label >
            <input type="radio" name="withdrawType">
            Thẻ VISA <span class="message-error">(chưa hỗ trợ)</span>
          </label><br>
          <label>
            <input type="radio" name="withdrawType">
            Ngân hàng trực tuyến <span class="message-error">(chưa hỗ trợ)</span>
          </label><br>
          <label>
            <input type="radio" name="deposwithdrawTypeitType">
            Ví điện tử <span class="message-error">(chưa hỗ trợ)</span>
          </label>
      </div>
      <span id="withdraw-amount-error"></span>
      <button class="withdraw-submit-btn" type="submit" id="withdraw-apply-btn">RÚT TIỀN</button>
  </form>
  </div>
</div>
`
    //End Main
    +
    //Footer
    components.footer;

components.compose_page = `
<h1>COMPOSE PAGE - TRANG ĐĂNG BÀI</h1>
<h1>DEMO</h1>
<form id="compose">
    <!-- Title Input -->
    <div class="input-wrapper">
        <label for="title"><i class="fa fa-envelope"></i>Title</label>
        <input name="title" type="text" placeholder="Idea title" autocomplete='off' reqired />
    </div>
    <span class="title-error" id="compose-title-error"></span>
    <!-- Content Input -->
    <div class="input-wrapper">
        <label for="content"><i class="fa fa-lock"></i>Content</label>
        <input name="content" id="content" type="text"  style="height:100px; width:350px;" placeholder="Your Content" reqired />
    </div>
    <span class="content-error" id="compose-content-error"></span>
     <!-- Upload Input -->
     <h3>Upload file using firebase</h3>
        <input type="file" id="fileButton" name="">
        <progress id="progressBar" value="0" max="100" style="width:300px;" hidden=true></progress>
      <img width="100" id="photo-upload">
    <!-- Submit Comnpose Input -->
    <button type="submit" id="compose-btn">Đăng bài</button>
    <div class="message-error" id="compose-error"></div>
    <div class="message-success" id="compose-success"></div>
</form>
<h1>END DEMO</h1>
<p>====================================================================</p>
<h1>Các Button chuyển trang chính</h1>
<br>
<button class="main-view-btn">Quay lại Trang Chủ </button>
<br>
<button class="sign-in-btn">Log Out - Chán Vãi Out Thôi!</button>
<h1>Các chức năng chính</h1>
<p>- Đăng bài </p>
<p>- Up ảnh vào bài </p>
`;