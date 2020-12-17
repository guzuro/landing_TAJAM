$(document).ready(function () {
    $('.slider_item').on("click", function(){
        $('.slider_item').removeClass('active').eq($(this).index()).addClass('active')
    })
});



