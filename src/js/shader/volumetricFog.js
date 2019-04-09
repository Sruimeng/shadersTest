const volumetricFog_v = `


        varying vec2 vUv;
 
        void main()
        {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4( position, 0.5 );
        gl_Position = projectionMatrix * mvPosition;
        }
`;

const volumetricFog_f = `
    varying vec2 vUv;
 
    void main( void ) {
 
    vec2 position = - 1.0 + 2.0 * vUv;
 
    float red = abs( sin( position.x * position.y ) );
    float green = abs( sin( position.x * position.y  ) );
    float blue = abs( sin( position.x * position.y  ) );
    gl_FragColor = vec4( red, green, blue, 0.5);
 
    }
`;