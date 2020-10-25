//获取浏览器宽度
let w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

//获得link id
let info = document.getElementById('links');

//判断浏览器大小
w > 400 ? info.style.display = 'block' : info.style.display = 'none';

//请保留版权
if (window.console && window.console.log) {
    console.log("%c CM.js %c https://buyi.info ","color: #fff; margin: 1em 0; padding: 5px 0; background: #ffa628;","margin: 1em 0; padding: 5px 0; background: #efefef;");
}