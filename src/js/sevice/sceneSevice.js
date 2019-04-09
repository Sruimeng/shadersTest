projectSevice.sceneSevice=(function (){
    function sceneSevice(){};
    sceneSevice.prototype={
        initScene:function(){
            projectUtil.sceneUtil.prototype.creatScene();
        },
        start: function(params){
            projectUtil.sceneUtil.prototype.startRender(params);
        }
    }
    return sceneSevice;
})();