//console.log()
function digitalClock(){
    let now= new Date()
    let hrs= now.getHours()

    let min = now.getMinutes()

    let sec = now.getSeconds()
    let ampm = document.querySelector(`.ampm`)

    if(hrs >= 12){
        ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML= 'AM'
    }

    if(hrs > 12)


       

    document.querySelector('{.hours') .innerHTML = hrs < 10 ? '0' + hrs : hrs;

    document.querySelector('.minutes') .innerHTML = min < 10 ? '0' + min : min;

    document.querySelector('.seconds') .innerHTML = sec < 10 ? '0' + sec : sec;
}

setInterval(digitalClock, 50);
//