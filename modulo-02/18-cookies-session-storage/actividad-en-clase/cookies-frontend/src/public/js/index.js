const form = document.getElementById("cookieForm");

form.addEventListener("submit", async (evt) => {
  evt.preventDefault();

  const obj = {};
  const data = new FormData(form);

  data.forEach((value, key) => {
    obj[key] = value;
  });

  let response = await fetch("/cookie", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let result = await response.json();
  console.log(result);
});

const getCookie = () => {
  console.log(document.cookie);
};
