import { initNavigation } from './components/navigation';
import { initHeroEffects } from './effects/vhs';
import { initForms } from './components/forms';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initNavigation();
    initHeroEffects();
    initForms();
});
