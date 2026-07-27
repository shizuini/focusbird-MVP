let focusMinutes = 40;
let remainingSeconds;
let timer;


// 时间选择

const timeRange = document.getElementById("timeRange");
const timeShow = document.getElementById("timeShow");


timeRange.addEventListener("input", function(){

    focusMinutes = Number(this.value);

    timeShow.innerHTML = focusMinutes + "分钟";

});




// 开始专注

function startFocus(){

    let task = document.querySelector(".task-input").value;


    if(task === ""){
        task = "完成一个专注任务";
    }


    remainingSeconds = focusMinutes * 60;



    document.querySelector(".container").innerHTML = `

    <h1>
    🐦 小鸟正在行动
    </h1>


    <div class="bird-card">

        <div class="bird">
        🐦
        </div>


        <p>
        小鸟正在陪伴你完成任务
        </p>


    </div>



    <div class="task-card">

        <h2>
        当前任务
        </h2>


        <p>
        ${task}
        </p>


        <div id="timer">
        </div>


        <p>
        专注过程中，小鸟正在积累旅行能量...
        </p>


    </div>

    `;



    updateTimer();

    timer = setInterval(updateTimer,1000);

}




// 倒计时

function updateTimer(){


    let minutes = Math.floor(remainingSeconds / 60);

    let seconds = remainingSeconds % 60;



    document.getElementById("timer").innerHTML =

    String(minutes).padStart(2,"0")

    +

    ":"

    +

    String(seconds).padStart(2,"0");



    if(remainingSeconds <=0){

        clearInterval(timer);

        showReward();

        return;

    }


    remainingSeconds--;

}





// 根据时间生成奖励

function showReward(){


    let rewardText;


    let birdAction;



    if(focusMinutes <=20){


        birdAction =
        "小鸟在庭院里休息，并收集植物";


        rewardText =
        "🌱 获得猫草 ×20<br>🌿 获得大麦草 ×20";


    }


    else if(focusMinutes <=40){


        birdAction =
        "小鸟完成了一次附近探索";


        rewardText =
        "🍪 获得小鸟零食<br>🧸 获得旅行玩具";


    }


    else{


        birdAction =
        "小鸟完成了一次远方旅行";


        rewardText =
        "🎒 获得旅行纪念品<br>📷 获得旅行照片";


    }



    document.querySelector(".container").innerHTML = `


    <h1>
    🎉 专注完成
    </h1>



    <div class="bird-card">

        <div class="bird">
        🐦
        </div>


        <p>
        ${birdAction}
        </p>


    </div>




    <div class="task-card">


        <h2>
        小鸟带回了：
        </h2>


        <p>
        ${rewardText}
        </p>



    </div>


    `;


}
