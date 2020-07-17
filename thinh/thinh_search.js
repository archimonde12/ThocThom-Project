let data = [{
    link: 'https://vn.tradingview.com/chart/BTCUSDT/OYU2OY3a/',
    author: 'ProTraderNo1',
    linkAuthor: 'https://vn.tradingview.com/chart/BTCUSDT/OYU2OY3a/',
    avatar: 'https://tech.comdy.vn/content/images/2020/03/trung-nguyen-avatar.png',
    image: 'https://s3.tradingview.com/8/86mMjgAN_mid.webp',
    title: "GBPUSD, MÔ HÌNH 3 ĐỈNH XUẤT HIỆN",
    content: 'Với tình hình đại dịch toàn cầu diễn biến phức tạp, các chính phủ tung nhiều gói kích thích nền kinh tế, dẫn đến tỉ giá các cặp tiền tệ biến động phức tạp thì việc dựa vào phân tích kỹ thuật để giao dịch như một lựa chọn tuyệt vời để tìm ra xu hướng. Hiện tại cặ',
    like: 3,
    createdAt: '"2018-08-13 17:17:30.0"'
}, {
    link: 'https://vn.tradingview.com/chart/GBPUSD/86mMjgAN/',
    author: 'Trongvinh-FA25',
    linkAuthor: 'https://vn.tradingview.com/chart/BTCUSDT/OYU2OY3a/',
    avatar: 'https://tech.comdy.vn/content/images/2020/03/trung-nguyen-avatar.png',
    image: 'https://s3.tradingview.com/l/LeAx5k5V_mid.webp',
    title: "NHẬN ĐỊNH BTCUSD NGÀY 14.07 - Giao dịch theo sóng Elliott",
    content: 'Thân chào anh em, BTC vẫn đang tích lũy và sideway khó chị và chưa có hướng đi rõ ràng, rất khó cho anh em có cơ sở giao dịch vậy BTC sẽ vận động như thế nào tiếp theo anh em cùng xem nhận định ngày hôm nay nhé! Nội dung: 1. Context Market - Diễ',
    like: 13,
    createdAt: '2018-08-16 17:25:30.0'
}, {
    link: 'https://vn.tradingview.com/chart/BTCUSDT/LeAx5k5V/',
    author: 'Trongvinh-FA25',
    linkAuthor: 'https://vn.tradingview.com/chart/BTCUSDT/OYU2OY3a/',
    avatar: 'https://tech.comdy.vn/content/images/2020/03/trung-nguyen-avatar.png',
    image: 'https://s3.tradingview.com/r/RtFQYm5a_mid.webp',
    title: "NHẬN ĐỊNH BTCUSD TUẦN 13 - 20/07 - Giao dịch theo sóng Elliott BTCUSDT",
    content: 'Thân chào anh em, Một tuần nữa lại bắt đầu! Tuần trước, BTC đã có những bước vận động như chúng ta đã nhận định và hiện tại BTC đang trong trạng thái tương đối khó nhằn, chúng ta cùng xem chiến lược của tuần này như thế nào nhé! Nội dung: 1',
    like: 1,
    createdAt: '2018-08-15 17:28:30.0'
}, {
    link: 'https://vn.tradingview.com/chart/BTCUSDT/VuHFxV30/',
    author: 'Blogdautu',
    linkAuthor: 'https://vn.tradingview.com/chart/BTCUSDT/OYU2OY3a/',
    avatar: 'https://tech.comdy.vn/content/images/2020/03/trung-nguyen-avatar.png',
    image: 'https://s3.tradingview.com/i/IDjuOdNQ_mid.webp',
    title: "Phân Tích Nhanh Bitcoin Ngày 14/07/2020 – Phe Bò Đang Suy Yếu ETHUSDTPERP",
    content: 'Chúng ta đã kết thúc tuần vừa rồi với các kịch bản và đồng coins đạt tỉ suất lợi nhuận tốt. Đến lúc này, lực của phe Bò đang có dấu hiệu suy yếu. Các bạn xem khung thời gian 12H, 4H cho cả Bitcoin và Ethereum, các bạn sẽ nhận thấy BTC đang đi trong 1 ',
    like: 20,
    createdAt: '2018-08-14 17:28:30.0'
}]

// let search = document.getElementById('search')
// let submit = document.getElementById('submit')
let newdata = document.getElementById('newdata')


//hiển thị bài đăng
function shownews(newsdata) {
    let newshtml
    if (newsdata.length <= 0) {
        newshtml = `Không Tìm Thấy Thông Tin`
    } else {
        for (i = newsdata.length - 1; i >= 0; i--) {
            newshtml += `<li  style="float: left;
            margin-left: 50px;
        width: 70%;
        border: 1px solid #ededed;
        background: #f4f3f3;
        margin-top: 15px;
        position: relative;
        display: flex;
        justify-content: space-between;
        ">
                <div style="display: inline-block">
                    <a id="link" href="${newsdata[i].link}" target="blank">
                        <img style="  border: 1px solid #ddd;
                        border-radius: 4px;
                        padding-right: 5px;width: 200px;
                    height: 150px;
                    float: left;" src="${newsdata[i].image}"></a>
                </div>
                <div style="display: inline-block;width: 700px;">
    
                    <a style="font-size: medium;font-weight: bold;color: blue;max-height: 80px;overflow: auto;" href="${newsdata[i].link}"
                        target="blank">${newsdata[i].title}</a>
                    <div>
                        <p style="margin-block-start: 0;
                    margin-block-end: 0;">${newsdata[i].content}</p>
                    </div>
    
                </div>
                <div style="display: inline-block;width: 100px;">
    
                <div style="display: inline-block">
                <a href="${newsdata[i].linkAuthor}" target="blank">
                    <img style=" height: 50px; idth: 50px;
                float: left;" src="${newsdata[i].avatar}"></a>
            </div>
                    <div>
                    <a style="font-size: medium;font-weight: bold;color: blue;max-height: 80px;overflow: auto;" href="${newsdata[i].linkAuthor}"
                    target="blank">${newsdata[i].author}</a>
                    </div>
                    <p>lượt like ${newsdata[i].like}</p>
                    <p>${newsdata[i].createdAt}</p>
    
                </div>
                </li>`
        }
    }

    newdata.innerHTML = newshtml
}

//tìm kiếm
let search = document.getElementById('search')
let submit = document.getElementById('submit')
let filterdata = data
shownews(data)

function timkiem(cachtim) {
    switch (cachtim) {
        case "title":
            filterdata = []
            for (i = 0; i < data.length; i++) {
                if (data[i].title.toLowerCase().search(`${search.value.toLowerCase()}`) != -1) {
                    filterdata.push(data[i])
                }
            }
            break
        case "author":
            filterdata = []
            for (i = 0; i < data.length; i++) {
                if (data[i].author.toLowerCase().search(`${search.value.toLowerCase()}`) != -1) {
                    filterdata.push(data[i])
                }
            }
    }
}

//tìm theo checkbox
let checkboxAuthor = document.getElementById('checkboxAuthor')
let checkboxLike = document.getElementById('checkboxLike')

submit.addEventListener('click', () => {
    if (checkboxAuthor.checked == false) {
        timkiem("title")
        shownews(filterdata)
    } else {
        timkiem("author")
        shownews(filterdata)
    }

    console.log(filterdata)
})

search.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});

//sắp xếp
let filter = document.getElementById('filter')

function changeFilter() {
    if (filter.value == 'Lượt like') {
        filterdata.sort(function(a, b) { return b.like - a.like })
        shownews(filterdata)
    } else if (filter.value == 'Ngày đăng') {
        filterdata.sort(function(a, b) { return new Date(a.createdAt) - new Date(b.createdAt) })
        shownews(filterdata)
    }
}