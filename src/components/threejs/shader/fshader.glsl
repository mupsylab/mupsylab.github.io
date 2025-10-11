precision lowp float;
varying vec3 pos;

uniform sampler2D u_tex;
uniform float u_r;

void main() {
    vec2 uv = pos.xz / u_r + vec2(0.5);
    vec3 color = texture2D(u_tex, uv).rbg;
    float brightness = length(color);

    if (brightness < 1.0) {
        color = color * brightness * 2.0;
    }

    gl_FragColor = vec4(color, 1.0);
}