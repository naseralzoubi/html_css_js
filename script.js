document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('animated-element');
    let glowIntensity = 0;
    let increasing = true;

    function animate() {
        if (increasing) {
            glowIntensity += 2;
            if (glowIntensity >= 20) increasing = false;
        } else {
            glowIntensity -= 2;
            if (glowIntensity <= 0) increasing = true;
        }

        element.style.boxShadow = `0 0 ${glowIntensity}px #4caf50`;
        element.style.transform = `scale(${1 + glowIntensity/100})`;
        
        requestAnimationFrame(animate);
    }

    animate();
});