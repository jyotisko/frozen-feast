const timeEl = document.querySelector('.timestamp');

const handleTimer = min => {
  let time = min * 60;

  const timer = setInterval(() => {
    if (time == 0) {
      clearInterval(timer);
    }
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    timeEl.textContent = `${min}:${sec}`;
    time--;
  }, 1000);
};

export default handleTimer;
