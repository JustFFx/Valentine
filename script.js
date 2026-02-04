const heartContainer = document.getElementById('heartContainer');

// Массив твоих фраз. Можешь добавлять любые!
const phrases = [
    "Ты лучшая ✨",
    "Люблю тебя 💖",
    "Ты — мое всё",
    "Просто невероятная! 🥰",
    "С тобой мир ярче 🌈"
];

heartContainer.addEventListener('click', () => {
    // Пульсация сердца
    heartContainer.classList.add('clicked');
    setTimeout(() => heartContainer.classList.remove('clicked'), 300);

    const phrase = document.createElement('div');
    phrase.className = 'compliment';
    phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];

    const isMobile = window.innerWidth <= 480;
    const direction = Math.random() < 0.5 ? -1 : 1;

    // Высота взлета: -250px (ПК), -180px (Телефон)
    const fixedHeight = isMobile ? -80 : -120; 
    
    // Небольшой разлет в стороны от центра
    const horizontalLimit = isMobile ? 50 : 120;

    const arcX = direction * (Math.random() * horizontalLimit) + 'px';
    const arcY = fixedHeight + 'px'; 

    const dx = direction * (Math.random() * (isMobile ? 120 : 350)) + 'px';
    const rot = (Math.random() - 0.5) * 30 + 'deg';

    phrase.style.setProperty('--arc-x', arcX);
    phrase.style.setProperty('--arc-y', arcY);
    phrase.style.setProperty('--dx', dx);
    phrase.style.setProperty('--rot', rot);

    document.body.appendChild(phrase);

    // Удаляем слово через 3.5 секунды (с запасом после анимации)
    setTimeout(() => {
        phrase.remove();
    }, 3500);
});