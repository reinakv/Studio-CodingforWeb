const container = document.querySelector('.container');

for (var i = 1; i <= 100; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks);
}

function generate() {
    anime({
        targets: '.block',
        translateX: function () {
            return anime.random(-700, 700);
        },
        translateY: function () {
            return anime.random(-700, 700);
        },
        scale: function () {
            return anime.random(1, 5);
        }
    });

    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        block.addEventListener('click', function () {
            shatterBlock(this);
        });
    });
}

function shatterBlock(block) {
    const rectCount = 20;
    const rectSize = 10;

    // Remove the original block after a delay
    setTimeout(() => {
        block.remove();
    }, rectCount * 20);

    // Apply shattering animation to the block
    block.style.animation = 'shatter 0.5s ease-out forwards';

    // Create and add shattered rectangles
    for (let i = 0; i < rectCount; i++) {
        const rect = document.createElement('div');
        rect.classList.add('shattered-rect');
        rect.style.width = `${rectSize}px`;
        rect.style.height = `${rectSize}px`;

        const angle = (360 / rectCount) * i;
        const radians = (angle * Math.PI) / 180;

        const translateX = Math.cos(radians) * 100;
        const translateY = Math.sin(radians) * 100;

        rect.style.transform = `translate(${translateX}px, ${translateY}px)`;

        document.body.appendChild(rect);

        setTimeout(() => {
            rect.style.opacity = 0;
            setTimeout(() => {
                rect.remove();
            }, 1000);
        }, i * 20);
    }
}

