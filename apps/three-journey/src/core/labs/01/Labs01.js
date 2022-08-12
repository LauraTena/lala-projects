// Scene
import Scene from "./components/scene.js";

export default function Labs01() {
  // scene
  const sceneEl = document.querySelector("[data-scene]");
  new Scene(sceneEl);
}
