

export const msToMinSec = (ms) => {
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  const minutes = Math.floor(ms / 60000);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};