/* Faltou melhorar a verificação se o texto é um palíndromo
function longestPalindrome(text: string): string {
  if (text === '' || isPalindromic(text)) {
    return text;
  }
 
  let count = text.length - 1;
  let count2 = 2;
 
  while (count > 0) {
    for (let i = 0; i <= count2; i++) {
      const subText = text.substring(i, text.length - count2 + 1 + i);
      if (isPalindromic(subText)) {
        return subText;
      }
    }
 
    count2++;
    count--;
  }
 
  return '';
}
 
// Verificar o texto pelas laterais. Se as letras de cada lado não forem iguais, então não é um palíndromo.
function isPalindromic(string: string): boolean {
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
}
 
*/

// Solução CHAT GPT. A diferença foi justamente na verificação de se é um palíndromo.
function longestPalindrome(s) {
  if (s.length === 0) return '';
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  let L = left;
  let R = right;
  while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
    L--;
    R++;
  }
  return R - L - 1;
}
