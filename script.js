let task = "";
let timer;
let seconds = 10;


function startFocus(){

    task = document.getElementById("taskInput").value;

    if(task === ""){
        task = "完成一个专注任务";
    }

    document.getElementById("showTask").innerHTML = task;

    changePage("home","focus");

    startTimer();

}



function startTimer(){

    seconds = 10;

    timer = setInterval(()=>{

        document.getElementById("timer").innerHTML =
        "00:" + seconds;


        if(seconds <= 5){

            document.querySelector(".big p").innerHTML =
            "🐦 小鸟正在旅行中...";

        }


        seconds--;


        if(seconds < 0){

            clearInterval(timer);

            finishFocus();

        }


    },1000);

}




function finishFocus(){

    changePage("focus","feedback");

}




function getReward(){

    changePage("feedback","reward");

}



function changePage(oldPage,newPage){

    document.getElementById(oldPage)
    .classList.remove("active");


    document.getElementById(newPage)
    .classList.add("active");

}
