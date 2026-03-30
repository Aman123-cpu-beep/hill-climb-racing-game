import * as THREE from 'three';

function generateTerrain(width, height, scale) {
    const geometry = new THREE.PlaneGeometry(width, height, width, height);
    const vertices = geometry.attributes.position.array;

    for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const z = vertices[i + 2];
        vertices[i + 1] = perlinNoise(x / scale, z / scale);
    }

    geometry.computeVertexNormals();
    return geometry;
}

function perlinNoise(x, z) {
    // Simplex or Perlin noise would be implemented here;
    // You can use an external library like "simplex-noise" if needed.
    // This is a placeholder for actual noise generation logic.
    return Math.sin(x) * Math.cos(z); // Dummy noise function
}

export { generateTerrain };