uniform float time;
uniform float uProgress;

uniform vec2 uResolution;
uniform vec2 uQuadSize;

varying vec2 vUv;
varying vec2 vSize;
uniform vec4 uCorners;

float PI = 3.1415926;

void main() {
    vUv = uv;
    float sine = sin(PI*uProgress);
    float waves = sine*0.1*sin(10.*length(uv) * uProgress);
    vec4 defaultState =  modelMatrix * vec4( position, 1.0 );
    vec4 fullScreenState=  vec4( position, 1.0 );
    fullScreenState.x *= uResolution.x;
    fullScreenState.y *= uResolution.y;
    fullScreenState.z += uCorners.x;
    float cornersProgress = mix(
        mix(uCorners.x, uCorners.y, uv.x),
        mix(uCorners.z, uCorners.w, uv.x),
        uv.y
    );

    vec4 finalState = mix(defaultState,fullScreenState,cornersProgress + waves);

    vSize = mix(uQuadSize, uResolution, uProgress);
    gl_Position = projectionMatrix * viewMatrix * finalState;

    //model matrix remove all the positions set with three this.mesh.position.x = 100
}