const shaderBase = `attribute vec3 aPosition;
attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
vTexCoord = aTexCoord;

vec4 positionVec4 = vec4(aPosition, 1.0);
positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

gl_Position = positionVec4;
}`;

const shaderFrag1 = `#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;
uniform sampler2D dMap;
uniform sampler2D img;
uniform float u_bass;
uniform float u_mid;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 texRes;
uniform float u_lowmid;

mat2 scale(vec2 _scale){
  return mat2(_scale.x,0.0,
              0.0,_scale.y);
}

void main() {

vec2 ratio = vec2(
  min((u_resolution.x / u_resolution.y) / (texRes.x / texRes.y), 1.0),
  min((u_resolution.y / u_resolution.x) / (texRes.y / texRes.x), 1.0)
);

vec2 uv = vec2(
  vTexCoord.x * ratio.x + (1.0 - ratio.x) * 0.5,
  vTexCoord.y * ratio.y + (1.0 - ratio.y) * 0.5
);

uv.y = 1.0 - uv.y;

vec2 uvt = uv;

vec2 translate = vec2(cos(u_mid),sin(u_mid));
uvt += translate * 0.5;

vec4 t = texture2D(dMap, uvt);

float d = dot(t.rgb, vec3(u_time));
float disp = d * u_bass;
float disp_2 = d * u_mid;

uv -= vec2(0.5);
uv = scale(2.0 - vec2(sin(disp)+1.0)) * uv;
uv += vec2(0.5);

vec2 mir = uv;
vec4 f = texture2D(img, mir);

// output the image
gl_FragColor = f;
}`;

const shaderFrag2 = `
#ifdef GL_ES
  precision mediump float;
#endif

varying vec2 vTexCoord;
uniform sampler2D u_texture;
uniform vec2 u_resolution;
uniform float u_bass;
uniform float u_time;
uniform float u_mid;
uniform vec2 u_tResolution;

mat2 scale(vec2 _scale){
    return mat2(_scale.x,0.0,
                0.0,_scale.y);
}

void main() {

  vec2 ratio = vec2(
    min((u_resolution.x / u_resolution.y) / (u_tResolution.x / u_tResolution.y), 1.0),
    min((u_resolution.y / u_resolution.x) / (u_tResolution.y / u_tResolution.x), 1.0)
  );

  vec2 uv = vec2(
    vTexCoord.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vTexCoord.y * ratio.y + (1.0 - ratio.y) * 0.5
  );

  uv.y = 1.0 - uv.y;

  uv -= vec2(0.5);
  uv = scale(vec2(0.91)) * uv;
  uv += vec2(0.5);

  float wave = sin(((uv.x * 0.8) - 1.0) * u_bass) * u_mid * 0.8;
  vec2 d = vec2(wave, 0.0001);


  vec4 red = texture2D(u_texture, uv - d);
  vec4 green = texture2D(u_texture, uv + d);
  vec4 blue = texture2D(u_texture, uv - d);

  vec4 color = vec4(red.r, green.g, blue.b, 2.0);

  gl_FragColor = color;
}
`;

const shaderFrag3 = `#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;
uniform sampler2D dMap;
uniform sampler2D img;
uniform float u_bass;
uniform float u_mid;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_tResolution;

void main() {

vec2 ratio = vec2(
  min((u_resolution.x / u_resolution.y) / (u_tResolution.x / u_tResolution.y), 1.0),
  min((u_resolution.y / u_resolution.x) / (u_tResolution.y / u_tResolution.x), 1.0)
);

vec2 uv = vec2(
  vTexCoord.x * ratio.x + (1.0 - ratio.x) * 0.5,
  vTexCoord.y * ratio.y + (1.0 - ratio.y) * 0.5
);

uv.y = 1.0 - uv.y;

vec4 texture = texture2D(dMap, uv);

float d = dot(texture.rgb, vec3(u_time));
float disp = d * u_bass;
float disp_2 = d * u_mid;

uv.y += disp;

vec4 image = texture2D(img, uv);

gl_FragColor = image;
}
`;

const shaderFrag4 = `#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;
uniform vec2 u_resolution;
uniform sampler2D u_texture;
uniform float u_time;
uniform vec2 u_tResolution;
uniform float u_bass;
uniform float u_tremble;
uniform float u_mid;

mat2 scale(vec2 _scale){
return mat2(_scale.x,0.0,
          0.0,_scale.y);
}

void main() {
vec2 ratio = vec2(
min((u_resolution.x / u_resolution.y) / (u_tResolution.x / u_tResolution.y), 1.0),
min((u_resolution.y / u_resolution.x) / (u_tResolution.y / u_tResolution.x), 1.0)
);

vec2 uv = vec2(
vTexCoord.x * ratio.x + (1.0 - ratio.x) * 0.5,
vTexCoord.y * ratio.y + (1.0 - ratio.y) * 0.5
);

uv.y = 1.0 - uv.y;

uv -= vec2(0.5);
uv = scale(vec2(0.91)) * uv;
uv += vec2(0.5);

float wave   = sin(uv.y * u_bass + u_time) * u_mid;
vec2 d = vec2(wave);
vec4 image   = texture2D(u_texture, uv + d);

gl_FragColor = image;
}`;

export {
  shaderBase, shaderFrag1, shaderFrag2, shaderFrag3, shaderFrag4,
};
