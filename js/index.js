window.onload = function() {

    firebase.auth().onAuthStateChanged(async function(user) {
        if (user != null) {
            view.showPage("mainView")

        } else {
            view.showPage("signIn")
        }
    })
}