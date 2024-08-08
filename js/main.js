
$(document).ready(function() {

    //main slide
    var galleryTop = new Swiper('.main_slide', {
        speed:1000,
        
        navigation: {
            nextEl: ".box .swiper-button-next",
            prevEl: ".box .swiper-button-prev",
            },
        pagination: {   
            el: ".pagination_bullet",   
            clickable: true,    
            type : 'bullets',   
            // Bullet Numbering 설정
            // renderBullet: function (index, className) {
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },
    });
        
    //fraction 
    var pagingSwiper = new Swiper(".main_slide", {
        
        pagination: {
            el: ".pagination_fraction",
            type: "fraction",
        },
    });
        
    //Main Swiper로 progress Bar 제어
    galleryTop.controller.control = pagingSwiper;



    //제품소개
    var productSwiper1 = new Swiper(".Swiper", {
     
        slidesPerView: "auto",        
        watchSlidesProgress: true,
  
        // breakpoints: {
            
        //     320: {
        //       slidesPerView: 1,
              
        //     },
            
        //     540: {
        //       slidesPerView: 2,
            
        //     },
        //     768: {
        //         slidesPerView: 3,
              
        //       },
        //     1280: {
        //       slidesPerView: 6,
              
        //     }
        // }
    });
    var productSwiper2 = new Swiper(".Swiper2", {
        spaceBetween: 10,
        effect:"fade",
        navigation: {
            nextEl: ".thumb_slide.swiper-button-next",
            prevEl: ".thumb_slide.swiper-button-prev",
        },
        thumbs: {
            swiper: productSwiper1,
        },
    });


});
    

    









function aniCtrl(){
    var _st = $(window).scrollTop();
   
    var _wH = $(window).height();

    $('.ani-item').each(function(){
        var _this = $(this);
        if( _this.offset().top <= (_st + _wH) && !_this.hasClass('done') ){
            _this.addClass('done');
        }
    });
}


$(document).ready(function(){

    aniCtrl();

    $(window).scroll(function(){
        aniCtrl();
    });
});


