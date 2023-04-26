import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import "bootstrap";

const StarrySky = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      1,
      1000
    );
    camera.position.set(0, 0, 5);

    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * 600 - 300;
      const y = Math.random() * 600 - 300;
      const z = Math.random() * 600 - 300;
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} style={{ height: "100vh", width: "100%" }} />;
};

export default StarrySky;
