import React from 'react';
import Sketch from 'react-p5';

export function InitField(P5, particles, count) {
    for (let i = 0; i < count; i++) {
        let pos = P5.createVector(P5.random(0, P5.width), P5.random(0, P5.height));
        particles[i] = pos;
    }
}

export function DrawField(P5, particles, noiseScale) {
    for (let i = 0; i < particles.length; i++) {
        let particle = particles[i];
        P5.point(particle.x, particle.y);

        UpdateParticle(P5, particle, noiseScale);
    }
}

export function ChangeFieldSeed(P5, timer) {
    P5.noiseSeed(P5.millis());
    let waitTime = ((Math.random() * 6) + 2) * 1000;

    if (timer == null) {
        timer = setTimeout(ChangeFieldSeed, waitTime, P5, timer);
    }
}

function IsValid(P5, particle) {
    return (particle.x > 0 && particle.x < P5.width) && (particle.y > 0 && particle.y < P5.height);
}

function UpdateParticle(P5, particle, noiseScale) {
    let normal = 0.5 * P5.noise(particle.x * noiseScale, particle.y * noiseScale);
    let angle = P5.TAU * normal;

    particle.x += P5.cos(2 * angle);
    particle.y += P5.sin(2 * angle);

    if (!IsValid(P5, particle)) {
        particle.x = P5.random(0, P5.width);
        particle.y = P5.random(0, P5.height);
    }
}