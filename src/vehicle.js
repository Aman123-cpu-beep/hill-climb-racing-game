class Vehicle {
  constructor(x, y, z, scene, world) {
    this.scene = scene;
    this.world = world;
    this.position = { x, y, z };
    
    // Create vehicle mesh (simple box)
    const geometry = new THREE.BoxGeometry(1, 0.5, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(x, y, z);
    this.scene.add(this.mesh);
    
    // Vehicle properties
    this.speed = 0;
    this.maxSpeed = 100;
    this.acceleration = 2;
    this.friction = 0.95;
    this.rotation = 0;
    this.health = 100;
    this.fuel = 100;
    this.boost = 0;
    this.maxBoost = 100;
    
    this.createWheels();
  }
  
  createWheels() {
    const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16);
    const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    
    const wheelPositions = [
      { x: -0.5, y: -0.3, z: 0.5 },
      { x: 0.5, y: -0.3, z: 0.5 },
      { x: -0.5, y: -0.3, z: -0.5 },
      { x: 0.5, y: -0.3, z: -0.5 }
    ];
    
    this.wheels = wheelPositions.map(pos => {
      const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
      wheel.position.copy(pos);
      wheel.rotation.z = Math.PI / 2;
      this.mesh.add(wheel);
      return wheel;
    });
  }
  
  accelerate() {
    if (this.fuel > 0) {
      this.speed = Math.min(this.speed + this.acceleration, this.maxSpeed);
      this.fuel -= 0.5;
    }
  }
  
  decelerate() {
    this.speed = Math.max(this.speed - this.acceleration * 0.5, 0);
  }
  
  turnLeft() {
    this.rotation += 0.05;
  }
  
  turnRight() {
    this.rotation -= 0.05;
  }
  
  applyBoost() {
    if (this.boost > 0) {
      this.speed = Math.min(this.speed + 3, this.maxSpeed * 1.5);
      this.boost -= 2;
    }
  }
  
  update() {
    this.speed *= 0.95;
    
    this.position.x += Math.sin(this.rotation) * this.speed * 0.016;
    this.position.z += Math.cos(this.rotation) * this.speed * 0.016;
    
    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.rotation;
    
    this.wheels.forEach(wheel => {
      wheel.rotation.x += this.speed * 0.05;
    });
    
    if (this.fuel < 100) {
      this.fuel += 0.1;
    }
    
    if (this.boost < this.maxBoost) {
      this.boost += 0.05;
    }
  }
  
  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
  }
  
  repair(amount) {
    this.health = Math.min(this.health + amount, 100);
  }
}

export { Vehicle };