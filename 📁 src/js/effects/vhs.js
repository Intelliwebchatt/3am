// VHS and Glitch Effects for 3AM Productions

export const initVHSEffects = () => {
    // Elements
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    // Create VHS scan lines
    const createScanlines = () => {
        const scanlines = document.createElement('div');
        scanlines.classList.add('vhs-scanlines');
        hero.appendChild(scanlines);
    };

    // Create tracking noise
    const createTrackingNoise = () => {
        const noise = document.createElement('div');
        noise.classList.add('vhs-tracking');
        hero.appendChild(noise);
    };

    // Glitch effect function
    const glitchEffect = () => {
        const glitch = () => {
            heroContent.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
            heroContent.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
            
            setTimeout(() => {
                heroContent.style.transform = 'translate(0, 0)';
                heroContent.style.filter = 'none';
            }, 50 + Math.random() * 100);
        };

        // Random timing for glitch
        if (Math.random() > 0.95) {
            glitch();
        }
    };

    // Color distortion effect
    const colorDistortion = () => {
        const rgb = () => {
            if (Math.random() > 0.98) {
                hero.style.textShadow = `
                    0.2rem 0 0 rgba(255,0,0,0.75),
                    -0.2rem 0 0 rgba(0,255,0,0.75),
                    0.1rem 0 0 rgba(0,0,255,0.75)
                `;
                
                setTimeout(() => {
                    hero.style.textShadow = 'none';
                }, 50);
            }
        };

        setInterval(rgb, 100);
    };

    // Tracking adjustment effect
    const trackingAdjustment = () => {
        const tracking = () => {
            if (Math.random() > 0.97) {
                hero.style.transform = `translateY(${Math.random() * 3}px)`;
                setTimeout(() => {
                    hero.style.transform = 'translateY(0)';
                }, 50);
            }
        };

        setInterval(tracking, 100);
    };

    // Initialize all effects
    const init = () => {
        createScanlines();
        createTrackingNoise();
        
        // Start periodic effects
        setInterval(glitchEffect, 100);
        colorDistortion();
        trackingAdjustment();
        
        // Add base VHS filter
        hero.classList.add('vhs-filter');
    };

    return {
        init,
        glitchEffect,
        colorDistortion
    };
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const vhsEffects = initVHSEffects();
    vhsEffects.init();
});

// Export for use in other files
export default initVHSEffects;
