/// <reference path="c:/Users/WeShape3D/Desktop/pbr/test/node_modules/@types/three/index.d.ts" />
/// <reference path="c:/Users/WeShape3D/Desktop/pbr/test/node_modules/@types/three/index.d.ts" />
projectSevice.pageSevice = (function () {
    function pageSevice() {};
    var current = 1,
        target = 1;

    pageSevice.prototype = {
        initPage: async function (arr) {
            await projectUtil.pageUtil.prototype.initPageUtil(arr);
            console.log(arr[4]);
            projectSevice.textSevice.prototype.startTextAnimation(arr[3], 1000);
            projectSevice.animationSevice.prototype.positionAnimationSevice(params.arr[1], 10, 1250);
            projectSevice.animationSevice.prototype.positionAnimationSevice(params.arr[2], 10, 1250);
        },
        buttonClick: function (flag, params) {
            if (flag) {
                if (current === 5) {
                    target = 1;
                } else {
                    target++;
                }
            } else {
                if (current === 1) {
                    target = 5;
                } else {
                    target--;
                }
            }
            this.changePage(current, target, params);
            current = target;
        },
        changePage: async function (current, target, params) {
            switch (current) {
                case 1:
                    projectUtil.pageUtil.prototype.step1ChangeUtil(true, params.arr);
                    break;
                case 2:
                    projectUtil.pageUtil.prototype.step2ChangeUtil(true, params.arr);
                    break;
                default:
                    break;
            }
            switch (target) {
                case 1:
                    break;
                case 2:
                    projectUtil.pageUtil.prototype.step2ChangeUtil(false, params.arr);
                    projectSevice.animationSevice.prototype.actionAnimationSevice(params, true);
                    setTimeout(() => {
                        projectSevice.animationSevice.prototype.normalAnimationSevice(params.camera, new THREE.Vector3(29, 16, 15), new THREE.Vector3(27, 16, -12), 1000, params.controls);
                    }, 1500);
                    break;
                case 3:
                    params.scene.fog =new THREE.FogExp2(0xffffff, 0.02);
                    projectUtil.pageUtil.prototype.step3ChangeUtil(true, params.arr);
                    projectSevice.animationSevice.prototype.normalAnimationSevice(params.camera, new THREE.Vector3(0, 0, 75), new THREE.Vector3(0, 0, 0), 1000, params.controls);
                    break;
                default:
                    break;
            }
        },
        switchPage: function (arr, flag) {
            projectUtil.pageUtil.prototype.switchPageUtil(arr, flag);
        },
        switchDocments: function (id, name, flag) {
            projectUtil.pageUtil.prototype.showDocumentUtil(id, name, flag)
        }
    }
    return pageSevice;
})();