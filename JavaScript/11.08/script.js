let deadline = '08-30-2022';
let inner = prompt();
function getTime(endtime) {
    let newTime = new Date(2022,1,1);
    console.log(newTime)

    let time = Date.parse(deadline) - Date.parse(new Date());    //parse перкводить всю дату в мілі секунди
    console.log(time)             //вказує різницю між двома вказаними датами

    let seconds = Math.round((time / 1000) % 60);
    let minutes = Math.round((time / 1000 / 60) % 60);
    let hours = Math.round((time / (1000 * 60 * 60) % 24));
    let days = Math.round(time / (1000 * 60 * 60 * 24))
    console.log(seconds + ' seconds');
    console.log(minutes + ' minutes');
    console.log(hours + ' hours');
    console.log(days + ' days');

    return{
        'total':time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
} 


function setTime (id, endTime){
    let timer1 = document.getElementById(id)
    let seconds = timer1.querySelector('.seconds')
    let minutes = timer1.querySelector('.minutes')
    let hours = timer1.querySelector('.hours')
    let days = timer1.querySelector('.days')
    let myInterval = setInterval(updateTime, 1000)
    console.log(timer1)

    function updateTime(){
        let t = getTime(endTime);
        console.log(t);
        seconds.textContent = `${t.seconds} seconds`;
        minutes.textContent = `${t.minutes} minutes`;
        hours.textContent = `${t.hours} hours`;
        days.textContent = `${t.days} days`;
    }

    if(time.total <= 0){
        clearInterval(myInterval)
    }

    updateTime()
}

setTime('timer1', inner)