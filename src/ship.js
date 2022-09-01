const Ship = (size) => {
  const shipArr = [];
  for (let i = 0; i < size; i++) {
    shipArr.push({ hit: false });
  }

  const getLength = shipArr.length;

  const hit = (pos) => {
    shipArr[pos].hit = true;
    return shipArr;
  };

  const isSunk = () => {
    if (shipArr.every((x) => x.hit == true)) {
      return true;
    }
  };

  return { shipArr, getLength, hit, isSunk };
};

export default Ship;
