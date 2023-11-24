$(function(){

    // 윈도우의 높이값을 찾아 section에 대입한다.
    var wht = $(window).height()
    $('section').height(wht)

    // 화면크기에 맞춰서, 윈도우의 높이값을 찾아 section에 대입한다.
    $(window).resize(function(){
        var wht = $(window).height()
        $('section').height(wht);


    });

    // gnb li 를 클릭했을 때, li의 순번을 찾아라. 클릭한 나 자신의 클래스 on값을 더해라.
    $('.gnb li').click(function(){
        var wht = $(window).height()
        var i =$(this).index();
        console.log(i);


        $('.gnb li').removeClass('on')
        $(this).addClass('on');
    

        $('html,body').animate({'scrollTop':wht*i},1400,'easeOutBounce')
    });
    // 섹션에서 마우스 휠을 했을때, 올리면 바뀌고 내리면 바뀌어라 를 실행
    $('section').mousewheel(function(event,delta){
        event.preventDefault()
        // 올렸을 때
        if(delta>0){
       var prev = $(this).prev().offset().top
       $('html,body').stop().animate({'scrollTop':prev},1400,'easeOutBounce')
        }
        // 내렸을 때
        else if(delta<0){
        var next = $(this).next().offset().top
        $('html,body').stop().animate({'scrollTop':next},1400,'easeOutBounce')
        }
    });


    // 스크롤했을 때, 스크롤의 위치값을 찾고 일정 높이였을 때 li의 on값을 더해라
    $(window).scroll(function(){
        var wht = $(window).height()
        var sc = $(this).scrollTop();
        $('h1').text(sc);

        for(var a = 0; a<5;a++){
            
            if(sc>=wht*a && sc<wht*(a+1)){
                $('.gna li').removeClass('on')
                $('.gnb li').addClass('on')
            }
        }

    })































})