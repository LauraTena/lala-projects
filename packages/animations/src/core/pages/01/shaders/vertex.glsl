uniform float time;
varying float pulse;

varying vec2 vUv;

void main() {
    vUv = uv;
    vec3 newPosition = position;
    newPosition.z = sin(length(position) * 30. + time) * 0.1;
    pulse = 2. * newPosition.z;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
}