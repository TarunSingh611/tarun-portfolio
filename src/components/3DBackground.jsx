'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeDBackground() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const mountElement = mountRef.current;
    if (!mountElement) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    mountElement.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create shader material
    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 2.0;
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        void main() {
          float distance = length(vPosition);
          float alpha = 1.0 - smoothstep(0.0, 10.0, distance);
          gl_FragColor = vec4(0.4, 0.6, 1.0, alpha * 0.5);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create floating spheres
    const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x667eea,
      transparent: true,
      opacity: 0.3,
    });

    const spheres = [];
    for (let i = 0; i < 20; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      sphere.userData = {
        speed: Math.random() * 0.02 + 0.01,
        rotationSpeed: Math.random() * 0.02 + 0.01,
      };
      spheres.push(sphere);
      scene.add(sphere);
    }

    // Create wave effect
    const waveGeometry = new THREE.PlaneGeometry(20, 20, 50, 50);
    const waveMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        uniform float time;
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          vec3 newPosition = position;
          newPosition.z += sin(position.x * 2.0 + time) * 0.5;
          newPosition.z += sin(position.y * 2.0 + time * 0.5) * 0.3;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        void main() {
          float alpha = 1.0 - smoothstep(0.0, 10.0, length(vPosition));
          gl_FragColor = vec4(0.2, 0.4, 0.8, alpha * 0.1);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
      },
    });

    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
    waveMesh.rotation.x = -Math.PI / 2;
    waveMesh.position.z = -5;
    scene.add(waveMesh);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.01;
      
      // Rotate particles
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.002;

      // Animate spheres
      spheres.forEach((sphere, index) => {
        sphere.position.y += Math.sin(time + index) * sphere.userData.speed;
        sphere.rotation.x += sphere.userData.rotationSpeed;
        sphere.rotation.y += sphere.userData.rotationSpeed;
        
        // Reset position if sphere goes too far
        if (sphere.position.y > 10) {
          sphere.position.y = -10;
        }
      });

      // Animate wave
      waveMaterial.uniforms.time.value = time;

      // Rotate camera slightly
      camera.position.x = Math.sin(time * 0.5) * 0.5;
      camera.position.y = Math.cos(time * 0.3) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountElement && renderer.domElement) {
        mountElement.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
    />
  );
} 