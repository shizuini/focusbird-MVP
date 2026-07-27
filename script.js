let task = "";

function startFocus(){

    task = document.getElementById("taskInput").value;

    if(task === ""){
        task = "完成一个专注任务";
    }


    document.getElementById("showTask").innerHTML = task;


    changePage("home","focus");


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
