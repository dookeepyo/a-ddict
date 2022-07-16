$(document).ready(function(){
    console.log($(window).scrollTop()); //콘솔창으로 스크롤 상단px값을 확인하려고 썻음
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        autoplay: {
          delay: 3000
        }
    });



    AOS.init();
    $(window).scroll(function(){
        const sct = $(window).scrollTop();

        if(sct >= 1){
          $('.warp-1').addClass('active');
        }

        if(sct >= 1){
          $('.warp1-txtbox').addClass('active');
        }
        if(sct >= 900){
          $('.menu-bar').addClass('active');
        }
        
        if(sct >= 1885){
          $('.sec3-txt').addClass('active');
        }
        
        
      }); // 스크롤이벤트부분

      $('.menu-ckck').click(function(){

        $('.sup-menu').addClass('active');
      });

      $('.sup-ckbut').click(function(){
        $('.sup-menu').removeClass('active');
      });


      // 중요함
      $('.search-icon').mouseenter(function(){
        $(this).siblings('.input-mask').children('#inputex').addClass('on');
      });
      $('.search-bar').mouseleave(function(){
        $(this).find('#inputex').removeClass('on');
      });


});
