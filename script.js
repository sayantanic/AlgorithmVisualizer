let array = [];

function generateArray() {
  const bars = document.getElementById('bars');
  bars.innerHTML = '';

  for (let i = 0; i < 50; i++) {
    array.push(Math.floor(Math.random() * 300) + 5);
    const bar = document.createElement('div');
    bar.style.height = `${array[i]}px`;
    bar.classList.add('bar');
    bars.appendChild(bar);
  }
}

function resetArray() {
  array = [];
  generateArray();
}

async function swap(bar1, bar2) {
  const temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = temp;
}

async function bubbleSort() {
  const bars = document.querySelectorAll('.bar');
  const n = bars.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      bars[j].style.backgroundColor = '#ff6b6b';
      bars[j + 1].style.backgroundColor = '#ff6b6b';

      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 100)
        );
        await swap(bars[j], bars[j + 1]);
      }

      bars[j].style.backgroundColor = '#3498db';
      bars[j + 1].style.backgroundColor = '#3498db';
    }
    bars[n - i - 1].style.backgroundColor = '#18bc9c';
  }
}

async function insertionSort() {
  const bars = document.querySelectorAll('.bar');
  const n = bars.length;

  for (let i = 1; i < n; i++) {
    const key = parseInt(bars[i].style.height);
    let j = i - 1;
    bars[i].style.backgroundColor = '#ff6b6b';

    while (j >= 0 && parseInt(bars[j].style.height) > key) {
      bars[j].style.backgroundColor = '#ff6b6b';
      bars[j + 1].style.height = bars[j].style.height;
      j--;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
      for (let k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = '#3498db';
      }
    }
    bars[j + 1].style.height = `${key}px`;
  }
}

async function selectionSort() {
  const bars = document.querySelectorAll('.bar');
  const n = bars.length;

  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    bars[i].style.backgroundColor = '#ff6b6b';

    for (let j = i + 1; j < n; j++) {
      bars[j].style.backgroundColor = '#18bc9c';

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );

      if (parseInt(bars[j].style.height) < parseInt(bars[min_idx].style.height)) {
        if (min_idx !== i) {
          bars[min_idx].style.backgroundColor = '#3498db';
        }
        min_idx = j;
      } else {
        bars[j].style.backgroundColor = '#3498db';
      }
    }

    await swap(bars[min_idx], bars[i]);

    bars[min_idx].style.backgroundColor = '#3498db';
    bars[i].style.backgroundColor = '#18bc9c';
  }
}

generateArray();
