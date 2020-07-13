window.onload = function() {
    //Test view
    //Set all button
    document.getElementById("admin-page").onclick = function(){
        view.showPage("adminPage")
    }

    document.getElementById("compose-page").onclick = function(){
        view.showPage("composePage")
    }

    document.getElementById("deposit-page").onclick = function(){
        view.showPage("depositPage")
    }

    document.getElementById("idea-view-page").onclick = function(){
        view.showPage("ideaViewPage")
    }

    document.getElementById("main-view").onclick = function(){
        view.showPage("mainView")
    }

    document.getElementById("profile-page").onclick = function(){
        view.showPage("profilePage")
    }

    document.getElementById("sign-in").onclick = function(){
        view.showPage("signIn")
    }

    document.getElementById("sign-up").onclick = function(){
        view.showPage("signUp")
    }

    document.getElementById("withdraw-page").onclick = function(){
        view.showPage("withdrawPage")
    }
   
}
