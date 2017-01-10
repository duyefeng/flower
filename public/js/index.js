$(function () {
    var oPageData = {
        boxLength : $('.box').length
    }
    function Animate(el) {
        if ( el.hasClass('active') ) {
            el.css('transform','perspective(600px) rotateY(-30deg) translate3d(-'+el.data('move')+'px,'+el.data('move')+'px,0)');
            $('.active').removeClass('active');
            $('.show.opa').removeClass('opa');
            return;
        }
        $('.active').removeClass('active');
        $('.box').each(function(){
            $(this).css('transform','perspective(600px)  rotateY(-30deg) translate3d(-'+$(this).data('move')+'px,'+$(this).data('move')+'px,0)');
        });
        el.css('transform','perspective(600px) rotateY(-30deg) translate3d(-'+el.data('move')+'px,-60px,0)');
        el.addClass('active');
        $('.show.opa').removeClass('opa');
        $('.show').eq($('.active').index()).addClass('opa');
    }
    $('.box').on('click',function(){
        Animate($(this));
    });
    $('.right-btn').on('click',function(){
        var index = ($('.active').index()-1 !== -1) ? $('.active').index()-1 : oPageData.boxLength-1;
        Animate($('.box').eq(index));
    });
    $('.left-btn').on('click',function(){
        var index = ($('.active').index()+1 !== oPageData.boxLength) ? $('.active').index()+1 : 0;
        Animate($('.box').eq(index));
    });
});