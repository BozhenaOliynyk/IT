const inputColor = document.querySelector('#color-input');
const btnColorAdd = document.querySelector('#btn-color');
const btnStartStop = document.querySelector('.btn__start-stop');
const popupWin = document.querySelector(".popup-win");
const popupWinBg = document.querySelector(".popup-win__bg");
const popupWinBtn = document.querySelector(".popup-win__btn");
const popupWinClose = document.querySelector(".popup-win__close");
const popupLose = document.querySelector(".popup-lose");
const popupLoseBg = document.querySelector(".popup-lose__bg");
const popupLoseBtn = document.querySelector(".popup-lose__btn");
const popupLoseClose = document.querySelector(".popup-lose__close");
const timer = document.querySelector(".timer");

let numer = 1;
let mls = 1000;
let time = 30;

btnColorAdd.addEventListener('click', function () {
    let colors = inputColor.value.split(" ");
    colors.forEach(element => {
        let box = document.createElement('div');
        box.className = "box";
        box.setAttribute("id", numer++);
        box.style.background = element;
        document.body.append(box);
        console.log(box);
    })
    inputColor.classList.add('none');
    btnColorAdd.classList.add('none');

    btnStartStop.classList.add('active');

    timer.classList.add('active');

    btnStartStop.addEventListener('click', function () {

        btnStartStop.textContent = 'Stop';
        btnStartStop.classList.add('move');

        const boxes = document.querySelectorAll(".box");
        console.log(boxes)

        // boxes.forEach(setInterval(element => {
        //     element.style.animation = 'run 1s 1s infinite alternate'
        // }, 1000))





        // boxes.addEventListener('click', function () {
        //     let boxId = boxes.getAttribute("data-box");
        //     console.log(boxId);

        //     boxes.remove(boxId)
        // })

        let timeRun = setInterval(function () {
            time = time - 1;
            timer.textContent = '00:' + time;

            if (time < 10) {
                timer.textContent = '00:0' + time;
            };

            if (time == 0) {
                btnStartStop.style.animation = 'none';
                boxes.forEach(element => {
                    element.style.animation = 'none'
                })

                clearInterval(timeRun);

                popupLose.classList.add('active');
                popupLoseBg.classList.add('active');
                popupLoseBtn.addEventListener('click', function () {
                    popupLose.classList.remove('active');
                    popupLoseBg.classList.remove('active');
                })
                popupLoseClose.addEventListener('click', function () {
                    popupLose.classList.remove('active');
                    popupLoseBg.classList.remove('active');
                })

            };

            if (popupWin.classList.contains("active")) {
                time = time + 1
                clearInterval(timeRun);
            }

        }, 1000)


        btnStartStop.addEventListener('click', function () {
            btnStartStop.style.animation = 'none';
            boxes.forEach(element => {
                element.style.animation = 'none'
            })

            popupWin.classList.add('active');
            popupWinBg.classList.add('active');
            popupWinBtn.addEventListener('click', function () {
                popupWin.classList.remove('active');
                popupWinBg.classList.remove('active');
            })
            popupWinClose.addEventListener('click', function () {
                popupWin.classList.remove('active');
                popupWinBg.classList.remove('active');
            })
        })
    })
})

