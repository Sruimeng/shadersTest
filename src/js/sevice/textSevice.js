projectSevice.textSevice = (function () {
    function textSevice() {};
    textSevice.prototype = {
        initText: async function (projectParams) {
            var scope, textParams;
            scope = await projectData.textData.prototype.createLoader(projectParams.scene, projectParams.renderer);
            textParams = projectData.textData.prototype.textDataUtil(projectParams.arr, scope);
            for (i = 0, textParamsLength = textParams.length; i < textParamsLength; i++) {
                projectUtil.textUtil.prototype.create(textParams[i]);
            }
        },
        startTextAnimation:function (arr, time) {
            for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
               projectUtil.animationUtil.prototype.scaleAnimation(arr[i].children[2], time);
               projectUtil.animationUtil.prototype.scaleAnimation(arr[i].children[4], time);
               projectUtil.animationUtil.prototype.scaleAnimation(arr[i].children[0], time);              
            }
        }
    }
    return textSevice;
})();