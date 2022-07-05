var imgsJson = function () {
    /*
    图片资源
    */
    var imgs = [
        {
            id: 0,
            src: 'imgs/0.jpg'
        },
        {
            id: 1,
            src: 'imgs/1.jpg'
        },
        {
            id: 2,
            src: 'imgs/2.jpg'
        },
        {
            id: 3,
            src: 'imgs/3.jpg'
        }
    ]
    return imgs
}

var clearActive = function () {
    /*
    清楚活跃元素的效果
    */
    e('.active').classList.remove('active')
}

var changeImg = function (index) {
    /*
    根据下标切换图片
    */
    var oldImg = e('#id-img')
    var newImg = imgsJson()[index]
    fadeChangeImg(oldImg, newImg)
}

var activateIndicator = function (index) {
    /*
    给指示器添加活跃效果
    */
    es('.div-indicator')[index].classList.add('active')
}

var jump = function (e) {
    /*
    点击指示器切换图片
    */
    var index = Number(e.target.dataset.index)
    // 防止乱点程序崩溃
    // TODO 使用 try
    if (isNaN(index) == false) {
        clearActive()
        changeImg(index)
        activateIndicator(index)
    }
}

var preIndicator = function (index) {
    /*
    根据当前指示器下标切换至上一个指示器
    */
    index -= 1
    var indicators = es('.div-indicator')
    // 到达第一个指示器的边界处理
    if (index == -1) {
        var current = indicators[indicators.length -1]
        current.classList.add('active')
        return
    }
    indicators[index].classList.add('active')
}

var findPre = function (index) {
    /*
    根据当前指示器下标切换至上一张图片
    */
    var imgs = imgsJson()
    index -=  1
    // 最第一张图片的上一张边界处理
    if (index == -1) {
        return imgs[imgs.length -1]
    }
    return imgs[index]
}

var pre = function () {
    /*
    切换至上一张图片
    */
    var indicator = e('.active')
    var index = Number(indicator.dataset.index)
    var preImg = findPre(index)
    var img = e('#id-img')
    fadeChangeImg(img, preImg)
    clearActive()
    preIndicator(index)
}

var nextIndicator = function (index) {
    /*
    根据当前指示器下标切换至下一个指示器
    */
    index += 1
    var indicators = es('.div-indicator')
    // 到达最后一个指示器的边界处理
    if (index == imgsJson().length) {
        indicators[0].classList.add('active')
        return
    }
    indicators[index].classList.add('active')
}

var findNext = function (index) {
    /*
    根据当前指示器下标切换至下一张图片
    */
    var imgs = imgsJson()
    index +=  1
    // 最后一张图片的下一张边界处理
    if (index == imgs.length) {
        return imgs[0]
    }
    return imgs[index]
}

var next = function () {
    /*
    切换至下一张图片
    */
    var indicator = e('.active')
    var index = Number(indicator.dataset.index)
    var nextImg = findNext(index)
    var img = e('#id-img')
    fadeChangeImg(img, nextImg)
    clearActive()
    nextIndicator(index)
}

var autoNext = function () {
    /*
    自动切换下一张
    */
    setInterval(next, 4000)
}

var bindEvents = function () {
    /*
    给元素绑定事件
    */
    var p = e('#id-button-pre')
    bindEvent(p, 'click', pre)
    // bindEvent(p, 'click', playAnimation)
    var n = e('#id-button-next')
    bindEvent(n, 'click', next)
    var ls = e('#id-div-indicator-list')
    bindEvent(ls, 'click', jump)
}

var init = function () {
    /*
    初始化页面数据
    */
    var imgs = imgsJson()
    var img = e('#id-img')
    img.src = imgs[0].src
}

var __main = function () {
    /*
    程序执行入口
    */
    bindEvents()
    init()
    autoNext()
}

__main()
