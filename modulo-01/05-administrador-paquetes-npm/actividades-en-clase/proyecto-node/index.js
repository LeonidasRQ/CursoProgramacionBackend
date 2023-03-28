let object = {};

for (let i = 0; i <= 100; i++) {
  const randomNumber = Math.floor(Math.random() * 20 + 1);

  if (!object[randomNumber]) object[randomNumber] = 1;
  else object[randomNumber]++;
}

console.log(object);
