let newsdata = [{
    link: 'https://vn.tradingview.com/chart/BTCUSDT/OYU2OY3a/',
    author: 'ProTraderNo1',
    linkAuthor: 'https://vn.tradingview.com/chart/BTCUSDT/OYU2OY3a/',
    avatar: 'https://s3.tradingview.com/8/86mMjgAN_mid.webp',
    image: 'https://s3.tradingview.com/8/86mMjgAN_mid.webp',
    title: "GBPUSD, MÔ HÌNH 3 ĐỈNH XUẤT HIỆN",
    content: 'Với tình hình đại dịch toàn cầu diễn biến phức tạp, các chính phủ tung nhiều gói kích thích nền kinh tế, dẫn đến tỉ giá các cặp tiền tệ biến động phức tạp thì việc dựa vào phân tích kỹ thuật để giao dịch như một lựa chọn tuyệt vời để tìm ra xu hướng. Hiện tại cặ',
    like: '3',
    createdAt: '15/7/2020'
}, {
    link: 'https://vn.tradingview.com/chart/GBPUSD/86mMjgAN/',
    author: 'Trongvinh-FA25',
    linkAuthor: 'https://vn.tradingview.com/chart/BTCUSDT/OYU2OY3a/',
    avatar: 'https://s3.tradingview.com/8/86mMjgAN_mid.webp',
    image: 'https://s3.tradingview.com/l/LeAx5k5V_mid.webp',
    title: "NHẬN ĐỊNH BTCUSD NGÀY 14.07 - Giao dịch theo sóng Elliott",
    content: 'Thân chào anh em, BTC vẫn đang tích lũy và sideway khó chị và chưa có hướng đi rõ ràng, rất khó cho anh em có cơ sở giao dịch vậy BTC sẽ vận động như thế nào tiếp theo anh em cùng xem nhận định ngày hôm nay nhé! Nội dung: 1. Context Market - Diễ',
    like: '13',
    createdAt: '14/7/2020'
}, {
    link: 'https://vn.tradingview.com/chart/BTCUSDT/LeAx5k5V/',
    author: 'Trongvinh-FA25',
    linkAuthor: 'https://vn.tradingview.com/chart/BTCUSDT/OYU2OY3a/',
    avatar: 'https://s3.tradingview.com/8/86mMjgAN_mid.webp',
    image: 'https://s3.tradingview.com/r/RtFQYm5a_mid.webp',
    title: "NHẬN ĐỊNH BTCUSD TUẦN 13 - 20/07 - Giao dịch theo sóng Elliott BTCUSDT",
    content: 'Thân chào anh em, Một tuần nữa lại bắt đầu! Tuần trước, BTC đã có những bước vận động như chúng ta đã nhận định và hiện tại BTC đang trong trạng thái tương đối khó nhằn, chúng ta cùng xem chiến lược của tuần này như thế nào nhé! Nội dung: 1',
    like: '',
    createdAt: '13/7/2020'
}, {
    link: 'https://vn.tradingview.com/chart/BTCUSDT/VuHFxV30/',
    author: 'Blogdautu',
    linkAuthor: 'https://vn.tradingview.com/chart/BTCUSDT/OYU2OY3a/',
    avatar: 'https://s3.tradingview.com/8/86mMjgAN_mid.webp',
    image: 'https://s3.tradingview.com/i/IDjuOdNQ_mid.webp',
    title: "Phân Tích Nhanh Bitcoin Ngày 14/07/2020 – Phe Bò Đang Suy Yếu ETHUSDTPERP",
    content: 'Chúng ta đã kết thúc tuần vừa rồi với các kịch bản và đồng coins đạt tỉ suất lợi nhuận tốt. Đến lúc này, lực của phe Bò đang có dấu hiệu suy yếu. Các bạn xem khung thời gian 12H, 4H cho cả Bitcoin và Ethereum, các bạn sẽ nhận thấy BTC đang đi trong 1 ',
    like: '20',
    createdAt: '16/7/2020'
}]

let search = document.getElementById('search')
let submit = document.getElementById('submit')

let newshtml

function shownews() {
    for (i = 0; i < 5; i++) {

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
                <a href="${newsdata[i].link}" target="blank">
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

                <a style="font-size: medium;font-weight: bold;color: blue;max-height: 80px;overflow: auto;" href="${newsdata[i].link}"
                    target="blank">${newsdata[i].title}</a>
                <div>
                    <p style="margin-block-start: 0;
                margin-block-end: 0;">${newsdata[i].content}</p>
                </div>

            </div>
            </li>`
    }
    newdata.innerHTML = newshtml
}
shownews()

submit.addEventListener('click', () => {
    timkiem()

})

search.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit").click();
    }
});