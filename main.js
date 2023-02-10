let body = document.querySelector('#body')
let tun = document.querySelector('#tun')
let sText = document.querySelector('#s-text')
let dText = document.querySelector('#d-text')

tun.onclick = function () {
    if (tun.style.background == 'white') {
        tun.style.background = 'black'
        sText.style.color = 'black'
        body.style.background = 'white'
        dText.style.li.span.after.background = 'black'
    } else if (tun.style.background == 'black') {
        tun.style.border = 'white'
    }

    else {
        tun.style.background = 'white'
        tun.style.background == 'black'
    }

}