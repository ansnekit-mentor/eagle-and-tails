const init = () => {
    const $app = document.querySelector('#app');
    const $startBtn = document.querySelector('.start-button');
    const $repeatBtn = document.querySelector('.header__repeat-button');
    const $toggleThemeBtn = document.querySelector('.header__toggle-theme-button');

    const startGame = () => {
        const randomNumber = getRandom();
        let text = randomNumber > 50 ? 'Орел' : 'Решка';
        $app.innerHTML = `<h1>${text}</h1>`;
        $repeatBtn.classList.remove('hidden');
    }

    const clearState = () => {
        $app.innerHTML = `
        <button class="start-button animated-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Начать
        </button>`;
    
        const $startBtn = document.querySelector('.start-button');
        $startBtn.addEventListener('click', startGame);
        $repeatBtn.classList.add('hidden');
    }

    $startBtn.addEventListener('click', startGame);
    $repeatBtn.addEventListener('click', clearState);
    $toggleThemeBtn.addEventListener('click', toggleTheme);
};

const toggleTheme = () => {
    const $body = document.querySelector('body');
    $body.classList.toggle('dark');
}

const getRandom = () => {
    return Math.floor(Math.random() * 100);
}

document.addEventListener('DOMContentLoaded', init);