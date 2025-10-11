precision lowp float;
varying vec3 pos;

uniform float u_time;

void main() {
    mat3 rotate = mat3(
        cos(u_time), 0.0, sin(u_time),
        0.0, 1.0, 0.0,
        -sin(u_time), 0.0, cos(u_time)
    );
    pos = position;
    gl_PointSize = 1.0;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(rotate * position, 1.0);
}