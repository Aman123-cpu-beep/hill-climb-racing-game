// HUD System for Hill Climb Racing Game

class HUD {
    constructor() {
        this.speed = 0;
        this.fuel = 100;
        this.health = 100;
        this.boost = false;
        this.distance = 0;
        this.score = 0;
    }

    updateHUD() {
        console.log(`Speed: ${this.speed} km/h`);
        console.log(`Fuel: ${this.fuel}%`);
        console.log(`Health: ${this.health}%`);
        console.log(`Boost: ${this.boost ? 'Active' : 'Inactive'}`);
        console.log(`Distance: ${this.distance} m`);
        console.log(`Score: ${this.score}`);
    }

    setSpeed(speed) {
        this.speed = speed;
        this.updateHUD();
    }

    setFuel(fuel) {
        this.fuel = fuel;
        this.updateHUD();
    }

    setHealth(health) {
        this.health = health;
        this.updateHUD();
    }

    activateBoost() {
        this.boost = true;
        this.updateHUD();
    }

    deactivateBoost() {
        this.boost = false;
        this.updateHUD();
    }

    setDistance(distance) {
        this.distance = distance;
        this.updateHUD();
    }

    setScore(score) {
        this.score = score;
        this.updateHUD();
    }
}

// Example usage:
const hud = new HUD();
hud.setSpeed(60);
hud.setFuel(85);
hud.setHealth(90);
hud.activateBoost();
hud.setDistance(1500);
hud.setScore(200);