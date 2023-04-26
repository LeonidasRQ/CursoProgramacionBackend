const form = document.getElementById("baseForm");

form.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  const data = new FormData(form);
  const obj = {};

  data.forEach((value, key) => (obj[key] = value));

  const response = await fetch("/login", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  console.log(result);

  localStorage.setItem("token", result.token);
});
