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
$(document).ready(function(){
    $("#black-img").mouseover(function(){
      $("#description1").css("display", "block");
    });
    $("#black-img").mouseout(function(){
      $("#description1").css("display", "none");
    });
});
$(document).ready(function(){
    $("#ontario-img").mouseover(function(){
      $("#description2").css("display", "block");
    });
    $("#ontario-img").mouseout(function(){
      $("#description2").css("display", "none");
    });
});
$(document).ready(function(){
    $("#gold-img").mouseover(function(){
      $("#description3").css("display", "block");
    });
    $("#gold-img").mouseout(function(){
      $("#description3").css("display", "none");
    });
});
$(document).ready(function(){
    $("#jim-img").mouseover(function(){
      $("#description4").css("display", "block");
    });
    $("#jim-img").mouseout(function(){
      $("#description4").css("display", "none");
    });
});
$(document).ready(function(){
    $("#elena-img").mouseover(function(){
      $("#description5").css("display", "block");
    });
    $("#elena-img").mouseout(function(){
      $("#description5").css("display", "none");
    });
});
$(document).ready(function(){
    $("#calc-img").mouseover(function(){
      $("#description6").css("display", "block");
    });
    $("#calc-img").mouseout(function(){
      $("#description6").css("display", "none");
    });
});
$(document).ready(function(){
    $("#burned-img").mouseover(function(){
      $("#description7").css("display", "block");
    });
    $("#burned-img").mouseout(function(){
      $("#description7").css("display", "none");
    });
});
$(document).ready(function(){
    $("#giraffe-img").mouseover(function(){
      $("#description8").css("display", "block");
    });
    $("#giraffe-img").mouseout(function(){
      $("#description8").css("display", "none");
    });
});