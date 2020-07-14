window.onload = function() {
    let IsUserLogin=true;
    if(IsUserLogin){
        view.showPage("mainView")
    }
    else
    view.showPage("signIn")
}
