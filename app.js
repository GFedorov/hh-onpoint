window.addEventListener('wheel', function(event){
    if (animFlag){
        return false;
    }
   if (event.deltaY > 0){
       moveDown();
   }
   animFlag = true;
   this.setTimeout(function(){
       animFlag = false;
   },timeOut)
})

var slide = 0;
var animFlag = false;
var timeOut = 1000;
var wrapper = document.querySelector('.wrapper')
function moveDown(){
slide +=1
wrapper.style.top = -100*slide+'vh';


}