// Set the configuration for your app
// TODO: Replace with your app's config object

// Get a reference to the storage service, which is used to create references in your storage bucket

var storage = firebase.storage();


/**
 * Initializes the app.
 */
var initApp = function() {

    const fileButton = document.getElementById('fileButton');

    if (fileButton) {

        fileButton.addEventListener('change', function(e) {

            document.getElementById("progressBar").hidden=false

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
        function(snapshot) {
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
        function(error) {
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
        function() {
            // Upload completed successfully, now we can get the download URL

            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                var _img = document.getElementById('photo');
                var newImg = new Image;
                newImg.onload = function() {
                    _img.src = this.src;
                }
                newImg.src = downloadURL;

            });

        }
    );
}


function downloadImg(tagID, url) {
    let id = document.getElementById(tagID)
    id.src = url
}

downloadImg('anh', 'https://firebasestorage.googleapis.com/v0/b/ci43-sign-up.appspot.com/o/img%2F1594982258891?alt=media&token=8ac95f58-375d-49b4-b0c1-837ce82b8cc7')

window.addEventListener('load', initApp);