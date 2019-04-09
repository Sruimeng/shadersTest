projectSevice.buttonSevice = (function () {
    function buttonSevice() {};
    var sunziButtonFlag = true,
        sunbinButtonFlag = true,
        zoomFlag=true;
    buttonSevice.prototype = {
        sunbinButtonClick: function (flag, id1, id2, arr1, arr2, params) {
            !flag || (sunbinButtonFlag=true);
            flag || (sunziButtonFlag=true);
            projectSevice.pageSevice.prototype.switchDocments("#" + id1, "active", false);
            projectSevice.pageSevice.prototype.switchPage(arr1, false);
            if (sunbinButtonFlag&&sunziButtonFlag) {
                projectSevice.pageSevice.prototype.switchDocments("#" + id2, "active", true);
                projectSevice.pageSevice.prototype.switchPage(arr2, true);
                projectSevice.pageSevice.prototype.switchPage(params.arr[0], false); 
                projectSevice.pageSevice.prototype.switchPage(params.arr[3], false);
            } else {
                projectSevice.pageSevice.prototype.switchDocments("#" + id2, "active", false);
                projectSevice.pageSevice.prototype.switchPage(arr2, false);
                projectSevice.pageSevice.prototype.switchPage(params.arr[0], true);
                projectSevice.pageSevice.prototype.switchPage(params.arr[3], true);
                projectSevice.textSevice.prototype.startTextAnimation(params.arr[3], 1000);
            }
            !flag || (sunziButtonFlag = !sunziButtonFlag);
            flag || (sunbinButtonFlag = !sunbinButtonFlag);
        },
        zoomButtonClick:function(params){
            projectSevice.pageSevice.prototype.switchDocments("#button", "active", zoomFlag);
            if(zoomFlag){
                projectSevice.animationSevice.prototype.normalAnimationSevice(params.camera, new THREE.Vector3(0, 0, 150), new THREE.Vector3(0, 0, 0), 1000, params.controls);
                setTimeout(() => {
                    projectSevice.animationSevice.prototype.actionAnimationSevice(params,!zoomFlag);
                    zoomFlag=!zoomFlag;
                }, 1000);  
            }else{
                projectSevice.animationSevice.prototype.actionAnimationSevice(params,!zoomFlag);
                    setTimeout(() => {
                        projectSevice.animationSevice.prototype.normalAnimationSevice(params.camera, new THREE.Vector3(29, 16, 15), new THREE.Vector3(27, 16, -12), 1000, params.controls);
                        zoomFlag=!zoomFlag;
                    }, 1500);
            }
        }

    }
    return buttonSevice;
})();