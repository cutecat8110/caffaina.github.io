$(document).ready(function () {
    $(function () {
        $('.btn01').click(function () {
            $('html,body').animate({ scrollTop: $('.Dadun_store').offset().top }, 500);
        });
        $('.btn02').click(function () {
            $('html,body').animate({ scrollTop: $('.Huilai_store').offset().top }, 500);
        });
        $('.btn03').click(function () {
            $('html,body').animate({ scrollTop: $('.Mingcheng_store').offset().top }, 500);
        });
        $('.btn04').click(function () {
            $('html,body').animate({ scrollTop: $('.museum_store').offset().top }, 500);
        });
        $('.btn05').click(function () {
            $('html,body').animate({ scrollTop: $('.exploration_store').offset().top }, 500);
        });
    });

});

// /*解說*/
// $(document).ready(function(){//使用JQ語法，JQ ready的function是必要的
//     $(function(){ $('點擊此選擇器').click(function(){ 
//         $('html,body').animate({scrollTop:$('滾動到此區塊').offset().top}, 移動速度); 
//         });  
//     }); 
// });