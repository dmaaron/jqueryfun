$(function(){
    $('.item').click(function(){
        $('.item').each(function(){
        $(this).removeClass('show');
        });
        $(this).addClass('show');                         
        var id = $(this).attr('id');
        var animateArrow = function(topPosition){
            $('.arrow').animate({
            'top':topPosition
            },'slow');
        }
        
        var displayText = function(displayedText){
            $('#menu-descriptions p').removeClass('selected');
            $('.' + id).css({opacity:0}).addClass('selected').animate({opacity:1}, 1000);
        }
        
        if(id === "one"){
           animateArrow('50px');
        }else if(id === "two"){
          animateArrow('135px');
        }else if(id === "three"){
           animateArrow('225px');
        }else if(id === "four"){
          animateArrow('315px');
        }
        displayText();
    });
});