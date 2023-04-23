function UpTime(){
    var dateTime = new Date();
    var hr = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var real = document.getElementById("Real")
    if (hr>=12){
        real.innerHTML="pm"
    }else{
        real.innerHTML="AM"
    }
    if(hr>12){
        hr = hr-12;
    }
    hr = hr <10 ? "0" + hr : hr;
    min = min <10 ? "0" + min : min;
    sec = sec <10 ? "0" +sec : sec;

     document.getElementById("hour").innerHTML = hr;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;

}

setInterval(UpTime,10)
