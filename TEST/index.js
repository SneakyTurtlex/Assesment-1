document.getElementById("bg1").addEventListener("click", function (){
    document.getElementById("ch1").style.backgroundImage = "url(i1.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(i2.jpg)";
       document.getElementById("ch3").style.backgroundImage = "url(i3.jpg)";
});

document.getElementById("bg2").addEventListener("click", function (){
    document.getElementById("ch1").style.backgroundImage = "url(i4.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(i5.jpg)";
       document.getElementById("ch3").style.backgroundImage = "url(i6.jpg)";
});

document.getElementById("bg3").addEventListener("click", function (){
    document.getElementById("ch1").style.backgroundImage = "url(i7.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(i8.jpg)";
       document.getElementById("ch3").style.backgroundImage = "url(i9.jpg)";
});

document.getElementById("bg4").addEventListener("click", function (){
    document.getElementById("ch1").style.backgroundImage = "url(i10.jpg)";
    document.getElementById("ch2").style.backgroundImage = "url(i11.jpg)";
       document.getElementById("ch3").style.backgroundImage = "url(i12.jpg)";
});

document.getElementById("ch1").addEventListener("mouseenter", function(){
    document.getElementById("zoom").style.backgroundImage = document.getElementById("ch1").style.backgroundImage;
});

document.getElementById("ch2").addEventListener("mouseenter", function(){
        document.getElementById("zoom").style.backgroundImage = document.getElementById("ch2").style.backgroundImage;
});

document.getElementById("ch3").addEventListener("mouseenter", function(){
       document.getElementById("zoom").style.backgroundImage = document.getElementById("ch3").style.backgroundImage;
});
