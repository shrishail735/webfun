var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var keyy=this.innerHTML;
     playsound(keyy);
    });
}
document.addEventListener("keypress",function(event){
 var fun=event.key;
 if(fun=='r'||fun=='R')
     tablaplay("dha")
     if(fun=='t'||fun=='T')
     tablaplay("dhi")
     if(fun=='y'||fun=='Y')
     tablaplay("dhin")
     if(fun=='i'||fun=='I')
     tablaplay("na")
     if(fun=='o'||fun=='O')
     tablaplay("tun")
     if(fun=='p'||fun=='P')
     tablaplay("taan")
     if(fun=='l'||fun=='L')
     tablaplay("tuun")
 playsound(fun);
});
function playsound(input)
{
    switch (input) {
        case 'h':
              var tom1=new Audio("sounds/tom-1.mp3");
              tom1.play();
            break;
        case 'a':
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'v':
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'e':
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'f':
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 'u':
            var crash=new Audio("sounds/snare.mp3");
            crash.play();
            break;
        case 'n':
            var snare=new Audio("sounds/crash.mp3");
            snare.play();
            break;
        
        default:
            break;
    }
}
var k=document.querySelectorAll(".tabla").length;
for(var i=0;i<k;i++)
{
    document.querySelectorAll(".tabla")[i].addEventListener("click",function(){
        console.log(this.innerHTML);
    var ta=this.innerHTML;
    tablaplay(ta);
    });
}
function tablaplay(take)
{
    switch (take) {
        case 'dha':
              var dha=new Audio("sounds/dha.mp3");
              dha.play();
            break;
        case 'dhi':
            var dhi=new Audio("sounds/dhi.mp3");
            dhi.play();
            break;
        case 'dhin':
            var dhin=new Audio("sounds/dhin.mp3");
            dhin.play();
            break;
        case 'na':
            var na=new Audio("sounds/na.mp3");
            na.play();
            break;
        case 'tun':
            var tun=new Audio("sounds/tun.mp3");
            tun.play();
            break;
        case 'taan':
            var taan=new Audio("sounds/taan.mp3");
            taan.play();
            break;
        case 'tuun':
            var tuun=new Audio("sounds/tuun.mp3");
            tuun.play();
            break;
}
}
document.querySelector(".btn").addEventListener("click",function(){
     var pla=new Audio("sounds/rain.mp3");
    pla.play();
    document.querySelectorAll(".btn")[1].addEventListener("click",function(){
    pla.pause();
    });
    
});
document.querySelectorAll(".btn")[2].addEventListener("click",function(){
    var pla=new Audio("sounds/rain1.mp3");
   pla.play();
   document.querySelectorAll(".btn")[3].addEventListener("click",function(){
   pla.pause();
   });
   
});
document.querySelectorAll(".btn")[4].addEventListener("click",function(){
    var pla=new Audio("sounds/birds.mp3");
   pla.play();
   document.querySelectorAll(".btn")[5].addEventListener("click",function(){
   pla.pause();
   });
   
});

document.querySelectorAll(".btn")[6].addEventListener("click",function(){
    var pla=new Audio("sounds/blackbird.mp3");
   pla.play();
   document.querySelectorAll(".btn")[7].addEventListener("click",function(){
   pla.pause();
   });
   
});

document.querySelectorAll(".btn")[8].addEventListener("click",function(){
    var pla=new Audio("sounds/spring.mp3");
   pla.play();
   document.querySelectorAll(".btn")[9].addEventListener("click",function(){
   pla.pause();
   });
   
});

