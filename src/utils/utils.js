export const convertString = (str) => {
  let s = '';
  let i = 0;
  while (i < str.length) {
    let n = str.charAt(i);
    if (n == n.toUpperCase()) {
      // *Call* toLowerCase
      n = n.toLowerCase();
    } else {
      // *Call* toUpperCase
      n = n.toUpperCase();
    }

    i += 1;
    s += n;
  }
  return s;
};
