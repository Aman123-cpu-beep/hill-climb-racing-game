class InputManager {
    constructor() {
        this.keys = {};
        this.setupKeyListeners();
    }

    setupKeyListeners() {
        document.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
        });
        document.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
    }

    isKeyPressed(key) {
        return this.keys[key.toLowerCase()] || false;
    }

    getMovementInput() {
        return {
            up: this.isKeyPressed('w') || this.isKeyPressed('arrowup'),
            down: this.isKeyPressed('s') || this.isKeyPressed('arrowdown'),
            left: this.isKeyPressed('a') || this.isKeyPressed('arrowleft'),
            right: this.isKeyPressed('d') || this.isKeyPressed('arrowright'),
            boost: this.isKeyPressed(' ')
        };
    }
}

export { InputManager };