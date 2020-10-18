//bai 6
// var buttonRed = document.createElement("button")
// var buttonBlue = document.createElement("button")





// buttonRed.innerText = "Red"
// buttonBlue.innerText = "Blue"

// buttonRed.style.width = "70px"
// buttonRed.style.marginRight = "20px"
// buttonBlue.style.width = "70px"

// document.body.appendChild(buttonRed)
// document.body.appendChild(buttonBlue)

// buttonRed.addEventListener("click", ()=>{
//     document.bgColor = "red"
// })
// buttonBlue.addEventListener("click", ()=>{
//     document.bgColor = "blue"
// })

//-------------------------------------------------------------------


//bai 9

// function dongho(){
//     var time = new Date()
//     var gio = time.getHours()
//     var phut = time.getMinutes()
//     var giay = time.getSeconds()
//     if(gio < 10){
//         gio = '0' + gio
//     }
//     if(phut < 10){
//         phut = '0' + phut
//     }
//     if(giay < 10){
//         giay = '0' + giay
//     }
//     var clock = document.getElementById("time")
//     clock.innerText = gio +":" +phut +":" + giay;
//     setTimeout("dongho()",1000);
// }
// dongho();
//-------------------------------------------------------------------


//bai 10
// var p = document.getElementById("tagP")
// var btnMore = document.getElementById("js-btn-more")
// var btnLess = document.getElementById("js-btn-less")
// btnLess.addEventListener('click',function(){
//     p.style.width = "200px"
//     p.style.overflow = "hidden"
    
// })
// btnMore.addEventListener("click",function(){
//     p.style.width = "auto"

// })

//--------------------------------------------------------------------------
//bai 13

var giay = 0 
var gio = 0 
var phut = 0
var timer,time_ele = document.getElementById("timer")
function timehandler(){
    giay++
    // console.log(giay)


    if(giay == 60){
        giay = 0;
        phut ++;
        // console.log(phut)
    }
    if(phut == 60){
        phut = 0;
        gio ++;
        // console.log(phut)
    }
}


// setInterval("timehandler()", 1000)
var formatHours = gio, formatMinutes =phut,formatSeconds =giay; 


function display(){
    if(gio<10){
        formatHours = '0' + gio
    }
    if(phut<10){
        formatMinutes = '0' + phut
    }
    if(gio<10){
        formatSeconds = '0' + giay
    }
   
    time_ele.innerText = formatHours + ":" + formatMinutes + ":" + formatSeconds;

}

var start = document.getElementById("btn-start")
var start = document.getElementById("btn-start")
var reset = document.getElementById("btn-reset")

start.addEventListener('click', function(){
    timer = setInterval(timehandler, 1000)
})
pause.addEventListener('click', function(){
    timer = clearInterval(timer)
})
reset.addEventListener('click', function(){
    timer = clearInterval(timer)
    hours=0;
    minutes=0;
    seconds=0;
    time_ele.innerHTML = '00:00:00';
})




