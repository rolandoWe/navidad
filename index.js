
console.log('imagenes')

let num=0
function img(){
    num++
if(num>5){
    num=1;
}
// console.log(num)
document.querySelector('.imag').src=`imagenes/imagen${num}.png`;

}
// img()
// setInterval(img,2000)

let imag1=document.querySelector('.imag1');
let imag2=document.querySelector('.imag2');
let imag3=document.querySelector('.imag3');
let imag4=document.querySelector('.imag4');
let imag5=document.querySelector('.imag5');
let imag6=document.querySelector('.imag6');
let imag7=document.querySelector('.imag7');
let imag8=document.querySelector('.imag8');
let contador=0
function img2(){
    contador++
    if(contador>8){
        contador=1
    }
    if(contador===1){
        imag1.style.opacity=1;
        imag2.style.opacity=0;
        imag3.style.opacity=0;
        imag4.style.opacity=0;
        imag5.style.opacity=0;
        imag6.style.opacity=0;
        imag7.style.opacity=0;
        imag8.style.opacity=0;
    }
    if(contador===2){
        imag1.style.opacity=0;
        imag2.style.opacity=1;
        imag3.style.opacity=0;
        imag4.style.opacity=0;
        imag5.style.opacity=0;
        imag6.style.opacity=0;
        imag7.style.opacity=0;
        imag8.style.opacity=0;
    }
    if(contador===3){
        imag1.style.opacity=0;
        imag2.style.opacity=0;
        imag3.style.opacity=1;
        imag4.style.opacity=0;
        imag5.style.opacity=0;
        imag6.style.opacity=0;
        imag7.style.opacity=0;
        imag8.style.opacity=0;
    }
    if(contador===4){
        imag1.style.opacity=0;
        imag2.style.opacity=0;
        imag3.style.opacity=0;
        imag4.style.opacity=1;
        imag5.style.opacity=0;
        imag6.style.opacity=0;
        imag7.style.opacity=0;
        imag8.style.opacity=0;
    }
    if(contador===5){
        imag1.style.opacity=0;
        imag2.style.opacity=0;
        imag3.style.opacity=0;
        imag4.style.opacity=0;
        imag5.style.opacity=1;
        imag6.style.opacity=0;
        imag7.style.opacity=0;
        imag8.style.opacity=0;
    }
    if(contador===6){
        imag1.style.opacity=0;
        imag2.style.opacity=0;
        imag3.style.opacity=0;
        imag4.style.opacity=0;
        imag5.style.opacity=0;
        imag6.style.opacity=1;
        imag7.style.opacity=0;
        imag8.style.opacity=0;
    }
    if(contador===7){
        imag1.style.opacity=0;
        imag2.style.opacity=0;
        imag3.style.opacity=0;
        imag4.style.opacity=0;
        imag5.style.opacity=0;
        imag6.style.opacity=0;
        imag7.style.opacity=7;
        imag8.style.opacity=0;
    }
    if(contador===8){
        imag1.style.opacity=0;
        imag2.style.opacity=0;
        imag3.style.opacity=0;
        imag4.style.opacity=0;
        imag5.style.opacity=0;
        imag6.style.opacity=0;
        imag7.style.opacity=0;
        imag8.style.opacity=7;
    }

}
img2()
setInterval(img2,4000)


let audio11=false;
let audio22=false;
let audio1;
let audio2;
document.querySelector('.btn1').addEventListener("click",function(){
    // audio22=false
    audio1=new Audio('audio/Christmas Village - Aaron Kenny.mp3');
   if(audio22==true){
    audio2.pause()
   }
    audio1.play();
    audio11=true;
})

document.querySelector('.btn2').addEventListener("click",function(){
    // audio11=false;
    audio2=new Audio('audio/Jingle Bells - Kevin MacLeod.mp3');
    if(audio11==true){
        audio1.pause()
       }
    audio2.play()
    audio22=true;
})
document.querySelector('.btn3').addEventListener("click",function(){
    if(audio11==true){
        audio1.pause();
       }
    if(audio22==true){
        audio2.pause();
       }
 
})