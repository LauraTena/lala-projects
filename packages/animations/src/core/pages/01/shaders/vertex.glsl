uniform float time;
varying float pulse;

void main() {
    vec3 newPosition = position;
    newPosition.z = sin(length(position) * 30. + time) * 0.1;
    pulse = 2. * newPosition.z;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( newPosition, 1.0 );
}