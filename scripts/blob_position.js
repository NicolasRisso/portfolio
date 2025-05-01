// scripts/blob_position.js

// retorna um número aleatório entre min (inclusive) e max (exclusive)
function randBetween(min, max) {
    return Math.random() * (max - min) + min;
}

// checa colisão entre a caixa [x,y,w,h] e quaisquer outras do array positions
function isOverlapping(x, y, w, h, selfWrapper, positions) {
    return positions.some(pos => {
        if (pos.wrapper === selfWrapper) return false;
        const overlapX = x < pos.x + pos.width && x + w > pos.x;
        const overlapY = y < pos.y + pos.height && y + h > pos.y;
        return overlapX && overlapY;
    });
}

function moveBlob(wrapper, positions) {
    const entry = positions.find(e => e.wrapper === wrapper);
    const maxX = window.innerWidth  - entry.width;
    const maxY = window.innerHeight - entry.height;

    let x, y, tries = 0;
    do {
        x = randBetween(0, maxX);
        y = randBetween(0, maxY);
        tries++;
    } while (isOverlapping(x, y, entry.width, entry.height, wrapper, positions) && tries < 20);

    wrapper.style.transform = `translate(${x}px, ${y}px)`;
    entry.x = x;
    entry.y = y;

    const durMs = parseFloat(wrapper.dataset.duration) * 1000;
    setTimeout(() => moveBlob(wrapper, positions), durMs + 500);
}

window.addEventListener('DOMContentLoaded', () => {
    const wrappers = Array.from(document.querySelectorAll('.blob-wrapper'));
    const positions = [];

    wrappers.forEach(wrapper => {
        // 1) define tamanho aleatório
        const size = Math.floor(randBetween(300, 600));
        wrapper.style.width  = `${size}px`;
        wrapper.style.height = `${size}px`;

        // 2) define duração de movimento aleatória
        const duration = randBetween(8, 14).toFixed(2);
        wrapper.dataset.duration = duration;

        // 3) aplica delay negativo no SVG para offset de forma
        wrapper.querySelectorAll('animate').forEach(anim => {
            const offset = randBetween(0, duration).toFixed(2);
            anim.setAttribute('begin', `-${offset}s`);
        });

        // 4) desliga a transição para posicionar instantaneamente
        wrapper.style.transition = 'none';

        // 5) encontra posição inicial sem sobrepor ninguém
        let initX, initY, tries = 0;
        const maxX = window.innerWidth  - size;
        const maxY = window.innerHeight - size;
        do {
            initX = randBetween(0, maxX);
            initY = randBetween(0, maxY);
            tries++;
        } while (isOverlapping(initX, initY, size, size, wrapper, positions) && tries < 20);

        wrapper.style.transform = `translate(${initX}px, ${initY}px)`;

        // registra essa posição
        positions.push({
            wrapper,
            x: initX,
            y: initY,
            width: size,
            height: size
        });

        // força reflow
        wrapper.getBoundingClientRect();

        // 6) habilita a transição suave para futuros movimentos
        wrapper.style.transition = `transform ${duration}s ease-in-out`;
    });

    // 7) dispara o loop de movimento para cada blob
    wrappers.forEach(wrapper => moveBlob(wrapper, positions));
});
