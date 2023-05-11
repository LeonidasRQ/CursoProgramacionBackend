process.on("exit", (code) => {
  console.log("Proceso finalizado por argumento invalido en el proceso", code);
});

const listNumbers = function (numArray) {
  let typesArray = [];

  numArray.forEach((num) => {
    typesArray.push(typeof num);

    if (typeof num != "number") {
      console.error("Invalid parameters", typesArray);
      process.exit(9);
    }
  });
};

let array = [1, 2, "three", false];

listNumbers(array);
