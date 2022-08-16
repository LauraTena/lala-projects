import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import fragment from './shaders/fragment.glsl?raw';
import vertex from './shaders/vertex.glsl?raw';
import * as dat from 'dat.gui';
import gsap from 'gsap';
import ASScroll from '@ashthornton/asscroll';
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

    this.asscroll = new ASScroll({
      disableRaf: true,
    });
    this.asscroll.enable({
      horizontalScroll: true,
    });

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
    this.geometry = new THREE.PlaneBufferGeometry(1, 1, 100, 100);

    this.material = new THREE.ShaderMaterial({
      wireframe: true,
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

    this.tl = gsap
      .timeline()
      .to(this.material.uniforms.uCorners.value, {
        x: 1,
        duration: 1,
      })
      .to(
        this.material.uniforms.uCorners.value,
        {
          y: 1,
          duration: 1,
        },
        0.2,
      )
      .to(
        this.material.uniforms.uCorners.value,
        {
          z: 1,
          duration: 1,
        },
        0.4,
      )
      .to(
        this.material.uniforms.uCorners.value,
        {
          w: 1,
          duration: 1,
        },
        0.6,
      );

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.set(300, 300, 1);
    this.mesh.position.x = 300;
    // this.scene.add(this.mesh);

    this.images = [...document.querySelectorAll('.js-image')];
    this.materials = [];
    this.imageStore = this.images.map((img) => {
      let bounds = img.getBoundingClientRect();
      let m = this.material.clone();
      this.materials.push(m);
      let texture = new THREE.TextureLoader().load(img.src);

      m.uniforms.uTexture.value = texture;

      let mesh = new THREE.Mesh(this.geometry, m);
      this.scene.add(mesh);

      mesh.scale.set(bounds.width, bounds.height, 1);

      return {
        img,
        mesh,
        width: bounds.width,
        height: bounds.height,
        top: bounds.top,
        left: bounds.left,
      };
    });
  }

  setPositionsMesh() {
    this.imageStore.forEach((o) => {
      o.mesh.position.x =
        o.left - this.width / 2 + o.width / 2 - this.asscroll.currentPos;
      o.mesh.position.y = -o.top + this.height / 2 - o.height / 2;
    });
  }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.fov =
      (2 * Math.atan(this.height / 2 / 600) * 180) / Math.PI;
    this.camera.updateProjectionMatrix();
    this.camera.updateProjectionMatrix();
    this.materials.forEach((m) => {
      m.uniforms.uResolution.value.x = this.width;
      m.uniforms.uResolution.value.y = this.height;
    });
    this.imageStore.forEach((o) => {
      let bounds = o.img.getBoundingClientRect();
      o.width = bounds.width;
      o.height = bounds.height;
      o.top = bounds.top;
      o.left = bounds.left + this.asscroll.currentPos;
      o.mesh.scale.set(bounds.width, bounds.height, 1);
      o.mesh.material.uniforms.uQuadSize.value.x = bounds.width;
      o.mesh.material.uniforms.uQuadSize.value.y = bounds.height;
    });
  }

  render() {
    this.time += 0.05;
    this.material.uniforms.time.value = this.time;
    this.material.uniforms.uProgress.value = this.settings.progress;
    this.asscroll.update();
    this.setPositionsMesh();
    this.tl.progress(this.settings.progress);
    this.mesh.rotation.x = this.time / 2000;
    this.mesh.rotation.y = this.time / 1000;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.render.bind(this));
  }
}
