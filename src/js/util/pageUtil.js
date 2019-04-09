projectUtil.pageUtil = (function () {
    function pageUtil() {};
    pageUtil.prototype = {
        initPageUtil: function (arr) {
            this.switchPageUtil(arr[0], true);
            this.switchPageUtil(arr[3], true);
        },
        step1ChangeUtil: function (flag, arr) {
                this.showDocumentUtil("#iconsTop", "active", !flag);
                this.showDocumentUtil("#sunbinButton", "active", !flag);
                this.showDocumentUtil("#sunziButton", "active", !flag);
                this.switchPageUtil(arr[0], !flag);
                this.switchPageUtil(arr[1], !flag);
                this.switchPageUtil(arr[2], !flag);
                this.switchPageUtil(arr[3], !flag);
        },
        step2ChangeUtil: function (flag,arr){
          this.showDocumentUtil("#button","block",!flag);
          this.switchPageUtil(arr[4], !flag);
        },
        step3ChangeUtil:function (flag,arr){
            this.switchPageUtil(arr[5], flag);
        },
        showDocumentUtil: function (id, name, flag) {
            if (flag) {
                document.querySelector(id).classList.add(name);
            } else {
                document.querySelector(id).classList.remove(name);
            }
        },
        switchPageUtil: function (arr, flag) { //切换场景工具类
            for (i = 0, arrLength = arr.length; i < arrLength; i++) {
                arr[i].visible = flag;
            }
        }

    };
    return pageUtil;
})();