const pagerScreen = document.getElementById('pager-screen')
const phoneScreen = document.getElementById('phone-screen')
const reset = document.getElementById('reset')
const send = document.getElementById('send')
const pagerAudio = new Audio('power_rangers_pager.mp3')
const beep = new Audio('beep.mp3')

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        phoneScreen.textContent += this.textContent
    })
})

reset.addEventListener('click', function() {
    phoneScreen.textContent = ''
})

send.addEventListener('click', function() {
    beep.play()
    
    setTimeout(function() {
        beep.currentTime = 0;
        beep.play()
    }, 1300)
    
    setTimeout(function() {
        pagerScreen.textContent = phoneScreen.textContent
        pagerAudio.play()
    }, 2000)
})