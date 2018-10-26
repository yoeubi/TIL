(function() {
  /* 게임 시작 여부 */
  let start = false;

  /* 화이트 타이머 엘리먼트 */
  let whiteTime = 0;
  const whiteTimerEl = document.querySelector(".white-timer");
  /* 블랙 타이머 엘리먼트 */
  let blackTime = 0;
  const blackTimerEl = document.querySelector(".black-timer");
  /* 통합 타이머*/
  let timerID;
  const timer = type => {
    timerID = setInterval(() => {
      if (type === "black") {
        blackTimerEl.textContent = `${String(
          parseInt(++blackTime / 60)
        ).padStart(2, 0)}:${String(blackTime % 60).padStart(2, 0)}`;
      } else {
        whiteTimerEl.textContent = `${String(
          parseInt(++whiteTime / 60)
        ).padStart(2, 0)}:${String(whiteTime % 60).padStart(2, 0)}`;
      }
    }, 1000);
  };
  /* 오목 기본 값 */
  let omok = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  /* 흑백 여부 */
  let flag = false;
  /* 게임 리셋 */
  const reset = () => {
    omok = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    document
      .querySelectorAll(".col")
      .forEach(item => item.classList.remove("white", "black"));
    start = flag = false;
    startBtnEl.textContent = "GAME START";
    whiteTimerEl.textContent = blackTimerEl.textContent = "00:00";
    clearInterval(timerID);
  };
  /* 시작 버튼 엘리먼트*/
  const startBtnEl = document.querySelector(".startBtn");
  /* 시작 버튼 이벤트 */
  startBtnEl.addEventListener(
    "click",
    () =>
      (start = start
        ? (reset(), false)
        : (timer("white"), (startBtnEl.textContent = "STOP"), true))
  );
  /*  */
  const init = () => {
    document.querySelectorAll(".col").forEach(el => {
      el.addEventListener("click", e => {
        if (start === false) return;
        if (el.classList.contains("white") || el.classList.contains("black")) {
          swal({
            title: "중복된 자리입니다!",
            type: "error",
            confirmButtonText: "계속 하기"
          });
          return;
        }
        let row = el.closest(".row").classList[0].split("-")[1];
        let col = el.classList[0].split("-")[1];
          let type = flag ? "black" : "white";
        el.classList.add(type);
        el.classList.remove("blackHover", "whiteHover");
        clearInterval(timerID);
        timer(!flag ? "black" : "white");
        omok[row - 1][col - 1] = type;
        if (checkOmok(type)) {
          setTimeout(() => {
            swal(`${flag ? "백" : "흑"}이 이기셨습니다.`);
            reset();
          }, 200);
        }
        flag = !flag;
      });
      el.addEventListener("mouseenter", e => {
        if (
          start === false ||
          el.classList.contains("white") ||
          el.classList.contains("black")
        )
          return;
        el.classList.add(flag ? "blackHover" : "whiteHover");
      });
      el.addEventListener("mouseleave", e =>
        el.classList.remove("blackHover", "whiteHover")
      );
    });
  };
  /* 오목 판별 함수*/
  const checkOmok = type => {
    let leftCross = 0,
      rightCross = 0,
      leftReverse = 0,
      rightReverse = 0;
    for (let i = 0; i < omok.length; i++) {
      let horizon = (vertical = 0);
      for (let j = 0; j < omok.length; j++) {
        if (omok[i][j] === type) {
          horizon++;
        } else {
          horizon = 0;
        }
        if (omok[j][i] === type) {
          vertical++;
        } else {
          vertical = 0;
        }
        if (horizon === 5 || vertical === 5) {
          return true;
        }
        if (i + j < omok.length && omok[j][i + j] === type) {
          leftCross++;
        } else {
          leftCross = 0;
        }
        if (i + j < omok.length && omok[i + j][j] === type) {
          rightCross++;
        } else {
          rightCross = 0;
        }
        if (leftCross === 5 || rightCross === 5) {
          return true;
        }
        if (i + j < omok.length && omok[omok.length - 1 - j][i + j] === type) {
          leftReverse++;
        } else {
          leftReverse = 0;
        }
        if (
          i + j < omok.length &&
          omok[omok.length - 1 - (i + j)][j] === type
        ) {
          rightReverse++;
        } else {
          rightReverse = 0;
        }
        if (leftReverse === 5 || rightReverse === 5) {
          return true;
        }
      }
    }
    return false;
  };
  /* 이벤트 등록 함수 실행 */
  init();
})();
