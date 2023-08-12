window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
});
const adressbtn=document.querySelector('#adress-form')
const adressclose=document.querySelector('#adress-close')

//console.log(adressClose)
adressbtn.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click",function(){
    document.querySelector('.adress-form').style.display="none"
})
/*---------------------------------------------------*/
/*$(window).scroll(function(){
if($(this).scrollTop()>=0){
    $("header").css({
        position:"fixed",
        left:0,
        right:0,
        top:0,
        "z-index":999,
    });
}else{
    $("header").css("position","relative");
}
if($(this).scrollTop()>=50) {
    $("top").show("slow");
}else{
    $("top").hide("slow");
    }
});
$("#top").click(function(event) {
    event.preventDefault(); // Ngăn trình duyệt thực hiện hành động mặc định (nhảy đến đầu trang)
    $("html, body").animate({ scrollTop: 0 }, "slow"); // Cuộn lên đầu trang một cách chậm dần (hiệu ứng "slow")
  });*/
/*--------------------------------------------------------- */
let mybutton = document.getElementById("top");
window.onscroll = function() {scrollFunction()};
// When the user clicks on the button, scroll to the top of the document
function TopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*--------------------------------------------------------------------*/
$(document).ready(function() {
    var scrollCount = 0; // Biến đếm ban đầu

    // Cập nhật biến đếm khi cuộn trang
    $(window).scroll(function() {
        scrollCount++;
        $("#scrollCount").text(scrollCount); // Cập nhật giá trị trong phần tử span
    });

});
/*--------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    var changeSlide = 1;

    showImage(changeSlide);

    function moveImage(n) {
        showImage(changeSlide += n);
    }

    function currentDiv(n) {
        showImage(changeSlide = n);
    }

    function showImage(n) {
        var i;
        var images = document.getElementsByClassName("change-img");
        var dots = document.getElementsByClassName("image-badge");
        
        if (n > images.length) {
            changeSlide = 1;
        } 
        if (n < 1) {
            changeSlide = images.length;
        }
        
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" badge-white", "");
        }
        
        images[changeSlide - 1].style.display = "block";
        dots[changeSlide - 1].className += " badge-white";
    }

    // Attach click handlers to buttons and indicators
    var leftButton = document.querySelector(".left-button");
    var rightButton = document.querySelector(".right-button");

    leftButton.addEventListener("click", function () {
        moveImage(-1);
    });

    rightButton.addEventListener("click", function () {
        moveImage(1);
    });

    var imageBadges = document.querySelectorAll(".image-badge");
    imageBadges.forEach(function (badge, index) {
        badge.addEventListener("click", function () {
            currentDiv(index + 1);
        });
    });
});
