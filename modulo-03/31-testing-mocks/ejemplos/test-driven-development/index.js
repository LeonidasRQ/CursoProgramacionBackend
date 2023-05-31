const sum = (...nums) => {
  if (nums.length === 0) return 0;
  if (!nums.every((num) => typeof num === "number")) return null;
  return nums.reduce((acc, cur) => acc + cur);
};

let passedTests = 0;
let failedTests = 0;
let totalTests = 4;

// 1. La función debe retornar null sí algún parametro no es numerico
console.log(
  "Test 1: La función debe retornar null sí algún parametro no es numerico"
);

let testResult1 = sum("2", 2);

if (testResult1 === null) {
  console.log("Test 1: ✅ Success");
  passedTests++;
} else {
  console.log(
    `Test 1: ❌ Failed. Received ${typeof testResult1} but expected null`
  );
  failedTests++;
}

// 2. La función debe retornar 0 sino se pasó ningún parametro
console.log("Test 2: La función debe retornar 0 sino se pasó ningún parametro");

let testResult2 = sum();

if (testResult2 === 0) {
  console.log("Test 2: ✅ Success");
  passedTests++;
} else {
  console.log(`Test 2: ❌ Failed. Received ${testResult2} but expected 0`);
  failedTests++;
}

// 3. La función debe poder realizar la suma correctamente
console.log("Test 3: La función debe poder realizar la suma correctamente");

let testResult3 = sum(1, 2);

if (testResult3 === 3) {
  console.log("Test 3: ✅ Success");
  passedTests++;
} else {
  console.log(`Test 3: ❌ Failed. Received ${testResult3} but expected 3`);
  failedTests++;
}

// 4. La función debe poder hacer la suma de cualquier cantidad de numeros
console.log(
  "Test 4: La función debe poder hacer la suma de cualquier cantidad de numeros"
);

let testResult4 = sum(1, 2, 3, 4, 5);

if (testResult4 === 15) {
  console.log("Test 4: ✅ Success");
  passedTests++;
} else {
  console.log(`Test 4: ❌ Failed. Received ${testResult4} but expected 15`);
  failedTests++;
}

console.log("--------------------------------------------------------------");
console.log("✅ Passed Tests: " + passedTests);
console.log("❌ Failed Tests: " + failedTests);
console.log("Total Tests: " + totalTests);
