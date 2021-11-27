const name = document.getElementById("name");
const username = document.getElementById("username");
const create = document.getElementById("create");
const newYear =new Date(2022, 0, 1);
const timeText = document.getElementById("timeText");

create.addEventListener("click",()=>{
    console.log("object")
    const uname = username.value.trim();
    uname.value = "";
    if(uname.length == 0){
        alert("Name Should not be Empty");
        return;
    }else{
        name.innerHTML = "From, "+uname;
    }

})


setInterval(()=>{
    today=new Date();
    // secondLeft = newYear.getTime() - today.getTime();
    var secondLeft = parseInt((newYear - today)/1000);
    var days = parseInt(secondLeft / 86400);
    secondLeft -= days * 86400;
    var hours = parseInt(secondLeft / 3600)
    secondLeft -= hours * 3600;
    var minute = parseInt(secondLeft/60);
    var second = secondLeft % 60;
    
    if(days <= 9){
        if(days <= 1) days = "0" + days+" Day ";
        else days= "0"+days+" Days ";
    }else days = days + " Days ";

    if(hours <= 9){
        if(hours <= 1) hours = "0" + hours+" Hour ";
        else hours= "0"+hours+" Hours ";
    }else hours = hours + " Hours "

    if(minute <= 9){
        if(minute <= 1) minute = "0" + minute+" Minute ";
        else minute= "0"+minute+" Minutes ";
    }else minute = minute + " Minutes ";
    
    if(second <= 9){
        if(second <= 1) second = "0" + second+" Second ";
        else second= "0"+second+" Seconds ";
    }else second = second + " Seconds";

    var time = days + hours + minute + second + " before ";

    timeText.innerText = time;


},1000)