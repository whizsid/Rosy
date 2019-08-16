import { RosyNumber, RosyPosition } from "./types";

export const positions: { [x: number]: RosyPosition } = {
  0: {
    noun: "",
    powerOfTen: 0,
    prefix: ""
  },
  2: {
    noun: "සියය",
    powerOfTen: 2,
    prefix: "සිය"
  },
  3: {
    noun: "දහස",
    powerOfTen: 3,
    prefix: "දහස්"
  },
  5: {
    noun: "ලක්ෂය",
    powerOfTen: 5,
    prefix: "ලක්ෂ"
  },
  6: {
    noun: "මිලියනය",
    powerOfTen: 6,
    prefix: "මිලියන"
  },
  7: {
    noun: "කෝටිය",
    powerOfTen: 7,
    prefix: "කෝටි"
  },
  9: {
    noun: "බිලියනය",
    powerOfTen: 9,
    prefix: "බිලියන"
  },
  12: {
    noun: "ත්‍රිලියනය",
    powerOfTen: 12,
    prefix: "ත්‍රිලියන"
  },
  15: {
    noun: "ක්වාඩ්‍රිලියනය",
    powerOfTen: 15,
    prefix: "ක්වාඩ්‍රිලියන"
  },
  18: {
    noun: "ක්වින්ටිලියනය",
    powerOfTen: 18,
    prefix: "ක්වින්ටිලියන"
  },
  21: {
    noun: "සෙක්ස්ටිලියනය",
    powerOfTen: 21,
    prefix: "සෙක්සිටිලියන"
  },
  24: {
    noun: "සෙප්ටිලියනය",
    powerOfTen: 24,
    prefix: "සෙප්ටිලියන"
  },
  27: {
    noun: "ඔක්ටිලියනය",
    powerOfTen: 27,
    prefix: "ඔක්ටිලියන"
  },
  30: {
    noun: "නොලියනය",
    powerOfTen: 30,
    prefix: "නොලියන"
  },
  33: {
    noun: "ඩෙසිලියනය",
    powerOfTen: 33,
    prefix: "ඩෙසිලියන"
  }
};

export const numbers: { [x: number]: RosyNumber } = {
  0: {
    noun: "බිංදුව",
    number: 0,
    plusTenNoun: "දහය",
    plusTenPrefix: "දස",
    prefix: "",
    productTenNoun: "බිංදුව",
    productTenPrefix: ""
  },
  1: {
    noun: "එක",
    number: 1,
    plusTenNoun: "එකොළහ",
    plusTenPrefix: "එකොළොස්",
    prefix: "එක්",
    productTenNoun: "දහය",
    productTenPrefix: "දස"
  },
  2: {
    noun: "දෙක",
    number: 2,
    plusTenNoun: "දොළහ",
    plusTenPrefix: "දොළොස්",
    prefix: "දෙ",
    productTenNoun: "විස්ස",
    productTenPrefix: "විසි"
  },
  3: {
    noun: "තුන",
    number: 3,
    plusTenNoun: "දහතුන",
    plusTenPrefix: "දහතුන්",
    prefix: "තුන්",
    productTenNoun: "තිහ",
    productTenPrefix: "තිස්"
  },
  4: {
    noun: "හතර",
    number: 4,
    plusTenNoun: "දහ හතර",
    plusTenPrefix: "දහ හතර",
    prefix: "හාර",
    productTenNoun: "හතළිහ",
    productTenPrefix: "හතළිස්"
  },
  5: {
    noun: "පහ",
    number: 5,
    plusTenNoun: "පහළොව",
    plusTenPrefix: "පහළොස්",
    prefix: "පන්",
    productTenNoun: "පනහ",
    productTenPrefix: "පනස්"
  },
  6: {
    noun: "හය",
    number: 6,
    plusTenNoun: "දහසය",
    plusTenPrefix: "දහසය",
    prefix: "හය",
    productTenNoun: "හැට",
    productTenPrefix: "හැට"
  },
  7: {
    noun: "හත",
    number: 7,
    plusTenNoun: "දහ හත",
    plusTenPrefix: "දහ හත්",
    prefix: "හත්",
    productTenNoun: "හැත්තෑව",
    productTenPrefix: "හැත්තෑ"
  },
  8: {
    noun: "අට",
    number: 8,
    plusTenNoun: "දහ අට",
    plusTenPrefix: "දහ අට",
    prefix: "අට",
    productTenNoun: "අසූව",
    productTenPrefix: "අසූ"
  },
  9: {
    noun: "නවය",
    number: 9,
    plusTenNoun: "දහ නවය",
    plusTenPrefix: "දහ නව",
    prefix: "නව",
    productTenNoun: "අනූව",
    productTenPrefix: "අනූ"
  }
};
