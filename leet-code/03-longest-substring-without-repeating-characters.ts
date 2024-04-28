function lengthOfLongestSubstring(s: string): number {
  if (s == '') {
    return 0;
  }
  let maxLength: number = 1;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const subs = s.substring(i, j + 1);
      if (j > 120 || hasRepeats(subs)) {
        break;
      }
      maxLength = subs.length > maxLength ? subs.length : maxLength;
    }
  }
  return maxLength;
}

function hasRepeats(str: string) {
  return /(.).*\1/.test(str);
}
