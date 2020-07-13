let view={}

view.showPage = async function(namePage){
    let content = document.getElementById('content')
    switch (namePage) {
        case 'signIn': 
            content.innerHTML=components.sign_in;
            break;
        case 'signUp':
            content.innerHTML=components.sign_up;
            break;
        case 'mainView':
            content.innerHTML=components.main_view;
            break;
        case 'adminPage':
            content.innerHTML=components.admin_page;
            break;
        case 'profilePage':
            content.innerHTML=components.profile_page;
            break;
        case 'composePage':
            content.innerHTML=components.compose_page;
            break;
        case 'ideaViewPage': 
            content.innerHTML=components.idea_view_page;
            break;
        case 'depositPage':
            content.innerHTML=components.deposit_page;
            break;
        case 'withdrawPage':
            content.innerHTML=components.withdraw_page;
            break;
    }
}