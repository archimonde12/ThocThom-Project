function SetUpSignInSignUpPage() {
    try {
        let signIn = document.getElementById('signIn')
        let signUp = document.getElementById('signUp')
        let logIn = document.getElementById('log-in')
        let back = document.getElementById('back')

        logIn.addEventListener('click', () => {
            signIn.classList.add('active-dx')
            signUp.classList.add('inactive-sx')
            signUp.classList.remove("active-sx")
            signIn.classList.remove("inactive-dx")
        })

        back.addEventListener('click', () => {
            signUp.classList.add('active-sx')
            signIn.classList.add('inactive-dx')
            signIn.classList.remove("active-dx")
            signUp.classList.remove("inactive-sx")
        })
    }
    catch (error) {
        console.log(error)
    }
}

// trả về true nếu mọi giá trị trong mảng đúng và ngược lại
function isPassed(validateResult) {
    let isFail = validateResult.includes(false)
    if (isFail == true) {
        return false
    }
    return !isFail

}

//kiểm tra format email
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function refineData(rawData) {
    let data = rawData.data()
    data.id = rawData.id
    return data
}

function waitForSeconds(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, seconds * 1000);
    });
}
//Search id in array
function searchIdIndex(id, array) {
    let found;
    array.forEach((value, index) => {
        if (value.id == id) {
            found = index
        }
    })
    return found;
}

var initApp = function (id) {

    const fileButton = document.getElementById('fileButton');

    if (fileButton) {

        fileButton.addEventListener('change', function (e) {

            document.getElementById("progressBar").hidden = false

            uploadFile(e.target.files[0])

        });
    }


};

function uploadFile(file) {
    // Create the file metadata
    var metadata = {
        contentType: 'image/jpeg',
    };
    var uploadTask = firebase.storage().ref('img/' + Date.now()).put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            progressBar.value = progress;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        },
        function (error) {
            // Errors list: https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        },
        function () {
            // Upload completed successfully, now we can get the download URL

            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                var _img = document.getElementById('photo-upload');
                var newImg = new Image;
                newImg.onload = function () {
                    _img.src = this.src;
                }
                newImg.src = downloadURL;
                model.saveImgURL(downloadURL)

            });

        }
    );
}

function downloadImg(tagID, url) {
    let id = document.getElementById(tagID)
    id.src = url
}

function removeAccents(str) {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
}

//Chuyển số thành định dạng tiền
function numberToCurrency(amount, currency) {
    return amount.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})

//Tính toán thời gian từ thời điểm start đến bây giờ
function calculateTimeToNow(time) {
    let now = new Date();
    let seconds = Math.floor((now.getTime() - time.getTime()) / 1000);
    if (seconds < 60) { return (seconds + " giây trước") }
    else if (seconds < 3600) { return (Math.floor(seconds / 60) + " phút trước") }
    else if (seconds < 3600 * 24) { return (Math.floor(seconds / 3600) + " giờ trước") }
    else if (seconds < 3600 * 24 * 30) { return (Math.floor(seconds / (3600 * 24)) + " ngày trước") }
    else return (Math.floor(seconds / (3600 * 24 * 30)) + " tháng trước")
}

function composeJS() {
    let newIdea = document.getElementById('newIdea')
    let showForm = document.getElementById('showForm')

    showForm.addEventListener('click', function () {
        newIdea.style.display = 'initial';
        document.getElementById("cke_1_contents").style.height = "250px";
    })

    let buttonClose = document.getElementById("buttonClose")
    buttonClose.addEventListener('click', function () {
        newIdea.style.display = 'none';
    })
    initSample()
}

searchAvatar=function(email){
    for(let userInfo of model.allUsersInfo){
        if (userInfo.email==email) {
            return userInfo.other.avatarURL
        }
    }
}


