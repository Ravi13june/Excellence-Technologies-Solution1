let evenNumbersOfArray = () => {

  const arr = [8, 2, 3, 4, 5, 12];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
};

evenNumbersOfArray();
