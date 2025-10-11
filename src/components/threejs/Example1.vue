<script setup lang="ts">
import { onMounted } from "vue";
import { csvParse } from "d3";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import data from "@/assets/data/homepage_word_color.csv?raw";
import font_url from "@/assets/font/a.typeface.json?url";
const dataset = csvParse(data);

/**
 * 创建圆形点纹理
 */
function createCircleTexture(size: number = 64): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext('2d')!;

    // 绘制圆形
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();

    return new THREE.CanvasTexture(canvas);
}
/**
 * 在球面上生成随机均匀分布的点
 * @param count 点的数量
 * @param radius 球体半径，默认为1
 * @returns 三维坐标数组 [x, y, z][]
 */
function generateRandomSpherePoints(count: number, radius: number = 1): [number, number, number][] {
    const points: [number, number, number][] = [[radius, 0, 0]];

    for (let i = 1; i < count; i++) {
        // 在球面上均匀随机分布
        const theta = 2 * Math.PI * Math.random(); // 方位角 0-2π
        const phi = Math.acos(2 * Math.random() - 1); // 极角 0-π

        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.cos(phi);
        const z = Math.sin(phi) * Math.sin(theta);

        points.push([x * radius, y * radius, z * radius]);
    }
    return points;
}
const positions = generateRandomSpherePoints(dataset.length, 10);
const circleTexture = createCircleTexture();
function init() {
    const scene = new THREE.Scene();

    // 相机
    const camera = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight,
        0.1, 1000
    ) // 透视相机
    camera.position.set(15, 0, 0); // x y z
    camera.lookAt(0, 0, 0);

    const loader = new FontLoader();
    const tArr: Array<THREE.Mesh> = [];
    loader.load(font_url, function (font) {
        dataset.forEach((item, i) => {
            const { word, color } = item;

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions[i], 3));
            const material = new THREE.PointsMaterial({
                color,
                size: 0.5,
                map: circleTexture,
                transparent: true,
                alphaTest: 0.1,
                depthWrite: false
            });
            const pointer = new THREE.Points(geometry, material);
            scene.add(pointer);

            const textGeo = new TextGeometry(word, {
                font,
                size: 0.2,
                depth: 0.1,
                curveSegments: 5,

                bevelThickness: 0.02,
                bevelSize: 0.02,
                bevelEnabled: false
            });
            textGeo.center();

            const textMaterial = [
                new THREE.MeshPhongMaterial({ color, flatShading: true }), // front
                new THREE.MeshPhongMaterial({ color }) // side
            ];
            const textMesh = new THREE.Mesh(textGeo, textMaterial);
            textMesh.position.set(...positions[i]);
            const direction = new THREE.Vector3(...positions[i]).normalize();
            textMesh.position.add(direction.multiplyScalar(0.2));

            tArr.push(textMesh);
            scene.add(textMesh);
        });
    });

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // 渲染器
    const render = new THREE.WebGLRenderer();
    render.setSize(window.innerWidth, window.innerHeight);
    document.querySelector(".loader")?.appendChild(render.domElement);

    // 控制器
    const controls = new OrbitControls(camera, render.domElement);
    controls.enableDamping = true;
    controls.update();

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        tArr.forEach(item => {
            item.lookAt(camera.position);
        })
        render.render(scene, camera);
    }
    animate();
}
onMounted(() => { init(); });
</script>

<template>
    <div class="loader">

    </div>
</template>

<style scoped>
.loader {
    width: 100%;
    height: 80vh;
}
</style>
