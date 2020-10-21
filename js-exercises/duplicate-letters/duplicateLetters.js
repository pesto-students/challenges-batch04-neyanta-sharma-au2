function duplicateLetters(args) {
  const arr = args.split('');
  const count = {};
  let maxCount = 1;
  for (const n of arr) {
    if (count[n]) {
      count[n] += 1;
    } else {
      count[n] = 1;
    }
  }
  for (const key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
    }
  }
  if (maxCount === 1) {
    return false;
  }
  return maxCount;
}

// export { duplicateLetters };

duplicateLetters('psyfpghjklqerftyupiop');
