const clockText=document.querySelector("#clock");

function clock() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    clockText.innerText=`${hour}:${minute}:${second}`;
}

clock();
setInterval(clock);