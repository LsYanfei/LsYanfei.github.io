window.onload = function (){
    passage = 7;
    originalText = document.getElementById("originalText");
    translation = document.getElementById("translation");
    lis = document.querySelectorAll("li");
    update();
    for(i=0;i<lis.length;i++) {
        lis[i].onclick = function () {
            passage = this.id;
            update();
        }
    }
}
function update(){
    originalText.innerHTML="";
    translation.innerHTML="";
    $.ajax({
        url:"../text/originalText/"+passage+".txt",
        dataType:"text",
        success:function (data){
            originalText.innerHTML = data;
        }
    })
    $.ajax({
        url:"../text/translation/"+passage+".txt",
        dataType:"text",
        success:function (data){
            translation.innerHTML = data;
        }
    })
}
