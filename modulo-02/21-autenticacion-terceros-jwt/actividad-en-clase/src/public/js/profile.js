const divElem = document.getElementById("profile");
async function getProfile() {
  const response = await fetch("/api/sessions/profile", {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (response.status !== 200) return (location.href = "/login");

  const profile = await response.json();

  console.log(profile);

  divElem.innerHTML += `<h1>Bienvenido ${profile.payload.name}</h1> <p>Email: ${profile.payload.email}</p>`;
}
