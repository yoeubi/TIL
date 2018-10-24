# 지뢰를 넣는 for문 성능향상


## 기존 코드의 문제점 

기존코드
```js
while (this.COUNT-- > 0) {
    let row = Math.floor(Math.random() * this.ROW);
    let column = Math.floor(Math.random() * this.COLUMN);
    if(this.MINESWEEPER[row][column] === this.MINE){
        this.COUNT++;
    }
    if(this.MINESWEEPER[row][column] === this.NOTMINE){
        this.MINESWEEPER[row][column] = this.MINE;
    }
}
```

- 기존 코드의 문제점 만약 지뢰찾기가 100 * 100 인 상태에서 그 안에 폭탄을 최대갯수(10000개)를 했을때 [최대갯수 - 1] 번째에서 빈 공간을 찾아서 넣을 확률이 1/10000 입니다. 왜냐하면 어떠한 숫자를 랜덤하게 뽑아도 가로 세로 0 ~ 100 사이에 존재 할 확률이 매우 높기 떄문입니다.

## 다시 코드를 작성합니다.

- 지뢰 찾기를 퍼즐 맞추는 것처럼 생각해보기로 했습니다. 퍼즐 10 * 10 이라면 퍼즐이 담길 배열과 퍼즐 조각 배열이 2개가 있어야 하며 퍼즐조각 하나 씩 옮길때마다 퍼즐조각 배열이 줄어들어서 동일한 조각이 나올수 없는 구조로 다시 짜기로 했습니다.

1. Scope 체이닝을 최소화 하자. -> 변수에 할당한다.
1. 배열에 값을 대입하는 부분을 고쳐보자. -> push 로 하는 것이 아닌 [index]로 변경
1. 참조 횟수 및 반복을 최소한 으로 줄여보자. -> 2차원배열이 아닌 객체를 담은 1차원 배열로 변경

```js
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
    getMineCnt({ row, col}) {
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
    isMine({ row, col}) {
        const numOfRow = this.ROW;
        const numOfCol = this.COL;
        const index = (row * numOfRow ) + ( col % numOfCol );
        if (row < 0 || row >= numOfRow || col < 0 || col >= numOfCol) {
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
```

개선한 코드
```js
let mines = new Minesweeper({ row : 100 , column : 100 , mineCount : 10000 }); 
// init: 6.645ms
// getMineIdx: 15.283ms
// setMine: 3.508ms
// setMineCnt: 14.201ms
// 지뢰찾기: 45.936ms
```

기존코드
```js
let mines = new Minesweeper(100, 100, 10000); 
// init: 0.658ms
// setMine: 11.256ms
// setMineCount: 9.492ms
// 지뢰찾기: 26.337ms
```

- - -

# 결론

- 기존의 코드를 개선해서 `setMine`함수를 단축시켰으나 랜덤한 값을 뽑아서 관리하는 방법으로는 전체적인 사간이 증가 했습니다.




