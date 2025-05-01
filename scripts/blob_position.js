// scripts/blob_position.js
(() => {
    const wrappers = Array.from(document.querySelectorAll('.blob-wrapper'));
    const positions = [];
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    function randBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
    function isOverlapping(x, y, w, h, self, positions) {
        return positions.some(p => {
            if (p.wrapper === self) return false;
            return x < p.x + p.w && x + w > p.x
                && y < p.y + p.h && y + h > p.y;
        });
    }

    // faz todo o setup inicial
    wrappers.forEach(wrapper => {
        // 1) tamanho e duração
        const size = randBetween(300, 600) | 0;
        wrapper.style.width = wrapper.style.height = `${size}px`;
        const duration = randBetween(8, 14);
        wrapper._duration = duration * 1000; // em ms

        // 2) offset aleatório no SVG (único loop SMIL)
        wrapper.querySelectorAll('animate').forEach(anim => {
            const off = randBetween(0, duration).toFixed(2);
            anim.setAttribute('begin', `-${off}s`);
        });

        // 3) posição inicial sem transição
        wrapper.style.transition = 'none';
        let x, y, tries = 0;
        do {
            x = randBetween(0, vw - size);
            y = randBetween(0, vh - size);
        } while (isOverlapping(x, y, size, size, wrapper, positions) && ++tries < 10);

        wrapper.style.transform = `translate(${x}px,${y}px)`;
        positions.push({ wrapper, x, y, w: size, h: size });

        // 4) agendamos o próximo movimento
        wrapper._nextMove = performance.now() + wrapper._duration + 500;

        // 5) força reflow e ativa transition
        wrapper.getBoundingClientRect();
        wrapper.style.transition = `transform ${duration}s ease-in-out`;
    });

    // função que desloca um blob e atualiza seu nextMove e posição
    function moveBlob(wrapper) {
        const entry = positions.find(p => p.wrapper === wrapper);
        const sizeW = entry.w, sizeH = entry.h;
        let x, y, tries = 0;
        do {
            x = randBetween(0, vw - sizeW);
            y = randBetween(0, vh - sizeH);
        } while (isOverlapping(x, y, sizeW, sizeH, wrapper, positions) && ++tries < 10);

        wrapper.style.transform = `translate(${x}px,${y}px)`;
        entry.x = x; entry.y = y;
        wrapper._nextMove = performance.now() + wrapper._duration + 500;
    }

    // loop único de agendamento
    function tick(now) {
        for (const wrapper of wrappers) {
            if (now >= wrapper._nextMove) moveBlob(wrapper);
        }
        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
})();
