
//获取浏览器宽度
let w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

//获得link id
let info = document.getElementById('links');

//判断浏览器大小
w > 400 ? info.style.display = 'block' : info.style.display = 'none';
