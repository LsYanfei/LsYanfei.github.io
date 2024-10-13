window.onload=function (){
    td=document.querySelectorAll('td');
    difficult=20;
    inputMine();
    inputNum();
    gameStart();
}
function inputMine(){
    if(difficult===10)num=10;
    else if(difficult===20)num=50;
    else num=150;
    i=0;
    while(i<num){
        flag=Math.floor(Math.random()*Math.pow(difficult,2));
        if(td[flag].innerHTML===''){
            td[flag].innerHTML='雷';
            i++;
        }
    }
}
function inputNum(){
    for(i=0;i<difficult;i++){
        for(j=0;j<difficult;j++){
            if(td[i*difficult+j].innerHTML!=='雷'){
                count=numMine();
                if(count!==0)td[i*difficult+j].innerHTML=count;
            }
        }
    }
}
function numMine(){
    num=0;
    if(i-1>=0){
        if(j-1>=0){if(td[(i-1)*difficult+(j-1)].innerHTML==='雷')num++;}
        if(j+1<difficult){if(td[(i-1)*difficult+(j+1)].innerHTML==='雷')num++;}
        if(td[(i-1)*difficult+j].innerHTML==='雷')num++;
    }
    if(i+1<difficult){
        if(j-1>=0){if(td[(i+1)*difficult+(j-1)].innerHTML==='雷')num++;}
        if(j+1<difficult){if(td[(i+1)*difficult+(j+1)].innerHTML==='雷')num++;}
        if(td[(i+1)*difficult+j].innerHTML==='雷')num++;
    }
    if(j-1>=0){if(td[i*difficult+(j-1)].innerHTML==='雷')num++;}
    if(j+1<difficult){if(td[i*difficult+(j+1)].innerHTML==='雷')num++;}
    return num;
}
function gameStart(){
    for(i=0;i<difficult;i++){
        for(j=0;j<difficult;j++){
            td[i*difficult+j].style.backgroundColor='black';
            td[i*difficult+j].indexi=i;
            td[i*difficult+j].indexj=j;
            td[i*difficult+j].onclick=function (){OpenTable(this.indexi,this.indexj);}
        }
    }
}
function OpenTable(i,j){
    if(td[i*difficult+j].style.backgroundColor==='white')console.log("white");
    else if(td[i*difficult+j].innerHTML==='雷'){
        for(m=0;m<Math.floor(Math.pow(difficult,2));m++){
            if(td[m].innerHTML==='雷')
                td[m].style.backgroundColor='white';
        }
        alert('Game Over!!!');
    }
    else if(td[i*difficult+j].innerHTML===''){
        td[i*difficult+j].style.backgroundColor='white';
        if(i-1>=0){
            if(j-1>=0)OpenTable(i-1,j-1);
            if(j+1<difficult)OpenTable(i-1,j+1);
            OpenTable(i-1,j);
        }
        if(i+1<difficult){
            if(j-1>=0)OpenTable(i+1,j-1);
            if(j+1<difficult)OpenTable(i+1,j+1);
            OpenTable(i+1,j);
        }
        if(j-1>=0)OpenTable(i,j-1);
        if(j+1<difficult)OpenTable(i,j+1);
    }
    else td[i*difficult+j].style.backgroundColor='white';
}
