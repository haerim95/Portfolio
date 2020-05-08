var imgName = ['/image/main/1.jpg', '/image/main/2.jpg', '/image/main/3.jpg', '/image/main/4.jpg', '/image/main/5.jpg'];

function bgImgChange(){
	var imgUrl = "url(" + imgName[Math.floor(Math.random() * 5)] + ")";
	document.getElementById('main').style.backgroundImage = imgUrl;
}
bgImgChange();
    
