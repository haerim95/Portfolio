// var imgName = ['/image/main/1.jpg', '/image/main/2.jpg', '/image/main/3.jpg', '/image/main/4.jpg', '/image/main/5.jpg'];

// function bgImgChange(){
// 	var imgUrl = "url(" + imgName[Math.floor(Math.random() * 5)] + ")";
// 	document.getElementById('main').style.backgroundImage = imgUrl;
// }
// bgImgChange();

const text = document.querySelector('.fancy');
const strText = text.textContent;
const splintText = strText.split("");

text.textContent = "";

for(let i=0; i < splintText.length; i++){
  text.innerHTML += "<span>" + splintText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('#main span')[char];
  span.classList.add('fade');
  char++
  if(char === splintText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}