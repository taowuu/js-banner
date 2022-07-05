/*
打印输出
*/
var log = console.log.bind(console)

var e = function(selector) {
    /*
    选择页面一个元素
    */
    return document.querySelector(selector)
}

var es = function(selector) {
    /*
    选择页面全部元素
    */
    return document.querySelectorAll(selector)
}

var bindEvent = function (element, event, callback) {
    /*
    给页面元素绑定事件和回调函数
    */
    element.addEventListener(event, callback)
}

var fadeChangeImg = function (oldImg, newImg) {
    /*
    元素淡入淡出切换图片
    */
    var slide = e('.tao-fade-slide')
    slide.classList.add('fade')
    slide.addEventListener('transitionend', function () {
        oldImg.src = newImg.src
        slide.classList.remove('fade')
    })
}

// var playAnimation = function() {
//     var animation = 'fade'
//     var block = e('.tao-fade-slide')
//     block.classList.add(animation)
//     block.addEventListener('animationend', function(){
//         block.classList.remove(animation)
//     })
// }
