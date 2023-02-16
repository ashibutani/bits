$(function(){
    $(".hm_menu").on("click",function(){
        $(".sp_nav").slideToggle(300);
        $(".hm_open, .hm_close").toggleClass("active");       

    });
});


$(function () {
    $(".sp_nav ul li a").on("click", function () {
        
        $(".sp_nav").fadeOut();
        $(".hm_open, .hm_close").toggleClass("active"); 
    });
});

$(function(){
    $("title").on("click", function() {
        $(this).toggleClass("title2");
    });
});