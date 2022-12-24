window.onload = () => {
  var img = document.querySelectorAll(".img");
  var left = document.querySelector(".left");
  var right = document.querySelector(".right");
  var buttons = document.querySelectorAll("p");

  //设置一个数组，用来存id
  idArr = ["first", "second", "right", "left", "left", "left", "last"];

  //设置一个变量用来当图片的索引
  var index = 0;

  initialize();

  //设置一个定时器，让图片轮播
  var timer = setInterval(next, 3000);

  //给箭头绑定点击事件
  left.addEventListener("click", prev);
  //当鼠标放到箭头上时，让定时器停止
  left.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  //当鼠标离开箭头时，让定时器重新开始
  left.addEventListener("mouseout", () => {
    timer = setInterval(next, 3000);
  });

  right.addEventListener("click", next);
  right.addEventListener("mouseover", () => {
    clearInterval(timer);
    timer = null;
  });
  right.addEventListener("mouseout", () => {
    timer = setInterval(next, 3000);
  });

  //给小方块添加点击事件
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousedown", () => {
      //在用户点击的时候关闭定时器
      clearInterval(timer);
      timer = null;
      //这里需要判断用户点击的小方块与当前图片的索引之差，如果
      //大于0，则表明用户需要更换的是后面的图片，反之，表明用户
      //需要更换之前也就是前面的图片
      if (index > i) {
        let x = index - i;
        while (x--) {
          prev();
        }
      } else if (index < i) {
        let x = i - index;
        while (x--) {
          next();
        }
      }
    });
  }

  //创建切换图片的函数
  function prev() {
    //切换上一张也就是让数组的最后一个元素变成第一个元素
    idArr.push(idArr.shift());
    initialize();
    if (index === 0) {
      index = buttons.length - 1;
    } else {
      index--;
    }
    clearColor();
  }
  function next() {
    //跟上面反过来
    idArr.unshift(idArr.pop());
    initialize();
    if (index === buttons.length - 1) {
      index = 0;
    } else {
      index++;
    }
    clearColor();
  }

  //创建一个函数用来让小方块跟随图片运动
  function clearColor() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = "silver";
    }
    //让当前的索引变色
    buttons[index].style.backgroundColor = "rgb(20, 134, 187)";
  }

  //创建一个函数用来初始化图片
  function initialize() {
    for (let i = 0; i < img.length; i++) {
      img[i].id = idArr[i];
    }
  }
};
