const tools = {
    // 判断是否是图片后缀
    isImg(str) {
        var regs = [/jpg/i, /jpeg/i, /png/i, /gif/i];
        let flag = true;
        for (let i in regs) {
            if (regs[i].test(str)) {
                flag = true;
                break;
            }
        }
        return flag;
    },
    // 验证账号
    isvalidUsername(str) {
        //必须字母开头，可以纯字母可以加数字字符  唯一不可以加的就是汉字
        const reg = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*~`,.+=\-_\<\>\?:;'"{}\[\]|/\\]*$/;
        return reg.test(str)

    },
    // 验证密码
    isvalidPassword(str) {
        const reg = /^(?=.*?[A-Za-z]+)(?=.*?[0-9]+)(.*)$/   // 必须包含字母和数字
        const len = str.length >= 8 //且超过8位
        return reg.test(str) && len
    },
    // 验证是否是合法url
    validateURL(textval) {
        const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
        return urlregex.test(textval)
    },
    /*获取元素四个边距离可视区得距离，以及宽高属性*/
    getEleRect(ele) {
        let rect = ele.getBoundingClientRect();
        rect.width = rect.right - rect.left;// 老版本ie未实现width和height
        rect.height = rect.bottom - rect.top;// 老版本ie未实现width和height
        return rect
    },
    getTime(date = new Date()) {
        if (typeof (data) == 'number') {
            date = new Date(date);
        }
        let year = date.getFullYear().toString();// 年
        year = year.length === 1 ? "0" + year : year;
        let month = (date.getMonth() + 1).toString();// 月
        month = month.length === 1 ? "0" + month : month;
        let day = date.getDate().toString();// 日
        day = day.length === 1 ? "0" + day : day;
        let hours = date.getHours().toString();// 时
        hours = hours.length === 1 ? "0" + hours : hours;
        let minutes = date.getMinutes().toString();// 分
        minutes = minutes.length === 1 ? "0" + minutes : minutes;
        let seconds = date.getSeconds().toString();// 秒
        seconds = seconds.length === 1 ? "0" + seconds : seconds;
        return {
            year,
            month,
            day,
            hours,
            minutes,
            seconds,
            frankTime: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
        }
    },
    // 使用——Alert.show(1,'info',时间毫秒)
    Alert: function () {
        function ConstructorOAlert() {
            this.oAlert = {
                bgWrap : '',
                alertContent : '',
                init(){
                    let bgWrap = document.createElement('div');
                    bgWrap.id = 'my_alert_bg';
                    bgWrap.style.backgroundColor = "rgba(0,0,0,0.2)";
                    bgWrap.style.position = 'fixed';
                    bgWrap.style.zIndex = '127';
                    bgWrap.style.top = "0";
                    bgWrap.style.left = "0";
                    bgWrap.style.width = "100%";
                    bgWrap.style.height = "100%";
                    bgWrap.style.visibility = 'hidden';
                    bgWrap.style.opacity = '0';
                    bgWrap.style.transition = "1s";
                    let alertContent = document.createElement('div');
                    alertContent.style.padding = "13px 17px";
                    alertContent.style.position = "absolute";
                    alertContent.style.fontSize = "16px";
                    alertContent.style.zIndex = "106";
                    alertContent.style.left = "50%";
                    alertContent.style.top = "46%";
                    alertContent.style.transform = "translate(-50%)";
                    alertContent.style.color = "#fff";
                    alertContent.style.boxShadow = "0 0 15px 1px #fff";
                    alertContent.style.borderRadius = "4px";
                    this.bgWrap = bgWrap;
                    this.alertContent = alertContent;
                    this.bgWrap.appendChild(this.alertContent);// 将内容条放入背景内
                    document.body.appendChild(this.bgWrap);// 加入到页面
                },
                show(status = '1', info = 'Loading...',transience = false, delayHide = 650) {
                    /*
                    * status    决定内容条背景色：1 成功背景色| 0失败背景色
                    * info      内容条内容
                    * transience是否需要自动消失
                    * delayHide 内容条存活时间
                    * */
                    this.alertContent.innerText = info.toString();
                    this.alertContent.style.backgroundColor = status == 1 ? "rgba(76, 174, 76,1)" : "rgba(217, 83, 58,1)";
                    this.bgWrap.style.visibility = "visible";
                    this.bgWrap.style.opacity = "1";
                    if (transience) {
                        setTimeout(()=>{
                            this.bgWrap.style.visibility = "hidden";
                            this.bgWrap.style.opacity = "0";
                        }, delayHide)
                    }
                },
                hide() {
                    this.bgWrap.style.visibility = "hidden";
                    this.bgWrap.style.opacity = "0";
                }
            }
        }
        let o = new ConstructorOAlert();
        o.oAlert.init();
        return o.oAlert;
    },
    // 设置cookie
    setCookie(name,value,hours = 2) {

        var exp = new Date();
        exp.setTime(exp.getTime() + hours*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    },
    // 获取cookie
    getCookie(name) {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return unescape(arr[2]);
        } else{
            return null;
        }
    },
    // 删除cookie
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=tools.getCookie(name);
        if(cval!=null){
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
        }
    },
};

/*使元素可以任意拖拽（前提是元素必须有定位属性）*/
Element.prototype.drop = function (){
    var x,y,ele = this;
    ele.onmousedown = function (ev) {
        var ev = ev || window.event;
        ev.stopPropagation();
        ev.cancelBubble = true;
        x = ev.pageX - parseInt(window.getComputedStyle(ele,null).left);
        y = ev.pageY - parseInt(window.getComputedStyle(ele,null).top);
        console.log('window.getComputedStyle(ele,null).left', window.getComputedStyle(ele,null).left);
        console.log('window.getComputedStyle(ele,null).top', window.getComputedStyle(ele,null).top);
        document.onmousemove = function (ev) {
            var eve = ev || window.event;
            ele.style.left = eve.pageX - x + "px";
            ele.style.top = eve.pageY - y + "px";
        };
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    };
    let width, height;// 获取元素自身宽高
    let app = document.getElementById('app');
    ele.ontouchstart = function(ev) {

    };

    let isMove = false;
    // 手指离开屏幕
    ele.ontouchend = function(ev) {
        var ev = ev || window.event;
        ev.stopPropagation();
        ev.cancelBubble = true;
        document.body.removeEventListener('touchmove', tools.cancelHandler, false);
        app.style.overflow = 'visible';
        app.style.height = 'auto';
        isMove = false;// 回归默认值
    };
    let {w:viewWidth, h:viewHeight} = tools.getViewportOffset();// 获取可视区宽高
    ele.ontouchmove = function(ev) {
        var ev = ev || window.event;
        ev.stopPropagation();
        ev.cancelBubble = true;

        // move时只执行一次，使页面禁止滚动，
        if (!isMove) {
            isMove = true;// 使该if不要重复执行
            let rect = tools.getEleRect(ele);
            app = document.getElementById('app');
            width = rect.width;
            height = rect.height;
            app.style.overflow = 'hidden';
            app.style.height = '100vh';
        }


        let left = ev.changedTouches[0].clientX - width / 2;// 获取即将用来使用的left
        let top = ev.changedTouches[0].clientY - height / 2;// 获取即将用来使用的top
        // 过滤值
        left = left < 0 ? 0 : left;
        left = left > viewWidth - width ? viewWidth - width : left;
        top = top < 0 ? 0 : top;
        top = top > viewHeight - height ? viewHeight - height : top;
        // 过滤完毕，开始赋值投入使用
        ele.style.left = left + "px";
        ele.style.top = top + "px";
    }
};
export default tools;
