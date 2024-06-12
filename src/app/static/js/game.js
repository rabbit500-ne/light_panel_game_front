const lights = document.querySelectorAll('.light');
const correctPattern = generatePattern();
let playerPattern = Array(lights.length).fill(false);

lights.forEach((light, index) => {
  light.addEventListener('click', () => {
    light.classList.toggle('on');
    playerPattern[index] = light.classList.contains('on');
    checkPattern();
  });
});

function generatePattern() {
  let pattern = Array(lights.length).fill(false);
  for (let i = 0; i < pattern.length; i++) {
    pattern[i] = Math.random() < 0.5;
  }
  return pattern;
}

function checkPattern() {
  if (arraysEqual(playerPattern, correctPattern)) {
    alert('正解です！次のステージへ進みます。');
    // 次のステージへ進むロジック
  } else {
    // 不正解時の処理
  }
}

function arraysEqual(a, b) {
  return a.every((val, index) => val === b[index]);
}
