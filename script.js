$(document).ready(function(){
    var ok = 1;
    deplacement();
    setInterval(collision, 20);

    function deplacement(){
        $("#rocket").animate({
            "left":"-200px"
        },1200, "linear", function(){
            $(this).css("left","400px");
            var misX = Math.floor(Math.random()*400);
            $(this).css("top", misX+"px");
            ok = 1;
        });
        setTimeout(deplacement, 2200);
    }

    $(document).keydown(function(e){
        var fleche = e.which;
        switch(fleche){
            case 38 :
                var planeY = parseInt($("#plane").css("top"));
                if(planeY >= 20){
                    $("#plane").css("top", "-=20px");
                }
                break;
            case 40 :
                var planeY = parseInt($("#plane").css("top"));
                if(planeY < 290){
                    $("#plane").css("top", "+=20px");
                }
                break;
        }
    });
    function collision(){
        var planeX = parseInt($("#plane").css("left"));
        var planeY = parseInt($("#plane").css("top"));
        var rocketX = parseInt($("#rocket").css("left"));
        var rocketY = parseInt($("#rocket").css("top"));

        if((rocketX > planeX) && (rocketX < (planeX + 150)) && (rocketY >= planeY) && (rocketY < (planeY + 108)) && ok == 1){
            $("#beep")[0].play();
            var nb = parseInt($("#nb").text());
            nb++;
            $("#nb").text(nb);
            ok = 0;
        }
    }
});