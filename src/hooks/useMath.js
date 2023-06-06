// ----------------------------------------------------------------------

export default function useMath(res, dice) {
  let math = "";
  let condition = true;

  if (res > dice) {
    for (let i = 0; condition; i++) {
      if (i + dice === res) {
        math = `${i} + `;
        condition = false;
      }
    }
  } else {
    for (let i = 0; condition; i++) {
      if (i - dice === res) {
        math = `${i} - `;
        condition = false;
      }
    }
  }

  return math;
}
