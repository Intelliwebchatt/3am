export const initHeroEffects = () => {
    // VHS effect initialization
    const hero = document.querySelector('.hero');
    
    // Add VHS scan lines
    const scanlines = document.createElement('div');
    scanlines.classList.add('vhs-scanlines');
    hero.appendChild(scanlines);
    
    // Add glitch effect
    const glitchEffect = () => {
        hero.classList.add('glitch');
        setTimeout(() => {
            hero.classList.remove('glitch');
        }, 200);
    };
    
    // Random glitch timing
    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchEffect();
        }
    }, 1000);
};
