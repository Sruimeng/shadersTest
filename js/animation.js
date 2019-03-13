
var Animation = function (objects) {
    var scope = this;
    scope._objcets = objects;
}();

Animation.prototype = {
    create: function create(type, target) { //接收三个参数 分别为动画的类型和朝向的目标和开始的状态
        if (!isUnderfined(type) && !isUnderfined(target)) {
            scope._type = type;
            scope._target = taeget;
        }
    },

    from: function from(start) {
        if (!undefined(start)) {
            scope._start = start;
        }
    },

    to: function to(end, time) {
        if (!undefined(end)&&!undefined(time)) {
            scope._end=end;
            scope._time=time;
        }
    }
};

function milliSecond(time) {
    if(isNumber(time)){
        return time;
    }else if(isString(time)){
        if(/\dm?s$/.test(time)){
            return time
        }
    }
}


var isUnderfined = function(object) {
    return typeof object === "undefined";
}

var isNumber = function(object) {
    return typeof object === "number";
}

var isString = function(object) {
    return typeof object === 'string';
};