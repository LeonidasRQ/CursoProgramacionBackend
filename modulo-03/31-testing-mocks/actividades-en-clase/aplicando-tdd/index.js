const login = (userData) => {
  const { user, password } = userData;

  if (password.length === 0) return "No se ha proporcionado password";
  if (user.length === 0) return "No se ha proporcionado usuario";
  if (password !== "123") return "Contraseña incorrecta";
  if (user !== "coderUser") return "Credenciales incorrectas";
  if (user === "coderUser" && password === "123") return "Logueado";
};

let passedTests = 0;
let failedTests = 0;
let totalTests = 5;

// 1. Sí no se pasa un password vacio, la función debe retornar 'No se ha proporcionado password'
console.log(
  "Test 1: Sí se pasa un password vacio, la función debe retornar 'No se ha proporcionado password'"
);

const mockedUser1 = {
  user: "coderUser",
  password: "",
};

let testResult1 = login(mockedUser1);

if (testResult1 === "No se ha proporcionado password") {
  console.log(" Test 1: ✅ Success");
  passedTests++;
} else {
  console.log(
    ` Test 1: ❌ Failed. Received ${testResult1} but expected 'No se ha proporcionado password'`
  );
  failedTests++;
}

// 2. Sí se pasa un usuario vacio, la función debe retornar 'No se ha proporcionado usuario'
console.log(
  "Test 2: Sí se pasa un usuario vacio, la función debe retornar 'No se ha proporcionado usuario'"
);

const mockedUser2 = {
  user: "",
  password: "123",
};

let testResult2 = login(mockedUser2);

if (testResult2 === "No se ha proporcionado usuario") {
  console.log(" Test 2: ✅ Success");
  passedTests++;
} else {
  console.log(
    ` Test 2: ❌ Failed. Received ${testResult2} but expected 'No se ha proporcionado un usuario'`
  );
  failedTests++;
}

// 3. Sí se pasa un password incorrecto, la función debe retornar 'Contraseña incorrecta'
console.log(
  "Test 3: Sí se pasa un password incorrecto, la función debe retornar 'Contraseña incorrecta'"
);

const mockedUser3 = {
  user: "coderUser",
  password: "456",
};

let testResult3 = login(mockedUser3);

if (testResult3 === "Contraseña incorrecta") {
  console.log(" Test 3: ✅ Success");
  passedTests++;
} else {
  console.log(
    ` Test 3: ❌ Failed. Received ${testResult3} but expected 'Contraseña incorrecta'`
  );
  failedTests++;
}

// 4. Sí se pasa un usuario incorrecto, la función debe retornar 'Credenciales incorrectas'
console.log(
  "Test 4: Sí se pasa un usuario incorrecto, la función debe retornar 'Credenciales incorrectas'"
);

const mockedUser4 = {
  user: "userCoder",
  password: "123",
};

let testResult4 = login(mockedUser4);

if (testResult4 === "Credenciales incorrectas") {
  console.log(" Test 4: ✅ Success");
  passedTests++;
} else {
  console.log(
    ` Test 4: ❌ Failed. Received ${testResult4} but expected 'Credenciales incorrectas'`
  );
  failedTests++;
}

// 5. Sí el usuario y contraseña coinciden, la función debe retornar 'Logueado'
console.log(
  "Test 5: Sí el usuario y contraseña coinciden, la función debe retornar 'Logueado'"
);

const mockedUser5 = {
  user: "coderUser",
  password: "123",
};

let testResult5 = login(mockedUser5);

if (testResult5 === "Logueado") {
  console.log(" Test 5: ✅ Success");
  passedTests++;
} else {
  console.log(
    ` Test 5: ❌ Failed. Received ${testResult5} but expected 'Logueado'`
  );
  failedTests++;
}

console.log("--------------------------------------------------------------");
console.log("✅ Passed Tests: " + passedTests);
console.log("❌ Failed Tests: " + failedTests);
console.log("Total Tests: " + totalTests);
