export const Operators = (input) => {
  const myNumbers = [];
  //get the numbers
  input.forEach((element) => {
    const value = element.value;
    let input = element.input;
    const active = element.active;

    if (active === false) {
      input = 0;
    }
    const number = value + input;
    myNumbers.push(+number);
    console.log(myNumbers);
  });

  //calculate the operation
  const initialValue = 0;
  const sumWithInitial = myNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return sumWithInitial;
};
