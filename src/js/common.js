var projectUtil = {};
var projectSevice = {};
var projectData = {};
var projectShader={};
var projectParams = (function () {
    var _params = {
        renderer: undefined,
        scene: undefined,
        camera: undefined,
        controls: undefined,
        helper: undefined,
        arr: new Array(6),
        tick:new Array(),
        mixer:undefined,
        clock :new THREE.Clock(),
    };
    for (var index = 0,arrLength=_params.arr.length; index < arrLength; index++) {
        _params.arr[index]=new Array();
    }
   
    return {
        getParams: function () {
            return _params;
        },
        setParams: function (value) {
            _params = value;
        },
        getSceneParams: function () {
            return _params.scene;
        },
        getRendererParams:function(){
            return _params.renderer;
        }
    }
})();