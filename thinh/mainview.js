let ideaClick = document.getElementById('ideaClick')
let viewIdea = document.getElementById('viewIdea')
let ideaList = document.getElementById('ideaList')
let btnIdeaClose = document.getElementById('btnIdeaClose')
let body = document.getElementById('body')
ideaClick.addEventListener('click', function() {
    viewIdea.style.display = 'initial'
    ideaList.style.width = '1500px'
        // body.style.backgroundColor = '#F2F2F2'
})

btnIdeaClose.addEventListener('click', function() {
    viewIdea.style.display = 'none'
    ideaList.style.width = '1000px'
})