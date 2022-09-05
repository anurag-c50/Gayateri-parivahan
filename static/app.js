$(document).ready(function(){
    $('#icon').click(function(){
        $('ul').toggleClass('show')
        $('.content').toggleClass('show1')
        $('.content1').toggleClass('show1')
        $('.content2').toggleClass('show1')
        $('.content3').toggleClass('show1')
        $('.foot').toggleClass('show1')
    })
});

    function genericSocialShare(url){
       window.open(url,'sharer','toolbar=0,status=0,width=648,height=395');
       return true;
    }
    $('.client1').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 950,
            settings: {
              autoplay: true,
              autoplaySpeed: 2000,
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
      
         },
         {
          breakpoint: 650,
          settings: {
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
      
       }]
        });
       