function sendRequest() {
  fetch("http://localhost:8080/test")
    .then((result) => result.json())
    .then((response) => console.log(response));
}
