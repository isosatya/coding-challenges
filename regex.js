function convertToDecimal(perc) {
  let array = perc.map(x => {
    return Number(x.slice(0, x.length - 1)) / 100;
  });
  console.log(array);
}

convertToDecimal(["33%", "98.1%", "56.44%", "100%"]);
