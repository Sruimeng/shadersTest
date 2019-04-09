projectSevice.animationSevice = (function () {
    function animationSevice() {};
    animationSevice.prototype = {
        normalAnimationSevice: function (camera, position, target, time, controls) {
            projectUtil.animationUtil.prototype.cameraAnimation(camera, position, target, time, controls);
        },
        textAnimationSevice: function (text, time) {
            projectUtil.animationUtil.scaleAnimation(text, time);
        },
        positionAnimationSevice: function (array, position, time) {
            for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
                projectUtil.animationUtil.prototype.positionAnimation(array[i], position, time);
            }
        },
        actionAnimationSevice: function (actionParams,flag) {
            projectUtil.animationUtil.prototype.actionAnimationUtil(actionParams,flag);
        }
    }
    return animationSevice;
})();