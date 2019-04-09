/// <reference path="c:/Users/WeShape3D/Desktop/three_test2/node_modules/@types/three/index.d.ts" />
/// <reference path="c:/Users/WeShape3D/Desktop/three_test2/node_modules/@types/core-js/index.d.ts" />
projectUtil.sceneUtil = (function () {
    function sceneUtil() {};
    sceneUtil.prototype = {
        creatScene: function () {
            // if (sceneParams !== undefined) {
            //     this._scene = sceneParams.scene;
            //     this._controls = sceneParams.controls;
            //     this._helper = sceneParams.helper;
            //     this._camera = sceneParams.camera;
            //     this._renderer = sceneParams.renderer;
            // }
            this.addScene();
            this.addCamera();
            this.addControls();
            this.addRenderer();
            this.addSupport();

            var params = projectParams.getParams();
            params.renderer = this._renderer;
            params.scene = this._scene;
            params.camera = this._camera;
            params.controls = this._controls;
            params.helper = this._helper;
            projectParams.setParams(params);
        },
        addScene: function () {
            this._scene = new THREE.Scene(); //新建场景
            this._scene.background = new THREE.Color(0xffffff);
        },
        addControls: function () {
            this._controls = new THREE.OrbitControls(this._camera); //参数选择
            this._controls.enableRotate = true; //开启旋转
            this._controls.rotateSpeed = 0.1; //旋转速度
            this._controls.enableZoom = true; //开启旋转
            this._controls.zoomSpeed = 0.5; //旋转速度
            this._controls.enableDamping = true; //开启阻尼效果
            this._controls.dampingFactor = 0.1;
            this._controls.autoRotate = false; //关闭自动旋转
            this._controls.enablePan = true; //右键拖拽
            this._controls.minPolarAngle = Math.PI / 18; //设置最小视角1
            this._controls.maxPolarAngle = Math.PI / 2; //设置最大视角
            this._controls.maxDistance = 200; //最大最小缩放距离
            this._controls.minDistance = 20;
        },
        addSupport: function () {
            this._helper = new THREE.AxesHelper(); //在原点添加辅助线
            this._scene.add(this._helper);
        },
        addCamera: function () {
            this._camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
            this._camera.position.set(0,0, 50);
            this._scene.add(this._camera);
        },
        addRenderer: function () {
            this._renderer = new THREE.WebGLRenderer({
                antialias: true, //开启抗锯齿
                alphe: true, //开始混合
            });
            this._renderer.setPixelRatio(window.devicePixelRatio); //设置像素比率
            this._renderer.setSize(window.innerWidth, window.innerHeight);
            this._renderer.gammaInput = true;
            this._renderer.gammaOutput = true;
            this._renderer.toneMapping = THREE.ACESFilmicToneMapping;
            this._renderer.toneMappingExposure = 0.7;
            this._renderer.gammaFactor = 2.2;
        },
        startRender: function (params) {
            (function render() {
                "use strict";
                TWEEN.update();
                var delta = params.clock.getDelta();
                if ( params.mixer ) {
                    params.mixer.update( delta );
                }
                params.controls.update();
                params.renderer.render(params.scene, params.camera);
                window.requestAnimationFrame(render);
            })();
        },
    };
    return sceneUtil;
})();