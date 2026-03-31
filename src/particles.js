// particles.js - A simple particle effects system for visual feedback

class Particle {
    constructor(x, y, size, color, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speed = speed;
        this.lifetime = 100; // in frames
    }

    update() {
        this.y -= this.speed; // moves the particle upwards
        this.lifetime--;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    isAlive() {
        return this.lifetime > 0;
    }
}

class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    addParticle(x, y, size, color, speed) {
        const particle = new Particle(x, y, size, color, speed);
        this.particles.push(particle);
    }

    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            particle.update();
            if (!particle.isAlive()) {
                this.particles.splice(i, 1);
            }
        }
    }

    draw(ctx) {
        for (const particle of this.particles) {
            particle.draw(ctx);
        }
    }
}

// Usage Example: 
// const particleSystem = new ParticleSystem();
// particleSystem.addParticle(100, 100, 5, 'red', 2);
// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     particleSystem.update();
//     particleSystem.draw(ctx);
//     requestAnimationFrame(animate);
// }
// animate();
