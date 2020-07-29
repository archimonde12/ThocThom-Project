let NutYTuong = document.getElementById('yTuong')
let hienThi = document.getElementById('hienThi')
    //Tạo chức năng của nút Ý Tưởng
NutYTuong.addEventListener('click', function() {
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
        NutYTuong.style.backgroundColor = '#1E609E'
    })
    //Tạo chức năng của nút Người Theo Dõi
let NutNguoiTheoDoi = document.getElementById('nguoiTheoDoi')
NutNguoiTheoDoi.addEventListener('click', function() {
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
        <button style="margin: 20px 20px 20px 0px; outline: none; border: 1px soild #ddd; border-radius: 10px; color: #00897B;">Theo dõi lại</button>
    </div>
</div>`
    NutNguoiTheoDoi.style.backgroundColor = '#1E609E'
})

//Tạo chức năng của nút Đang Theo Dõi
let NutDangTheoDoi = document.getElementById('dangTheoDoi')
NutDangTheoDoi.addEventListener('click', function() {
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
})

//Tạo chức năng của nút Sửa
let NutEdit = document.getElementById('Edit')
NutEdit.addEventListener('click', function() {
    hienThi.innerHTML = `        <div style="justify-content: space-around; padding: 0px 350px 50px 350px; display: flex;">
    <form style=" padding-top: 40px;" id="signUp">
        <h2 class="nameIf">Personal Details</h2>
        <div class="form-row">
            <div class="form-group col-md-12">
                <div>Hình đại diện:</div>
                <img style="width: 80px;height: 80px;" src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220,0,20,20%22%20width=%22171%22%20height=%22171%22%3E%3Crect%20height=%2220%22%20width=%2220%22%20fill=%22hsl%28171,25%25,50%25%29%22/%3E%3Ctext%20fill=%22white%22%20x=%2210%22%20y=%2214.8%22%20font-size=%2214%22%20font-family=%22Trebuchet%20MS,Arial,sans-serif%22%20text-anchor=%22middle%22%3ED%3C/text%3E%3C/svg%3E"
                    alt="">
                <input type="file" name="" id="">
            </div>
            <div class="form-group col-md-12">
                <label for="email"><span class="warning"></span>Email:</label>
                <span>ducthinh1341993@gmail.com</span>
            </div>

            <div class="form-group col-md-6">
                <label for="name"><span class="warning"></span>Display Name</label>
                <input name="name" type="text" class="form-control" id="rePassword4">
                <span class="warning" id="name-error"></span>
            </div>

            <div class="form-group col-md-6">
                <label><span class="warning"></span>Phone Number</label>
                <input name="phoneNumber" type="text" class="form-control" id="rePassword4">
                <span class="warning" id="phone-number-error"></span>
            </div>

        </div>
        <div class="form-group">
            <label for="address"><span class="warning"></span>Address</label>
            <input name="address" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            <span class="warning" id="address-error"></span>
        </div>
        <div style="display: flex; justify-content: flex-end;margin-right: 50px;">
            <input name="login" id="sign-up-btn" value="Save" type="submit" class="success" style="float:right">
            <span class="warning" id="sign-up-error"></span>
            <span id="sign-up-success"></span>
        </div>
    </form>
</div>`
})