projectUtil.textUtil = (function () {
    function textUtil() {};
    textUtil.prototype = {
        create: async function (params) {
            this._type = params.type;
            this._horizontal = params.horizontal;
            this._vertical = params.vertical;
            this._font = params.font;
            this._text = params.text;
            this._position = params.position;
            this._size = params.size;
            this._face = params.face;
            this._scene = params.scene;
            this._arr=params.arr;
            this._meshMaterial = new THREE.MeshStandardMaterial({
                color:params.color,
                envMap:params.rgbmCubeRenderTarget,
                emissive: params.color,
                side: THREE.DoubleSide,
            });
            this._group = new THREE.Object3D();
            this.initText(this._type);
        },
        initText: function (type) {
            switch (type) {
                case 1:
                    this.normalSizeUtil();
                    break;
                default:
                    break;
            }
        },
        normalSizeUtil: async function () {
            var horizontalLength = this._horizontal / 2 - this._size;
            var verticalLength = this._vertical;
            console.log(horizontalLength);
            var box3 = this.textMeshUtil();
            this.addUtil(box3, true, horizontalLength, verticalLength);
            this.addUtil(box3, false, horizontalLength, verticalLength);
            this._group.visible=false;
            this._arr.push(this._group);
            this._scene.add(this._group);
        },
        fontLoadUtil: async function () {
            var fontLoader = new THREE.FontLoader();
            var json = await fontLoader.awaitLoad("font/gentilis_bold.typeface.json");
            return json;
        },
        horizontalLineUtil: function (horizontalLength, targetPosition, horizontalRotation) {
            var geometry = new THREE.BoxGeometry(this._size / 5, horizontalLength, 0.05);
            var line = new THREE.Mesh(geometry, this._meshMaterial);
            line.name="horizontal";
            line.rotation.copy(horizontalRotation);
            line.position.copy(targetPosition);
            this._group.add(line);
        },
        verticalLineUtil: function (verticalLength, targetPosition, verticalRotation) {
            var geometry = new THREE.BoxGeometry(this._size / 5, verticalLength, 0.05);
            var line = new THREE.Mesh(geometry, this._meshMaterial);
            line.name="vertical";
            line.rotation.copy(verticalRotation);
            line.position.copy(targetPosition);
            this._group.add(line);
        },
        textMeshUtil: function () {
            var geometry = new THREE.TextGeometry(this._text, {
                font: this._font,
                size: this._size,
                height: 0.05,
            });
            var textMesh = new THREE.Mesh(geometry, this._meshMaterial);
            textMesh.position.copy(this._position);
            this._group.add(textMesh);
            return new THREE.Box3().setFromObject(textMesh);
        },
        addUtil: function (box3, flag, horizontalLength, verticalLength) {
            var horizontalPosition = new THREE.Vector3,
                verticalPosition = new THREE.Vector3(),
                horizontalRotation = new THREE.Euler(),
                verticalRotation = new THREE.Euler(),
                box3X = Math.abs(box3.max.x - box3.min.x),
                box3Y = Math.abs(box3.max.y - box3.min.y),
                box3Z = Math.abs(box3.max.z - box3.min.z),
                offset = 0.2;
            switch (this._face) {
                case 0:
                    verticalRotation.set(0, 0, 0);
                    horizontalRotation.set(0, 0, Math.PI / 2);
                    horizontalPosition = flag ? horizontalPosition.set(this._position.x - horizontalLength / 2, this._position.y + box3Y / 2, this._position.z) : horizontalPosition.set(this._position.x + horizontalLength / 2 + box3X, this._position.y + box3Y / 2, this._position.z);
                    verticalPosition = flag ? verticalPosition.set(horizontalPosition.x - horizontalLength / 2 + offset, horizontalPosition.y + verticalLength / 2, horizontalPosition.z) : verticalPosition.set(horizontalPosition.x + horizontalLength / 2 - offset, horizontalPosition.y + verticalLength / 2, horizontalPosition.z);
                    this.verticalLineUtil(verticalLength, verticalPosition, verticalRotation);
                    this.horizontalLineUtil(horizontalLength, horizontalPosition, horizontalRotation);
                    break;
                case 1:
                    verticalRotation.set(0, 0, 0);
                    horizontalRotation.set(0, 0, Math.PI / 2);
                    horizontalPosition = flag ? horizontalPosition.set(this._position.x - horizontalLength / 2, this._position.y + box3Y / 2, this._position.z) : horizontalPosition.set(this._position.x + horizontalLength / 2 + box3X, this._position.y + box3Y / 2, this._position.z);
                    verticalPosition = flag ? verticalPosition.set(horizontalPosition.x - horizontalLength / 2 + offset, horizontalPosition.y - verticalLength / 2, horizontalPosition.z) : verticalPosition.set(horizontalPosition.x + horizontalLength / 2 - offset, horizontalPosition.y - verticalLength / 2, horizontalPosition.z);
                    this.verticalLineUtil(verticalLength, verticalPosition, verticalRotation);
                    this.horizontalLineUtil(horizontalLength, horizontalPosition, horizontalRotation);
                    break;
                case 2:
                    horizontalRotation.set(0, 0, 0);
                    verticalRotation.set(0, 0, Math.PI / 2);
                    horizontalPosition = flag ? horizontalPosition.set(this._position.x + box3X / 2, this._position.y + box3Y + horizontalLength / 2, this._position.z) : horizontalPosition.set(this._position.x + box3X / 2, this._position.y - horizontalLength / 2, this._position.z);
                    verticalPosition = flag ? verticalPosition.set(horizontalPosition.x - verticalLength / 2, horizontalPosition.y + horizontalLength / 2 - offset, horizontalPosition.z) : verticalPosition.set(horizontalPosition.x - verticalLength / 2, horizontalPosition.y - horizontalLength / 2 + offset, horizontalPosition.z);
                    this.verticalLineUtil(verticalLength, verticalPosition, verticalRotation);
                    this.horizontalLineUtil(horizontalLength, horizontalPosition, horizontalRotation);
                    break;
                case 3:
                    horizontalRotation.set(0, 0, 0);
                    verticalRotation.set(0, 0, Math.PI / 2);
                    horizontalPosition = flag ? horizontalPosition.set(this._position.x + box3X / 2, this._position.y + box3Y + horizontalLength / 2, this._position.z) : horizontalPosition.set(this._position.x + box3X / 2, this._position.y - horizontalLength / 2, this._position.z);
                    verticalPosition = flag ? verticalPosition.set(horizontalPosition.x + verticalLength / 2, horizontalPosition.y + horizontalLength / 2 - offset, horizontalPosition.z) : verticalPosition.set(horizontalPosition.x + verticalLength / 2, horizontalPosition.y - horizontalLength / 2 + offset, horizontalPosition.z);
                    this.verticalLineUtil(verticalLength, verticalPosition, verticalRotation);
                    this.horizontalLineUtil(horizontalLength, horizontalPosition, horizontalRotation);
                    break;
                case 4:
                    this._group.children[0].rotation.set(-Math.PI / 2, Math.PI / 2, Math.PI / 2);
                    horizontalRotation.set(-Math.PI / 2, -Math.PI / 2, Math.PI);
                    verticalRotation.set(0, -Math.PI / 2, 0);
                    horizontalPosition = flag ? horizontalPosition.set(this._position.x, this._position.y + box3Y / 2, this._position.z + horizontalLength / 2) : horizontalPosition.set(this._position.x, this._position.y + box3Y / 2, this._position.z - horizontalLength / 2 - box3X);
                    verticalPosition = flag ? verticalPosition.set(horizontalPosition.x, horizontalPosition.y + verticalLength / 2 - offset, horizontalPosition.z + horizontalLength / 2) : verticalPosition.set(horizontalPosition.x, horizontalPosition.y + verticalLength / 2 - offset, horizontalPosition.z - horizontalLength / 2);
                    this.verticalLineUtil(verticalLength, verticalPosition, verticalRotation);
                    this.horizontalLineUtil(horizontalLength, horizontalPosition, horizontalRotation);
                    break;
                case 5:
                    this._group.children[0].rotation.set(-Math.PI / 2, Math.PI / 2, Math.PI / 2);
                    horizontalRotation.set(-Math.PI / 2, -Math.PI / 2, Math.PI);
                    verticalRotation.set(0, -Math.PI / 2, 0);
                    horizontalPosition = flag ? horizontalPosition.set(this._position.x, this._position.y + box3Y / 2, this._position.z + horizontalLength / 2) : horizontalPosition.set(this._position.x, this._position.y + box3Y / 2, this._position.z - horizontalLength / 2 - box3X);
                    verticalPosition = flag ? verticalPosition.set(horizontalPosition.x, horizontalPosition.y - verticalLength / 2 - offset, horizontalPosition.z + horizontalLength / 2) : verticalPosition.set(horizontalPosition.x, horizontalPosition.y - verticalLength / 2 - offset, horizontalPosition.z - horizontalLength / 2);
                    this.verticalLineUtil(verticalLength, verticalPosition, verticalRotation);
                    this.horizontalLineUtil(horizontalLength, horizontalPosition, horizontalRotation);
                    break;
            }
        },
    }
    return textUtil;
})();