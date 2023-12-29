var ball = document.getElementsByTagName("div");
var ballTop = 50;
ball[0].style.top = ballTop + "%";
var ballLeft = 50;
ball[0].style.left = ballLeft + "%";
window.addEventListener('keypress', function(event){
    // if(ballTop < 1 || ballLeft < 1 || ballTop > 99 || ballLeft > 99)
    //     {return;}
    if (event.key == "w"){
        {
        if(ballTop > 0)
        {
          ballTop -= 1;
          ball[0].style.top = ballTop + "%";
        }
        }
    }
    if (event.key == "s"){
        {
        if (ballTop < 90)
            {
                ballTop += 1;
                ball[0].style.top = ballTop + "%";
                console.log(ballTop);
            }
         
        }
    }
    if (event.key == "d"){
        {
        if (ballLeft < 95)
            {
                ballLeft += 1;
                ball[0].style.left = ballLeft + "%";
                
            }
        }
    }
    if (event.key == "a"){
        {
            if(ballLeft>0)
            {
                ballLeft -= 1;
                ball[0].style.left = ballLeft + "%";
            }
        }
    }
})