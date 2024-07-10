var speed = 0.01;
        // Create scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 8;

        // Create renderer
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Create particles
        const particles = new THREE.Group();
        for (let i = 0; i < 1500; i++) {
            const particle = new THREE.Mesh(
                new THREE.SphereGeometry(0.01, 32, 32),
                new THREE.MeshBasicMaterial({ color: 0xffffff })
            );
            particle.position.set(
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
                Math.random() * 10 - 5
            );
            particles.add(particle);
        }
        scene.add(particles);

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            particles.rotation.x += speed;
            particles.rotation.z += speed;
            renderer.render(scene, camera);
        }

        animate();
  