let newIdea = document.getElementById('newIdea')
let showForm = document.getElementById('showForm')

showForm.addEventListener('click', function() {
    newIdea.style.display = 'initial';
    document.getElementById("cke_1_contents").style.height = "250px";
})

let buttonClose = document.getElementById("buttonClose")
buttonClose.addEventListener('click', function() {
    newIdea.style.display = 'none';
})
initSample()