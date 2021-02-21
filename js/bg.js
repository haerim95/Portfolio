// var imgName = ['/image/main/1.jpg', '/image/main/2.jpg', '/image/main/3.jpg', '/image/main/4.jpg', '/image/main/5.jpg'];

// function bgImgChange(){
// 	var imgUrl = "url(" + imgName[Math.floor(Math.random() * 5)] + ")";
// 	document.getElementById('main').style.backgroundImage = imgUrl;
// }
// bgImgChange();

var $win, scrollTop, docHeight, winHeight, scrollPercent, $title, color;

  $win = $(window);
  $body = $('body');
  $title = $('h1').eq(0);
  scrollPercent = 0;
  scrollTop = $win.scrollTop();
  docHeight = $(document).height();
  winHeight = window.innerHeight;
  color = $.husl.p.toHex((59 + (scrollPercent * 360)) % 360,100,70);
  $body.css('background-color', color);
  
  $win.on('scroll', function(e){
    scrollTop = $win.scrollTop();
    scrollPercent = scrollTop / (docHeight - winHeight);
    color = $.husl.p.toHex((59 + (scrollPercent * 360)) % 360,100,70);
    $title.html(color + '<span>husl(' + (59 + (scrollPercent * 360).toFixed()) % 360 +'%,100,70)</span>');
    $body.css('background-color', color);
  });
