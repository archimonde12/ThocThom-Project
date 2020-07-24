let newIdea = document.getElementById('newIdea')
let showForm = document.getElementById('showForm')

// showForm.addEventListener('click', () => {
//     if (showForm.innerHTML == 'Thêm idea mới') {
//         newIdea.innerHTML = `<form id="compose" style="width: 100%; background-color: #F1F1F1; border-radius: 5px;">
//         <div class="d-flex bd-highlight">
//         <div class="p-2 flex-shrink-1 bd-highlight" style="width: 350px; height: 350px; margin-right: 10px; ">
//         <img id="photo" style="border-radius: 5px; width: 350px; height: 350px; background-color: #CFCECE; background-size: cover; background-image: url('https://static.toiimg.com/photo/72975551.cms');">
//         <input type="file" id="fileButton" name="">
//         </div>

//             <div class="p-2 w-100 bd-highlight">
//                 <div style="font-weight: bold;">Thêm Idea Mới</div>
//                 <div class="input-wrapper">
//                     <div style="width: 100%;">
//                         <input style="width: 100%;border: 1px solid #2b579a;font-size:larger; font-weight: bold;" name="title" type="text" placeholder="Idea title" autocomplete='off' reqired />
//                     </div>
//                 </div>
//                 <span class="title-error" id="compose-title-error"></span>
//                 <!-- Content Input -->
//                 <div>
//                     <div>
//                         <label style="font-weight: bold;" for="content">Content</label>
//                     </div>
//                     <div id="content">

//                     </div>
//                 </div>
//                 <span class="content-error" id="compose-content-error"></span>
//             </div>
//             <div class="p-2 flex-shrink-1 bd-highlight" style="font-size: smaller; width: 400px;">
//             <div style="display: flex; justify-content: space-between;">
//                 <label for="">Dự đoán giá:</label>
//                 <select name="" id="" style="height: 20px; width: 70px;">
//                 <option value="">vàng</option>
//                 </select>
//             </div>
//             <div>
//                 <div style="display: flex; justify-content: space-between;">
//                     <label>Tăng hay giảm:</label>
//                     <select name="" id="" style="height: 20px; width: 70px;">
//                     <option value="">Tăng</option>
//                     <option value="">Giảm</option>
//                 </select>
//                 </div>
//                 <div>
//                     <input style="width: 100px; margin-right: 5px; height: 25px;" type="number">USD/ounce
//                 </div>
//             </div>
//             <div style="margin-top: 30px;">
//                 <label for="birthday">Thời điểm dự đoán:</label>
//                 <input style="height: 25px;" type="date" name="birthday">
//                 <div>
//                     Sai số:<span>234235</span>
//                 </div>
//             </div>

//             <div style="display: flex; justify-content: flex-end;">
//                 <button style="margin-right: 10px; color: white; background-color:#2B579A ; border-radius: 5px;" type="submit">Đăng bài</button>
//             </div>
//             <div class="message-error" id="compose-error"></div>
//             <div class="message-success" id="compose-success"></div>
//         </div>
//         </div>

//     </form>`
//         initSample();
//         showForm.innerHTML = 'Huỷ'
//     } else {
//         newIdea.innerHTML = ''
//         showForm.innerHTML = 'Thêm idea mới'
//     }

//     // let pickImage = document.getElementById('pickImage')
//     // pickImage.addEventListener('click', function() {
//     //     console.log('hello')
//     //     pickImage.style.backgroundImage = `url('https://static.toiimg.com/photo/72975551.cms')`
//     // })

// })

showForm.addEventListener('click', function() {
    newIdea.style.display = 'initial';
})

let buttonClose = document.getElementById("buttonClose")
buttonClose.addEventListener('click', function() {
    newIdea.style.display = 'none';
})
initSample()