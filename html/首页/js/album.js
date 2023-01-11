window.onload = function () {
    setTimeout(getpre, 1000);
    timer = setInterval(getpre, 3000);
    var pics = new Array();
    var dots = new Array();
    var banner = document.getElementById('banner');
    /* 创建五个图添加到div.banner */
    for (var i = 1; i <= 5; i++) {
        var lbli = document.createElement('li');
        var lbimg = document.createElement('img');

        lbimg.src = "../img/pics0" + i + ".jpg";
        lbimg.style.width = "750px"
        lbimg.style.height = "421px"
        lbli.appendChild(lbimg);

        banner.appendChild(lbli);
        pics.push(lbli);
        pics[pics.length - 1].style.left = "0px";
        /* 添加事件：当鼠标进入图片 清除计时器 */
        lbimg.onmouseenter = function () {
            clearInterval(timer);
        }
        /* 添加事件：当鼠标离开图片 添加计时器 */
        lbimg.onmouseleave = function () {
            timer = setInterval(getpre, 3000);
        }
        /* 为图片添加指示灯 */
        var bottomdot = document.createElement("div");
        bottomdot.style.left = 140 * (i + 1) + "px";
        bottomdot.name = i;
        dots.push(bottomdot);
        banner.appendChild(bottomdot);
        /* 为图片设置id 2 3 4 5 1*/
        if (i > 3) {
            lbli.id = i - 3;
        } else {
            lbli.id = i + 2;
        }

    }
    /* 分别为图片添加css */
    var len = pics.length - 1;
    pics[len - 2].style.left = "0px";
    pics[len - 2].style.opacity = 0.5;
    pics[len - 3].style.opacity = 0;
    pics[len - 4].style.opacity = 0;
    pics[len - 1].style.zIndex = 100;
    pics[len - 1].style.left = "200px";
    pics[len - 1].style.transform = "scale(1.3)";
    pics[len - 1].style.opacity = 1;
    pics[len].style.left = "400px";
    pics[len].style.opacity = 0.5;



    function getnext() {
        /* 将最后一个图移动数组的第一个位置 */
        var give_up = pics[len];
        pics.pop();
        pics.unshift(give_up);
        /* 按照新顺序给图片添加css来移动图片 */
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.zIndex = i;
            pics[i].style.transform = "scale(1)";
        }
        pics[len - 2].style.left = "0px";
        pics[len - 2].style.opacity = 0.5;
        pics[len - 3].style.opacity = 0;
        pics[len - 4].style.opacity = 0;
        pics[len - 1].style.zIndex = 100;
        pics[len - 1].style.left = "200px";
        pics[len - 1].style.transform = "scale(1.3)";
        pics[len - 1].style.opacity = 1;
        pics[len].style.left = "400px";
        pics[len].style.opacity = 0.5;
        /* 更新指示器 */
        dotmov();
        /* 添加左键移动图片事件 */
        pics[len - 2].onclick = function () {
            getnext();
        }
        pics[len].onclick = function () {
            getpre();
        }
    }

    function getpre() {
        var give_up = pics[0];
        pics.push(give_up);
        pics.shift();
        for (var i = 0; i < pics.length; i++) {
            pics[i].style.zIndex = i;
            pics[i].style.transform = "scale(1)";
        }
        pics[len - 2].style.left = "0px";
        pics[len - 2].style.opacity = 0.5;
        pics[len - 3].style.opacity = 0;
        pics[len - 4].style.opacity = 0;
        pics[len - 1].style.zIndex = 100;
        pics[len - 1].style.left = "200px";
        pics[len - 1].style.transform = "scale(1.3)";
        pics[len - 1].style.opacity = 1;
        pics[len].style.left = "400px";
        pics[len].style.opacity = 0.5;
        dotmov();
        pics[len - 2].onclick = function () {
            getnext();
        }
        pics[len].onclick = function () {
            getpre();
        }

    }

    /* 初始化指示器 */
    dots[0].style.background = "rgb(48, 72, 77)";
    /* 更新指示器 */
    function dotmov() {
        for (var i = 0; i < dots.length; i++) {
            if (dots[i].name == pics[len - 1].id) {
                dots[i].style.background = "rgb(48, 72, 77)";
            } else {
                dots[i].style.background = "rgb(123, 168, 175)";
            }
        }
    }

}