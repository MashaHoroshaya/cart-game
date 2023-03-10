const app = document.querySelector('.app');
window.level = '';

const renderLevel = () => {
    app.innerHTML = '';

    const div = document.createElement('div');
    div.classList.add('div_block');
    div.innerHTML = `
        <h1 class="h1_title">Выбери сложность</h1>
        <div class="level">
            <div class="level_item" data-level="1">1</div>
            <div class="level_item" data-level="2">2</div>
            <div class="level_item" data-level="3">3</div>
        </div>
        <button class="btn btn_start">Старт</button>
    `;

    app.append(div);
}
renderLevel();

const renderGame = (level) => {
    app.innerHTML = '';

    const div = document.createElement('div');
    div.classList.add('game');
    div.innerHTML = `Игровое поле уровня ${level}`;
    app.append(div);
}


app.addEventListener('click', (e) => {
    if (e.target.classList.contains('level_item')) {
        window.level = e.target.dataset.level;
        console.log(window.level);
    }

    if (e.target.classList.contains('btn_start')) {
        if (window.level) {
            renderGame(window.level);
        } else {
            console.log('Сложность не выбрана');
        }
    }
})

