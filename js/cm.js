
//获取浏览器宽度
let width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

//获得link id
let _info = document.getElementById('links');

//判断浏览器大小
width > 400 ? _info.style.display = 'block' : _info.style.display = 'none';