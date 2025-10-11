<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { onMounted, onUnmounted, ref } from "vue";

import fshader from "./shader/fshader.glsl?raw";
import vshader from "./shader/vshader.glsl?raw";

const dom = ref<HTMLDivElement>();

function init() {
    const scene = new THREE.Scene();

    // 相机
    const camera = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight,
        1, 10000
    ) // 透视相机
    camera.position.set(0, 0, 5); // x y z

    // 渲染器
    const render = new THREE.WebGLRenderer({
        alpha: true
    });
    render.setSize(window.innerWidth, window.innerHeight);
    dom.value?.appendChild(render.domElement);

    // 添加点
    const l = 1000000;
    const position = new Float32Array(l * 3);

    // 变成圆盘
    const spherical = new THREE.Spherical();
    const vec3 = new THREE.Vector3();
    const r = 3;
    for (let i = 0; i < l; i++) {
        spherical.set(
            r * Math.random(),
            Math.PI * 2 * (Math.random() - 0.5),
            Math.PI * 2 * Math.random()
        );
        vec3.setFromSpherical(spherical);
        position[i * 3 + 0] = vec3.x;
        position[i * 3 + 1] = vec3.y * 0.1;
        position[i * 3 + 2] = vec3.z;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(position, 3));

    const uniforms = {
        u_tex: { value: new THREE.TextureLoader().load("./assets/img/星系.png") },
        u_r: { value: r * 2 },
        u_time: { value: 0.0 }
    };
    const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vshader,
        fragmentShader: fshader,
        side: THREE.DoubleSide
    });
    const ball = new THREE.Points(geometry, material);
    scene.add(ball);

    // 全局环境灯
    const light = new THREE.AmbientLight(0xffffff, 50);
    scene.add(light);

    // 坐标系
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // 控制器
    const controls = new OrbitControls(camera, render.domElement);
    controls.enableDamping = true;
    controls.update();

    let a_id: number;
    const clock = new THREE.Clock();
    function animate() {
        a_id = requestAnimationFrame(animate);
        material.uniforms.u_time.value = -clock.getElapsedTime();
        controls.update();
        render.render(scene, camera);
    }
    animate();
    return function () {
        cancelAnimationFrame(a_id);
        if (controls) controls.dispose();
        if (render) render.dispose();
    }
}

let end_func = () => { };
onMounted(() => {
    end_func = init();
});
onUnmounted(() => {
    end_func();
});
</script>

<template>
    <div class=".loader" ref="dom">

    </div>
</template>

<style lang="css" scoped>
.loader {
    width: 100%;
    height: 100vh;
}
</style>
