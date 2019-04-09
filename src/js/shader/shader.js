// projectShader.shader = (function () {
//     function shader() {

//     };
//     this.nomalShader_v = `
//                 varying vUv; //新建uv变量
//                 void main() {
//                     vUv=uv;//将外部变量传递给新建的uv变量
//                     vec4 myPosition=  projectionMatrix * modelViewMatrix * vec4( position , 1.0);
//                     gl_position = myPosition;
//                 }
//             `;
//     const nomalShader_f = `
//                 varying vUv; //接受从顶点着色器传过来的变量
//                 void main(){
//                     gl_FragColor = vec4(1.0,1.0,1.0,1.0);
//                 }
//             `;
//     return shader;
// })();

projectShader.nomalShader_v = `
                varying vec2 img;
                void main() {
                    img = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `;
projectShader.nomalShader_f = `
                varying vec2 img;
                void main() {
                    gl_FragColor = vec4(img.x, img.x, img.x, 1.0);
                }
            `;