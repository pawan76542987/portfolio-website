'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import styles from './HeroScene.module.css';

interface HeroSceneProps {
  theme?: 'dark' | 'light';
}

export function HeroScene({ theme = 'dark' }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Detect WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setWebglSupported(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Device performance tier detection
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    const nodeCount = isMobile ? 28 : isTablet ? 45 : 70;
    const maxConnectionDist = isMobile ? 3.5 : 4.2;
    const particleCount = isMobile ? 60 : 140;

    // Scene, Camera, Renderer Setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isMobile,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);
    setIsLoaded(true);

    // Color definitions based on active theme
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const primaryColor = isDark ? 0x38bdf8 : 0x0284c7; // Cyan / Azure
    const secondaryColor = isDark ? 0x818cf8 : 0x6366f1; // Indigo / Violet
    const gridColor = isDark ? 0x1e293b : 0xcbd5e1;

    // 1. Grid Planes (Digital Laboratory Spatial Reference)
    const gridHelper = new THREE.GridHelper(24, 24, gridColor, gridColor);
    gridHelper.position.y = -4;
    gridHelper.material.opacity = isDark ? 0.18 : 0.22;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // 2. Computational Nodes (Geometric Network Matrix)
    const nodePositions: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];
    const nodeMeshes: THREE.Mesh[] = [];

    const nodeGeometry = new THREE.OctahedronGeometry(0.12, 0);
    // Shared single material for optimal memory usage & instant theme synchronization
    const sharedNodeMaterial = new THREE.MeshStandardMaterial({
      color: primaryColor,
      emissive: primaryColor,
      emissiveIntensity: isDark ? 0.6 : 0.3,
      roughness: 0.2,
      metalness: 0.8,
    });

    const group = new THREE.Group();
    scene.add(group);

    const spreadX = isMobile ? 5 : 9;
    const spreadY = isMobile ? 4 : 5.5;
    const spreadZ = 4;

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * spreadX,
        (Math.random() - 0.5) * spreadY,
        (Math.random() - 0.5) * spreadZ
      );
      nodePositions.push(pos);

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 0.006,
        (Math.random() - 0.5) * 0.006,
        (Math.random() - 0.5) * 0.004
      );
      nodeVelocities.push(vel);

      const mesh = new THREE.Mesh(nodeGeometry, sharedNodeMaterial);
      mesh.position.copy(pos);
      const scale = 0.6 + Math.random() * 0.8;
      mesh.scale.set(scale, scale, scale);
      group.add(mesh);
      nodeMeshes.push(mesh);
    }

    // 3. Dynamic Lines Buffer (Connecting Nearby Nodes)
    const maxLineCount = (nodeCount * (nodeCount - 1)) / 2;
    const linePositions = new Float32Array(maxLineCount * 6);
    const lineColors = new Float32Array(maxLineCount * 6);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.35 : 0.25,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(linesMesh);

    // 4. Data Stream Particles (Flowing Pulses)
    const particleGeometry = new THREE.BufferGeometry();
    const particlePosArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePosArray[i * 3] = (Math.random() - 0.5) * spreadX;
      particlePosArray[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      particlePosArray[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePosArray, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: secondaryColor,
      size: isMobile ? 0.08 : 0.12,
      transparent: true,
      opacity: isDark ? 0.75 : 0.6,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.8 : 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(primaryColor, isDark ? 3.5 : 2.0, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(secondaryColor, isDark ? 2.5 : 1.5, 20);
    pointLight2.position.set(-5, -3, 3);
    scene.add(pointLight2);

    // Mouse Tracking & Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / (rect.width || window.innerWidth) - 0.5;
      const y = (e.clientY - rect.top) / (rect.height || window.innerHeight) - 0.5;
      targetMouseX = x * 1.5;
      targetMouseY = y * 1.5;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle Theme Changes dynamically
    const onThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: string }>;
      const newIsDark = customEvent.detail?.theme !== 'light';
      const newPrimary = newIsDark ? 0x38bdf8 : 0x0284c7;
      const newSecondary = newIsDark ? 0x818cf8 : 0x6366f1;
      const newGrid = newIsDark ? 0x1e293b : 0xcbd5e1;

      pointLight1.color.setHex(newPrimary);
      pointLight2.color.setHex(newSecondary);
      sharedNodeMaterial.color.setHex(newPrimary);
      sharedNodeMaterial.emissive.setHex(newPrimary);
      particleMaterial.color.setHex(newSecondary);
      gridHelper.material.opacity = newIsDark ? 0.18 : 0.22;
      (gridHelper.material as THREE.LineBasicMaterial).color.setHex(newGrid);
    };

    window.addEventListener('themechange', onThemeChange);

    // Viewport IntersectionObserver to pause rendering when offscreen
    let isIntersecting = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isIntersecting) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      if (!prefersReducedMotion) {
        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;
        group.rotation.y = mouseX * 0.4 + elapsedTime * 0.02;
        group.rotation.x = -mouseY * 0.3 + Math.sin(elapsedTime * 0.2) * 0.05;
        gridHelper.rotation.y = elapsedTime * 0.005;
      }

      // Update Node positions & bounce inside boundary
      for (let i = 0; i < nodeCount; i++) {
        const pos = nodePositions[i];
        const vel = nodeVelocities[i];

        if (!prefersReducedMotion) {
          pos.add(vel);
          if (Math.abs(pos.x) > spreadX / 2) vel.x *= -1;
          if (Math.abs(pos.y) > spreadY / 2) vel.y *= -1;
          if (Math.abs(pos.z) > spreadZ / 2) vel.z *= -1;
        }

        const mesh = nodeMeshes[i];
        mesh.position.copy(pos);
        if (!prefersReducedMotion) {
          mesh.rotation.x += 0.01;
          mesh.rotation.y += 0.015;
        }
      }

      // Update Lines connecting proximate nodes
      let lineIndex = 0;
      const cPrimary = new THREE.Color(primaryColor);
      const cSecondary = new THREE.Color(secondaryColor);

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dist = nodePositions[i].distanceTo(nodePositions[j]);
          if (dist < maxConnectionDist) {
            const alpha = 1 - dist / maxConnectionDist;

            // Start point
            linePositions[lineIndex * 6] = nodePositions[i].x;
            linePositions[lineIndex * 6 + 1] = nodePositions[i].y;
            linePositions[lineIndex * 6 + 2] = nodePositions[i].z;

            // End point
            linePositions[lineIndex * 6 + 3] = nodePositions[j].x;
            linePositions[lineIndex * 6 + 4] = nodePositions[j].y;
            linePositions[lineIndex * 6 + 5] = nodePositions[j].z;

            // Interpolate colors
            const mixColor = cPrimary.clone().lerp(cSecondary, Math.sin(elapsedTime + i) * 0.5 + 0.5);
            lineColors[lineIndex * 6] = mixColor.r * alpha;
            lineColors[lineIndex * 6 + 1] = mixColor.g * alpha;
            lineColors[lineIndex * 6 + 2] = mixColor.b * alpha;
            lineColors[lineIndex * 6 + 3] = mixColor.r * alpha;
            lineColors[lineIndex * 6 + 4] = mixColor.g * alpha;
            lineColors[lineIndex * 6 + 5] = mixColor.b * alpha;

            lineIndex++;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex * 2);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      // Update Floating Data Particles
      const pPositions = particleGeometry.attributes.position.array as Float32Array;
      if (!prefersReducedMotion) {
        for (let i = 0; i < particleCount; i++) {
          pPositions[i * 3 + 1] += 0.008;
          if (pPositions[i * 3 + 1] > spreadY / 2) {
            pPositions[i * 3 + 1] = -spreadY / 2;
            pPositions[i * 3] = (Math.random() - 0.5) * spreadX;
          }
        }
        particleGeometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup & GPU Memory Management
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('themechange', onThemeChange);
      observer.disconnect();

      nodeGeometry.dispose();
      sharedNodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      gridHelper.geometry.dispose();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className={styles.sceneWrapper} aria-hidden="true">
      <div ref={containerRef} className={styles.canvasContainer} />

      {/* Graceful Fallback if WebGL is unavailable */}
      {!webglSupported && (
        <div className={styles.fallbackVisual}>
          <div className={styles.fallbackGrid} />
          <div className={styles.fallbackOrb} />
        </div>
      )}
    </div>
  );
}
