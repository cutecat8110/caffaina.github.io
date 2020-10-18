$(".subnav").hover(function () {
    $(this).children(".wapper").children("h5").toggleClass('hover')
    $(this).children(".wapper").children("h2").toggleClass('hover')
    $(this).children("p").toggleClass('hover')
    $(this).parent().parent().next().children().toggleClass('hover')
    $(this).parent().parent().parent().next().toggleClass('hover')
})