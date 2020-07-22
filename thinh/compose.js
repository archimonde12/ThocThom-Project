var fonts = document.querySelectorAll('select#fontChanger>option')
for (let i = 0; i < fonts.length; i++) {
    fonts[i].style.fontFamily = fonts[i].value
}

let fontSizeChanger = document.getElementById('fontSizeChanger')
for (let i = 1; i < 8; i++) {
    fontSizeChanger.innerHTML += `<option>${i}</option>`
}

let theContent = document.getElementById('theContent')
theContent.contentWindow.document.designMode = "on"

let theRibbon = document.getElementById("theRibbon")

for (let i = 0; i < theRibbon.children.length; i++) {
    document.getElementById(`${theRibbon.children[i].id}`).addEventListener('click', function() {
        theContent.contentWindow.document.execCommand(`${theRibbon.children[i].id}`)
    })
}

document.getElementById("fontColorButton").addEventListener('change', function(even) {
    theContent.contentWindow.document.execCommand('foreColor', false, even.target.value)
})

document.getElementById("highlightButton").addEventListener('change', function(even) {
    theContent.contentWindow.document.execCommand('backColor', false, even.target.value)
})

document.getElementById("fontChanger").addEventListener('change', function(even) {
    theContent.contentWindow.document.execCommand('fontName', false, even.target.value)
})

document.getElementById("fontSizeChanger").addEventListener('change', function(even) {
    theContent.contentWindow.document.execCommand('fontSize', false, even.target.value)
})

document.getElementById("createLink").addEventListener('click', function() {
    let url = prompt('Enter a Url', 'http://')
    theContent.contentWindow.document.execCommand('createLink', false, url)
})

document.getElementById("unlink").addEventListener('click', function() {
    theContent.contentWindow.document.execCommand('unlink')
})