class MineSweeper {
    constructor({ row, column, mineCount }) {
        this.ROW = row;
        this.COL = column;
        this.MINECNT = mineCount;
        this.SQUARE = [];
        this.PICK = [];
    }
    init() {
        console.time('init');
        const square = this.SQUARE;
        const pick = this.PICK;
        for (let i = 0, k = this.ROW; i < k; i++) {
            for (let j = 0, g = this.COL; j < g; j++) {
                const index = (i * k) + (j % g);
                square[index] = { row: i, col: j, mine: false, count: 0 };
                pick[index] = { row: i, col: j };
            }
        }
        console.timeEnd('init');
    }
    getMineIdx() {
        console.time('getMineIdx');
        const mineArray = [];
        const pick = this.PICK;
        for (let i = 0, k = this.MINECNT; i < k; i++) {
            const pickIndex = parseInt(Math.random() * pick.length);
            const mineIndex = pick.splice(pickIndex, 1);
            mineArray[i] = mineIndex[0];
        }
        console.timeEnd('getMineIdx');
        return mineArray;
    }
    setMine() {
        const mineArray = this.getMineIdx();
        console.time('setMine');
        const numOfRow = this.ROW;
        const numOfCol = this.COL;
        for (let i = 0, k = mineArray.length; i < k; i++) {
            const { row, col } = mineArray[i];
            const index = (row * numOfRow) + (col % numOfCol);
            this.SQUARE[index].mine = true;
        }
        console.timeEnd('setMine');
    }
    getMineCnt({ row, col, index }) {
        let mineCnt = 0;
        for (let i = row - 1, j = row + 1; i <= j; i++) {
            for (let k = col - 1, g = col + 1; k <= g; k++) {
                const flag = this.isMine({ row: i, col: k })
                if (flag) {
                    mineCnt++;
                }
            }
        }
        return mineCnt;
    }
    isMine({ row, col }) {
        const squareRow = this.ROW;
        const squareCol = this.COL;
        const index = (row * squareRow) + (col % squareCol);
        if (row < 0 || row >= squareRow || col < 0 || col >= squareCol) {
            return false;
        }
        return this.SQUARE[index].mine;
    }
    setMineCnt() {
        console.time('setMineCnt');
        for (let i = 0, k = this.ROW; i < k; i++) {
            for (let j = 0, g = this.COL; j < g; j++) {
                const index = (i * k) + (j % g);
                const flag = this.SQUARE[index].mine;
                const mineCnt = this.getMineCnt({ row: i, col: j })
                if (!flag && mineCnt) {
                    this.SQUARE[index].count = mineCnt;
                }
            }
        }
        console.timeEnd('setMineCnt');
    }
}

const mineSweeper = new MineSweeper({ row: 10, column: 10, mineCount: 10 });
mineSweeper.init();
mineSweeper.setMine();
mineSweeper.setMineCnt();

const square = mineSweeper.SQUARE;
const setColor = (data) => {
    switch (data) {
        case 0:
            return '';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        default:
            return 'bomb';
    }
}
let record = "";
for (let i = 0; i < 10; i++) {
    let tr = '<tr>'
    for (let j = 0; j < 10; j++) {
        const index = i * 10 + j;
        const { mine, count } = square[index];
        if (mine) {
            tr += `<td class=${setColor(-1)}>*</td>`;
            continue;
        }
        tr += `<td class=${setColor(count)}>${count}</td>`;
    }
    tr += '</tr>';
    record += tr;
}
$('#mine table').html(record);