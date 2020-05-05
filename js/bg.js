var imgArray = new Array();
	imgArray[0] = "/image/main/1.jpg";
	imgArray[1] = "/image/main/2.jpg";
	imgArray[2] = "/image/main/3.jpg"
	imgArray[3] = "/image/main/4.jpg";
	imgArray[4] = "/image/main/5.jpg";
	
	function showImage(){
		var imgNum = Math.round(Math.random()*4);
		var objImg = document.getElementsByClassName('mainImg');
		objImg.src = imgArray[imgNum];
	}
	showImage();
    
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