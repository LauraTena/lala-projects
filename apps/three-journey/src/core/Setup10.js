import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";
import gsap from "gsap";

export default function Setup10(canvas) {
  /**
   * Debug
   */
  const gui = new dat.GUI();

  /**
   * Base
   */

  // Scene
  const scene = new THREE.Scene();

  // geometry
  const geometry = new THREE.BufferGeometry();

  const count = 200;
  const positionsArray = new Float32Array(count * 3 * 3);

  for (let i = 0; i < count * 3 * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 5;
  }

  const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);

  geometry.setAttribute("position", positionsAttribute);

  const parameters = {
    color: 0xff0000,
    spin: () => {
      gsap.to(mesh.rotation, {
        duration: 1,
        y: mesh.rotation.y + Math.PI * 2
      });
    }
  };

  const material = new THREE.MeshBasicMaterial({
    color: parameters.color,
    wireframe: true
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Debug

  gui.add(mesh.position, "y").min(-3).max(3).step(0.01).name("elevation");
  gui.addColor(parameters, "color").onChange(() => {
    material.color.set(parameters.color);
  });
  gui.add(parameters, "spin");

  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 3;
  scene.add(camera);

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Animate
  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
}
