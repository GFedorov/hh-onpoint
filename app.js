window.addEventListener('wheel', function (event) {
    if (animFlag) {
        return false;
    }
    animFlag = true;
    this.setTimeout(function () {
        animFlag = false;
    }, timeOut)
    console.log(slide)
    if (event.deltaY > 0) {
        if (slide < 2){
        moveDown();
        }
    }
    else if (event.deltaY < 0) {
       if (slide > 0){
        moveUp();
         }
    }
    
})

var slide = 0;
var animFlag = false;
var timeOut = 1000;
var wrapper = document.querySelector('.wrapper')
//функции скрола
function moveDown() {
    slide += 1
    wrapper.style.top = -100 * slide + 'vh';
}
function moveUp() {
    slide -= 1
    wrapper.style.top = -100 * slide + 'vh';
}