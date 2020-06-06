export default function ngram(string, k = 1) {
  const hashMap = {};
  for (let x = string.length - k; x >= 0; x--) {
    let strTemp = "";
    for (let y = x; y < x + k; y++) {
      strTemp += string.charAt(y);
    }

    let ngramCount = hashMap[strTemp];
    if (typeof ngramCount !== "number") {
      ngramCount = 0;
    }
    ngramCount += 1;
    hashMap[strTemp] = ngramCount;
  }

  console.log(hashMap);

  let array = Object.entries(hashMap).map(([hash, count]) => {
    return { ngram: hash, count };
  });

  array = array.sort(
    (
      { ngram: ngramA = "", count: countA = 0 },
      { ngram: ngramB = "", count: countB = 0 }
    ) => {
      let result = 0;
      if (countA > countB) {
        result = -1;
      } else if (countB > countA) {
        result = 1;
      }
      if (result === 0) {
        //"2".localeCompare("10", undefined, {numeric: true})
        result = ngramA.localeCompare(ngramB, undefined, { numberic: true });
      }

      return result;
    }
  );

  console.log("sorted", array);
  return "see console";
}
