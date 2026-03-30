// src/physics.js

import { World, Engine, Bodies, Body, Composite, Composites, Mouse, MouseConstraint } from 'matter-js';

// Create an engine
const engine = Engine.create();

// Create a world with gravity
const world = engine.world;
world.gravity.y = 1; // Set gravity for the world (1 is a common value)

// Define contact material properties
const defaultMaterial = Bodies.rectangle(0, 0, 10, 10, { isStatic: true });  // Placeholder for contact material
const contactMaterial = { friction: 0.1, restitution: 0.8 }; // Properties: low friction, high restitution

// Example of creating bodies and adding them to the world
const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true, ...contactMaterial });
const ball = Bodies.circle(200, 100, 30, { ...contactMaterial });
Composite.add(world, [ground, ball]);

// Run the engine
Engine.run(engine);

export { world, engine };