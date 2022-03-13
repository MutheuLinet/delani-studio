$(document).ready(function(){
    $("#design-img1").on('click', function(){
        $("#design-img1").hide(function(){
            $("#hidden-p1").show();
            $("#hidden-p1").css("cursor", "pointer");
        });
    });
    $("#hidden-p1").click(function(){
            $("#design-img1").show();
            $("#hidden-p1").hide();
    });
    $("#development-img").on('click', function(){
        $("#development-img").hide(function(){
            $("#hidden-p2").show();
            $("#hidden-p2").css("cursor", "pointer");
        });
    });
    $("#hidden-p2").click(function(){
            $("#development-img").show();
            $("#hidden-p2").hide();
    });
    $("#product-img").on('click', function(){
        $("#product-img").hide(function(){
            $("#hidden-p3").show();
            $("#hidden-p3").css("cursor", "pointer");
        });
    });
    $("#hidden-p3").click(function(){
            $("#product-img").show();
            $("#hidden-p3").hide();
    });
});
