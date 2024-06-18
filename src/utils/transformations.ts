export const capitalize = (word: string): string => {
  if (word.length === 0) return "";
  if (word.length === 1) return word.toUpperCase();
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
};

export const formatPhoneNumber = (numStr: string): string => {
  // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
  let newStr = "";
  let i = 0;
  while (i < numStr.length) {
    newStr += numStr[i];
    if (i % 2 !== 0) {
      newStr += "-";
    }
    i++;
  }
  return newStr;
};
