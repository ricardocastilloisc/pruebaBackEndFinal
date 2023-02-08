module.exports = {
  hasMutation: (arrayDna) => {
    let totalDna = 0;

    arrayDna.forEach((elementDna, indexDna) => {
      elementDna.split().forEach((letter, indexLetter) => {
        // Control Horizontal
        if (indexLetter < elementDna.length - 3) {
          if (
            isEqual(
              elementDna.charAt(indexLetter),
              elementDna.charAt(indexLetter + 1),
              elementDna.charAt(indexLetter + 2),
              elementDna.charAt(indexLetter + 3)
            )
          ) {
            totalDna++;
          }
        }
        // Control Vertical
        if (indexDna < arrayDna.length - 3) {
          if (
            isEqual(
              arrayDna[indexDna].charAt(indexLetter),
              arrayDna[indexDna + 1].charAt(indexLetter),
              arrayDna[indexDna + 2].charAt(indexLetter),
              arrayDna[indexDna + 3].charAt(indexLetter)
            )
          ) {
            totalDna++;
          }
        }

        //Control Diagonal
        if (
          indexDna < arrayDna.length - 3 &&
          indexLetter < elementDna.length - 3
        ) {
          if (
            isEqual(
              arrayDna[indexDna].charAt(indexLetter),
              arrayDna[indexDna + 1].charAt(indexLetter + 1),
              arrayDna[indexDna + 2].charAt(indexLetter + 2),
              arrayDna[indexDna + 3].charAt(indexLetter + 3)
            )
          ) {
            totalDna++;
          }
        }

        //Inverted Diagonal Control
        if (indexDna >= 3 && indexLetter < elementDna.length - 3) {
          if (
            isEqual(
              arrayDna[indexDna].charAt(indexLetter),
              arrayDna[indexDna - 1].charAt(indexLetter + 1),
              arrayDna[indexDna - 2].charAt(indexLetter + 2),
              arrayDna[indexDna - 3].charAt(indexLetter + 3)
            )
          ) {
            totalDna++;
          }
        }
      });
    });

    return totalDna > 1 ? true : false;
  },
};

const isEqual = (a, b, c, d) => {
  return a == b && b == c && c == d;
};
