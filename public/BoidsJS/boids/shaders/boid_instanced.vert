#version 300 es

layout (location=0) in vec4 vertex;
layout (location=1) in mat4 transform;
layout (location=5) in vec2 position;

out vec3 vexcol;

layout(std140) uniform GlobalShared{
    mat4 projection;
};

void main(){

    vexcol = vec3(0.5);
    // if(gl_VertexID == 0){
    //     vexcol = vec3(0.12, 0.3, 0.9);
    // }else if(gl_VertexID == 1){
    //     vexcol = vec3(0.12, 0.4, 0.4);
    // }else if(gl_VertexID == 2){
    //     vexcol = vec3(0.23, 0.8, 0.7);
    // }

    vec4 translate = vec4(position, 0.0, 0.0);

    gl_Position = projection * (translate + (transform * vec4(vertex.xy, 0.0, 1.0)));
    // gl_Position = projection * (translate + vertex);
}