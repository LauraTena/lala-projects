uniform float time;
uniform float uProgress;

varying vec2 vUv;

void main() {
    vUv = uv;
    vec4 defaultState =  modelMatrix * vec4( position, 1.0 );
    vec4 fullScreenState=  vec4( position, 1.0 );
    vec4 finalState = mix(defaultState,fullScreenState,uProgress);
    gl_Position = projectionMatrix * viewMatrix * finalState;

    //model matrix remove all the positions set with three this.mesh.position.x = 100
}