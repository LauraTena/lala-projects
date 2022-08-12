import * as THREE from "three";
import { AxesHelper } from "three";

export default function Setup05(canvas) {
  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000
  });
  const mesh = new THREE.Mesh(geometry, material);

  // mesh.position.x = 0.7;
  // mesh.position.y = -0.6;
  // mesh.position.z = 1;
  // scene.add(mesh);

  // set all positions as 1
  // mesh.position.normalize();

  // we can update all positions at once
  mesh.position.set(0.7, -0.6, 1);

  // scale
  mesh.scale.set(2, 0.5, 0.5);

  // rotation
  // mesh.rotation.x = Math.PI / 2;

  // you can change this order by using reorde method (avoid problematical issues)
  mesh.rotation.reorder("YXZ");
  mesh.rotation.y = Math.PI / 4;
  mesh.rotation.x = Math.PI / 4;

  // quaternion

  const sizes = {
    width: 800,
    height: 600
  };

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
  camera.position.z = 3;

  const group = new THREE.Group();

  // group
  scene.add(group);

  const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
  );

  const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  );
  cube2.position.x = -2;

  const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
  );
  cube3.position.x = 2;

  group.add(cube1);
  group.add(cube2);
  group.add(cube3);

  // lookAt
  // camera.lookAt(mesh.position);

  // move the whole group
  group.position.y = 1;
  group.scale.y = 2;
  group.rotation.y = 1;

  // get the distance to the camera
  console.log(mesh.position.distanceTo(camera.position));

  // axes helper
  const axesHelper = new THREE.AxesHelper();
  scene.add(axesHelper);

  const renderer = new THREE.WebGL1Renderer({
    canvas
  });

  renderer.setSize(sizes.width, sizes.height);

  renderer.render(scene, camera);
}
