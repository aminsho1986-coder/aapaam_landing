export default function stylePrice(oldPrice) {
  if (oldPrice.length > 3) {
    let reversed = oldPrice.split("").reverse().join("");
    let newPrice = "";
    let count = 0;
    for (let i of oldPrice) {
      newPrice += reversed[count];
      if ((count + 1) % 3 == 0) {
        newPrice += ",";
      }
      count++;
    }
    let readyToGo = newPrice.split("").reverse().join("");
    if (readyToGo.startsWith(",")) {
      readyToGo = readyToGo.slice(1);

      return readyToGo;
    } else {
      return readyToGo;
    }
  } else {
    return oldPrice;
  }
}
