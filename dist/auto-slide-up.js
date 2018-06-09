!function () {
    //添加offset类 
    let specialTags = document.querySelectorAll('[data-x]'); //含有data-x属性的任意标签
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    }
    setTimeout(function () {
        findClosestAndRemoveOffset();
    }, 1000);
    window.addEventListener('scroll', function (x) {
        findClosestAndRemoveOffset();
    });
    /*****helper********/
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]'); //含有data-x属性的任意标签
        let minIndex = 0;
        for (let i = 0; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i;
            }
        } //minIndex就是离窗口顶部最近的元素
        specialTags[minIndex].classList.remove('offset');
        let id = specialTags[minIndex].id;
        let a = document.querySelector('a[href="#' + id + '"]'); //例如id=='siteAbout',则对应的a标签'a[href="#siteAbout"]'
        let li = a.parentNode;
        let brothersAndMe = li.parentNode.children;
        for (let i = 0; i < brothersAndMe.length; i++) {
            brothersAndMe[i].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }
    let liTags = document.querySelectorAll('nav.menu > ul >li');
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            x.currentTarget.classList.add('active');
        };
        liTags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active');
        };
    }
}.call();