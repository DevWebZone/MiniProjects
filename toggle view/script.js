var toggler = $(".togglebar");
var firstclick = true;
toggler.click(function(){
    if(firstclick){
        $("body").css({
            "background-color": "black"
        }
        );
        $("h1").css({
            "color": "white"
        }
        );
        $(".toggler").css("margin-left" , "58px");
        firstclick =false;
    }
    else{
        $("body").css({
            "background-color": "white"
        }
        );
        $("h1").css({
            "color": "black"
        }
        );
        $(".toggler").css("margin-left" , "1px");
        firstclick = true;
    }


});