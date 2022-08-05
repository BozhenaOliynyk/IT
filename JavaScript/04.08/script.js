const inputColor = document.querySelector('#color-input');
const btnColorAdd = document.querySelector('#btn-color');
const btnStartStop = document.querySelector('.btn__start-stop')

btnColorAdd.addEventListener('click', function () {
    let colors = inputColor.value.split(" ");
    colors.forEach(element => {
        let box = document.createElement('div')
        box.className = "box";
        box.style.background = element;
        document.body.append(box)
    })

    inputColor.classList.add('none')
    btnColorAdd.classList.add('none')

    btnStartStop.classList.add('active')

    btnStartStop.addEventListener('click', function () {
        btnStartStop.textContent = 'Stop'
        btnStartStop.style.animation = 'move 2s infinite alternate'

        btnStartStop.addEventListener('click', function () {
            btnStartStop.style.animation = 'none'
        })
    })
})





//      red blue green yellow purple black