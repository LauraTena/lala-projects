import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import fragment from './shaders/fragment.glsl?raw';
import vertex from './shaders/vertex.glsl?raw';
import * as dat from 'dat.gui';

export default class Sketch {
  constructor(options) {
    this.container = options.domElement;
    this.urlTexture = options.urlTexture;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.camera = new THREE.PerspectiveCamera(
      30,
      this.width / this.height,
      10, //near plane
      1000, // far plane
    );
    this.camera.position.z = 600;
    this.camera.fov =
      (2 * Math.atan(this.height / 2 / 600) * 180) / Math.PI;
    this.camera.updateProjectionMatrix();

    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    // for performance
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);

    this.container.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(
      this.camera,
      this.renderer.domElement,
    );

    this.time = 0;
    this.setupSettings();
    this.addObjects();
    this.render();
    this.setupResize();
  }

  setupSettings() {
    this.settings = {
      progress: 0,
    };
    this.gui = new dat.GUI();
    this.gui.add(this.settings, 'progress', 0, 1, 0.001);
  }

  addObjects() {
    this.geometry = new THREE.PlaneBufferGeometry(300, 300, 100, 100);

    this.material = new THREE.ShaderMaterial({
      wireframe: false,
      uniforms: {
        time: { value: 1.0 },
        uProgress: { value: 0 },
        uTexture: {
          value: new THREE.TextureLoader().load(this.urlTexture),
        },
        uTextureSize: { value: new THREE.Vector2(100, 100) },
        uCorners: { value: new THREE.Vector4(0, 0, 0, 0) },
        uResolution: { value: new THREE.Vector2(this.width, this.height) },
        uQuadSize: { value: new THREE.Vector2(300, 300) },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.x = 300;
    this.mesh.rotation.z = 0.5;
    // this.mesh.scale.set(2, 1, 1);
    this.scene.add(this.mesh);
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  render() {
    this.time += 0.05;
    this.material.uniforms.time.value = this.time;
    this.material.uniforms.uProgress.value = this.settings.progress;
    this.mesh.rotation.x = this.time / 2000;
    this.mesh.rotation.y = this.time / 1000;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this));
  }
}
