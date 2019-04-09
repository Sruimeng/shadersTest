projectUtil.animationUtil = (function () {
    function animationUtil() {};
    animationUtil.prototype = {
        cameraAnimation: function (camera, position, target, time, controls) {
            new TWEEN.Tween(camera.position).to(position, time).easing(TWEEN.Easing.Linear.None)
                .onUpdate(function (value) {
                    camera.position.copy(value);
                })
                .start();
            new TWEEN.Tween(controls.target).to(target, time).easing(TWEEN.Easing.Linear.None)
                .onUpdate(function (value) {
                    controls.target = value;
                })
                .start();
        },
        scaleAnimation: async function (text, time) {
            var tween = new TWEEN.Tween({
                scale: 0
            }).to({
                scale: 1
            }, time).easing(TWEEN.Easing.Linear.None).start();
            tween.onUpdate(function (value) {
                text.scale.y = value.scale;
            });
        },
        actionAnimationUtil: function (actionParams, flag) {
            actionParams.mixer = new THREE.AnimationMixer(actionParams.arr[4][0]);
            actionParams.action = actionParams.mixer.clipAction(actionParams.arr[4][0].animations[0]);
            actionParams.action.reset();
            if (flag) {
                actionParams.action.setEffectiveTimeScale(0.5);
            } else {
                actionParams.action.setEffectiveTimeScale(-0.5);
            }
            actionParams.action.setLoop(THREE.LoopPingPong, 1);
            actionParams.action.clampWhenFinished = true;
            actionParams.action.play();
            console.log(actionParams.action);
        },
        positionAnimation: function (mesh, position, time) {
            setTimeout(() => {
                new TWEEN.Tween({
                        y: mesh.position.y
                    }).to({
                        y: mesh.position.y + position
                    }, time)
                    .repeat(Infinity)
                    .yoyo(true)
                    .easing(TWEEN.Easing.Linear.None)
                    .onUpdate(function (object) {
                        mesh.position.y = object.y
                    })
                    .start();
            }, Math.random() * 1000);
        },
        positionAnimationUtil: function (positionY) {
            var cycleUtilParams = {
                pro: 0, //当前数值
                end: 1, //结束数值
                direction: 1, //方向标志位
                speed: 1, //步长
                offset: 0.001, //偏移量
                result: 0,
                realY: 0,
                tempY: 0,
            };
            cycleUtilParams.tempY = positionY;
            cycleUtilParams.realY = positionY;
            cycleUtilParams.pro += cycleUtilParams.speed * cycleUtilParams.direction;
            if (cycleUtilParams.direction > 0) {
                cycleUtilParams.end = Math.max(cycleUtilParams.end, cycleUtilParams.pro);
                if (cycleUtilParams.pro >= 1) {
                    cycleUtilParams.end = 0;
                    cycleUtilParams.direction = -1;
                }
            } else if (cycleUtilParams.direction < 0) {
                cycleUtilParams.end = Math.min(cycleUtilParams.end, cycleUtilParams.pro);
                if (cycleUtilParams.pro <= -1) {
                    cycleUtilParams.end = 1;
                    cycleUtilParams.direction = 1;
                }
            }
            cycleUtilParams.result = cycleUtilParams.pro * cycleUtilParams.offset;
            cycleUtilParams.realY = cycleUtilParams.tempY + cycleUtilParams.result;
            return cycleUtilParams.result
        }
    }
    return animationUtil;
})();