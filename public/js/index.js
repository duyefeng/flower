$(function () {
    $('.box').on('click',function(){
        if ( $(this).hasClass('active') ) {
            $(this).css('transform','perspective(600px) translate3d(-'+$(this).data('move')+'px,'+$(this).data('move')+'px,0) rotateY(-30deg)');
            $('.active').removeClass('active');
            return;
        }
        $('.active').removeClass('active');
        $('.box').each(function(){
            $(this).css('transform','perspective(600px) translate3d(-'+$(this).data('move')+'px,'+$(this).data('move')+'px,0) rotateY(-30deg)');
        });
        $(this).css('transform','perspective(600px) translate3d(-'+$(this).data('move')+'px,-20px,0) rotateY(-30deg)');
        $(this).addClass('active');
    });
});