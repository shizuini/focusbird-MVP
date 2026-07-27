let focusMinutes = 40;
let remainingSeconds = 0;
let timer = null;
let currentTask = "";


// ======================
// 时间选择
// ======================

const timeRange = document.getElementById("timeRange");
const timeShow = document.getElementById("timeShow");


if(timeRange){

    timeRange.addEventListener("input", function(){

        focusMinutes = Number(this.value);

        timeShow.innerHTML = focusMinutes + "分钟";

    });

}



// ======================
// 开始专注
// ======================

function startFocus(){


    currentTask = document.querySelector(".task-input").value;


    if(currentTask.trim() === ""){

        currentTask = "完成一个专注任务";

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


        <p id="birdStatus">
        小鸟正在陪伴你完成任务
        </p>


    </div>




    <div class="task-card">


        <h2>
        当前任务
        </h2>


        <p>
        ${currentTask}
        </p>



        <div id="timer">
        </div>



        <p>
        专注过程中，小鸟正在积累旅行能量
        </p>



        <button onclick="pauseFocus()">

        暂停专注

        </button>



    </div>


    `;



    updateTimer();


    timer = setInterval(updateTimer,1000);



}






// ======================
// 倒计时
// ======================

function updateTimer(){


    let minutes = Math.floor(remainingSeconds / 60);

    let seconds = remainingSeconds % 60;



    let timerElement = document.getElementById("timer");


    if(timerElement){


        timerElement.innerHTML =

        String(minutes).padStart(2,"0")

        +

        ":"

        +

        String(seconds).padStart(2,"0");


    }




    if(remainingSeconds <= 0){


        clearInterval(timer);


        showReward();


        return;


    }


    remainingSeconds--;


}






// ======================
// 暂停专注
// ======================

function pauseFocus(){


    clearInterval(timer);



    let card = document.querySelector(".task-card");



    card.innerHTML += `


    <p id="pauseText">

    小鸟正在等待你的下一次行动

    </p>


    <button onclick="resumeFocus()">

    继续专注

    </button>


    `;


}







// ======================
// 继续专注
// ======================

function resumeFocus(){


    let pauseText = document.getElementById("pauseText");


    if(pauseText){

        pauseText.remove();

    }



    timer = setInterval(updateTimer,1000);


}







// ======================
// 根据时间生成小鸟奖励
// ======================

function showReward(){



    let birdAction = "";

    let reward = "";





    // 1-20分钟

    if(focusMinutes <= 20){



        birdAction =

        "小鸟在自己的院子里活动，照顾植物";



        reward =

        "🌿 获得大麦草 ×20<br><br>" +

        "🐦 小鸟成长经验 +5";



    }





    // 21-40分钟

    else if(focusMinutes <=40){



        birdAction =

        "小鸟完成了一次短途探索，带回新的发现";



        reward =

        "🍪 获得小鸟零食<br><br>" +

        "🧸 获得新的玩具<br><br>" +

        "🐦 小鸟成长经验 +10";



    }





    // 41-60分钟

    else{



        birdAction =

        "小鸟完成了一次远方旅行";



        reward =

        "🎒 获得旅行纪念品<br><br>" +

        "📷 获得旅行照片<br><br>" +

        "⭐ 小鸟成长经验 +20";



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

        ${reward}

        </p>



    </div>




    <button onclick="location.reload()">

    开始下一次专注

    </button>




    `;



}
