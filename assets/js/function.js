const hours =  document.getElementById("hours");
const minutes =  document.getElementById("minutes");
const seconds =  document.getElementById("seconds");


const watch = setInterval(function time(){

    //Pega a hora, min e segundos do dia de hoje

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    //Acrescenta o 0 antes do número , se for menor que 10. Ex: 09

    if(hr < 10){
        hr = '0' + hr
    }
    if(m < 10){
        m = '0' + m
    }
    if(s < 10){
        s = '0' + s
    }

    //Aqui ele printa o valor no span com ID informado anteriormente
    
    hours.textContent = hr;
    minutes.textContent = m;
    seconds.textContent = s;


});