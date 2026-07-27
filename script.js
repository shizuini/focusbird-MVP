let focusMinutes = 40;
let timer;
let remainingSeconds;


// 时间滑动选择

const timeRange = document.getElementById("timeRange");
const timeShow = document.getElementById("timeShow");


timeRange.addEventListener("input", function(){

    focusMinutes = this.value;

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

        <h1>小鸟正在旅行</h1>


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


            <button onclick="finishFocus()">
            完成专注
            </button>


        </div>


    `;


    updateTimer();


    timer = setInterval(updateTimer,1000);


}




// 更新时间显示

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

        finishFocus();

        return;

    }


    remainingSeconds--;


}




// 完成专注

function finishFocus(){


    clearInterval(timer);



    document.querySelector(".container").innerHTML = `


    <h1>
    🎉 专注完成
    </h1>



    <div class="bird-card">


        <div class="bird">
        🐦
        </div>


        <p>
        小鸟完成了一次旅行
        </p>


    </div>



    <div class="task-card">


    <h2>
    本次任务反馈
    </h2>


    <p>
    任务推进程度
    </p>


    <button>
    已完成
    </button>


    <button>
    部分完成
    </button>


    <button>
    未完成
    </button>



    </div>


    `;


}
