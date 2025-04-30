<template>
    <div class="loader">

    </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
    name: "LoadingAni999",
    mounted() {
        const scene = new THREE.Scene();

        // 相机
        const camera = new THREE.PerspectiveCamera(
            75, window.innerWidth / window.innerHeight,
            0.1, 1000
        ) // 透视相机
        camera.position.set(5, 5, 10); // x y z
        camera.lookAt(0, 0, 0);

        // 添加物体
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const cube = new THREE.Mesh(geometry, cubeMaterial);
        scene.add(cube);

        const lineMaterial = new THREE.LineBasicMaterial({color: 0x0000ff});
        const points = [];
        points.push(new THREE.Vector3(-5, 0, 0));
        points.push(new THREE.Vector3(0, 5, 0));
        points.push(new THREE.Vector3(5, 0, 0));

        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);

        // 坐标系
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);
        
        // 渲染器
        const render = new THREE.WebGLRenderer();
        render.setSize(window.innerWidth, window.innerHeight);

        document.querySelector(".loader").appendChild(render.domElement);
        
        // 控制器
        const controls = new OrbitControls(camera, render.domElement);
        controls.enableDamping = true;
        controls.update();


        // 设置时钟
        // eslint-disable-next-line
        const clock = new THREE.Clock();
        let speed = 0.05;
        // eslint-disable-next-line
        function animate(time) {
            // console.log(time);
            requestAnimationFrame(animate);
            cube.position.x += speed;
            cube.position.y += speed;
            cube.position.z += speed;
            cube.scale.set(2, 1, 1);
            cube.rotation.set(Math.PI / 4, 0, 0, "XYZ");
            if (cube.position.x >= 5 || cube.position.x <= -5) speed = -speed;
            controls.update();
            render.render(scene, camera);
        }
        animate(performance.now());
        window.addEventListener("resize", () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            render.setSize(window.innerWidth, window.innerHeight);
            render.setPixelRatio(window.devicePixelRatio);
        });
    },
}
</script>

<style scoped>
.loader {
    width: 100%;
    height: 100vh;
}
</style>