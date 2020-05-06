var imgName = ['/image/main/1.jpg', '/image/main/2.jpg', '/image/main/3.jpg', '/image/main/4.jpg', '/image/main/5.jpg'];

function bgImgChange(){
	var imgUrl = "url(" + imgName[Math.floor(Math.random() * 5)] + ")";
	document.getElementById('main').style.backgroundImage = imgUrl;
}
bgImgChange();
    
// const bgimages = document.querySelector("main");

// const IMG_NUMBER = 5;

// function loadend(){
//     console.log("finishedLoad")
// }

// function panintImage(imgNumber){
//     const image = new Image();
//     // +1 을 주는 이유 = Math.random() 함수가 0을 줄 수 있기 때문
//     image.src=`/image/main/${imgNumber + 1}.jpg`;
//     image.classList.add("bgImg");
//     bgimages.prepend(image);
// }

// function genRandom(){
//     //math.floor는 버림, ceiling은 올림. 둘다 소수쩜 삭제
//     const number = Math.floor(Math.random() * IMG_NUMBER);
//     return number;
// }

// function init(){
//     const randomNumber = genRandom();
//     panintImage(randomNumber);
// }
// init();