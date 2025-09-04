import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { baseVert, outputFrag } from './dropletsShaders';

// React wrapper around the hero-new Three.js demo
export default function DropletsBG() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setClearColor(new THREE.Color(0x000000), 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 50);
    camera.position.set(0, 0, 10);

    // Uniforms
    const trailLength = 15;
    const pointerTrail = Array.from({ length: trailLength }, () => new THREE.Vector2(0, 0));
    const uniforms: THREE.ShaderMaterialParameters['uniforms'] = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uPointerTrail: { value: pointerTrail },
    };

    // Mesh
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.RawShaderMaterial({
      vertexShader: baseVert,
      fragmentShader: outputFrag,
      uniforms,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      uniforms.uResolution.value.set(w, h);
    };

    const onPointer = (x: number, y: number) => {
      // Normalize to clip space like in hero-new
      const nx = (x / window.innerWidth) * 2 - 1;
      const ny = -(y / window.innerHeight) * 2 + 1;
      // shift trail
      for (let i = trailLength - 1; i > 0; i--) pointerTrail[i].copy(pointerTrail[i - 1]);
      pointerTrail[0].set(nx, ny);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch' && e.isPrimary) onPointer(e.pageX, e.pageY);
      else onPointer(e.clientX, e.clientY);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== 'touch' || !e.isPrimary) return;
      onPointer(e.pageX, e.pageY);
    };

    window.addEventListener('resize', onResize);
    document.body.addEventListener('pointermove', onPointerMove);
    document.body.addEventListener('pointerdown', onPointerDown);

    const render = () => {
      uniforms.uTime.value = clock.getElapsedTime() * 2.0;
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      document.body.removeEventListener('pointermove', onPointerMove);
      document.body.removeEventListener('pointerdown', onPointerDown);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement) renderer.domElement.parentElement.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden />
  );
}

