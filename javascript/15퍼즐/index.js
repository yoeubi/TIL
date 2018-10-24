(function () {
    const timerEl = document.querySelector('.timer');
    const timer = () => {
        timerEl.textContent = 0;
        return setInterval(() => {
            timerEl.textContent = +timerEl.textContent + 1;
        }, 1000)
    }
    let timerId = timer();
    const emptyEl = document.querySelector('.empty');
    const moveCntEl = document.querySelector('.moveCnt');
    const cellEl = document.querySelectorAll('.cell');
    let moveCnt = 0;
    const replay = () => {
        clearInterval(timerId);
        timerId = timer();
        moveCntEl.textContent = moveCnt = 0;
        setPuzzle(makePuzzle());
    }
    const init = () => {
        const moveFlag = [1, -1, 4, -4];
        for (let i = 0; i < 15; i++) {
            let cellEl = document.querySelector(`.cell[data-index="${i}"]`);
            cellEl.addEventListener('click', function () {
                moveCntEl.textContent = ++moveCnt;
                let emptyIdx = emptyEl.dataset["index"];
                let cellIdx = cellEl.dataset["index"];
                if (moveFlag.includes(emptyIdx - cellIdx)) {
                    let temp = cellIdx;
                    cellEl.dataset["index"] = emptyIdx;
                    emptyEl.dataset["index"] = temp;
                    if (success(document.querySelectorAll(".cell"))) {
                        setTimeout(() => {
                            alert('퍼즐을 푸셨습니다.')
                            replay();
                        }, 300)
                    }
                }
            })
        }
    }
    const success = arr => {
        let count = 0;
        let flag = arr.forEach((item, index) => {
            if (+item.dataset.index === index) {
                count++;
            }
        })
        return count === arr.length;
    }
    init();
    const isValid = arr => {
        let count = 0;
        for (let i = 0, k = arr.length; i < k; i++) {
            for (let j = 0; j < i; j++) {
                if (arr[i] < arr[j]) {
                    count++;
                }
            }
        }
        return count % 2 === 0;
    }
    const makePuzzle = () => {
        const idxArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        let mixed = idxArr.slice(0).sort(() => Math.round(Math.random()) - 0.5);
        while (!isValid(mixed)) {
            mixed = idxArr.slice().sort(() => Math.round(Math.random()) - 0.5);
        }
        return mixed;
    }
    const setPuzzle = (arr) => {
        cellEl.forEach((item, index) => {
            if (index < 15) {
                item.dataset.index = arr[index];
            } else {
                item.dataset.index = 15;
            }
        })
    }
    setPuzzle(makePuzzle());
    const replayEl = document.querySelector('.btn-replay');

    replayEl.addEventListener('click', () => {
        replay();
    })
})()