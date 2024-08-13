
let t = null;
time();
function time() {
    clearTimeout(t); // 清除定时器
    const dt = new Date();
    const y = dt.getFullYear();
    const mt = dt.getMonth() + 1;
    const day = dt.getDate();
    const h = dt.getHours(); // 获取时
    const m = dt.getMinutes(); // 获取分
    const s = dt.getSeconds(); // 获取秒
    document.querySelector(".showtime").innerHTML = '当前时间：' + y + "年" + mt + "月" + day + "日" + h + "时" + m + "分" + s + "秒";
    //document.querySelector作用是选择showtime这个类
    t = setTimeout(time, 1000); // 设定定时器，循环运行
}
