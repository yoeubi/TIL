window.onload = function () {
    const colors = () => {
        const random = () => parseInt(Math.random() * 256);
        const result = [];
        for (let i = 0; i < 3; i++) {
            result[i] = `rgb(${random()},${random()},${random()})`
        }
        return result;
    }
    const colorItems = document.querySelectorAll('.color-item');
    const rgb = document.querySelector('.rgb');
    const score = document.querySelectorAll('.score > span');
    const overlay = document.querySelector('.overlay');
    const replay = document.querySelectorAll('.btn-replay');
    let point = 0;
    const play = () => {
        const randomColor = colors();
        rgb.textContent = randomColor[parseInt(Math.random() * randomColor.length)];
        colorItems.forEach((item, index) => {
            item.style.backgroundColor = item.textContent = randomColor[index];
        })
    }
    play();
    colorItems.forEach(item => {
        item.addEventListener('click', function () {
            if (this.textContent === rgb.textContent) {
                score[0].textContent = ++point;
                overlay.classList.add('good')
            } else {
                score[1].textContent = point;
                overlay.classList.add('bad')
            }
            this.classList.add('show');
        })
    });
    replay.forEach(item => item.addEventListener('click', function () {
        colorItems.forEach(item => item.classList.remove('show'));
        if (overlay.classList.contains('bad')) {
            score.forEach(item => item.textContent = 0);
            point = 0;
        }
        overlay.classList.remove("good", 'bad');
        play();
    }))
}