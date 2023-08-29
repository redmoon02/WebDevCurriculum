let target = document.querySelector("#dynamic");

function randomstring(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript",];
    let selectstring = stringArr[Math.floor(Math.random()* stringArr.length)];
    let selectstringArr = selectstring.split("");

    return selectstringArr;
}
//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomstring());
}
//한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.lenght>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){dynamic(randomArr);},80)
}   else{
    setTimeout(resetTyping, 3000)
}
}

dynamic(randomstring());


//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);