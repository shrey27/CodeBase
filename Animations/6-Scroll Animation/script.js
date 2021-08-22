const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight/5*4
    // bottom of the 4/5 of the inner heigth of 
    // visible content
    // from the top of browser
    // if you scroll down visible content increases
    // and so more boxes can be accumulated
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}