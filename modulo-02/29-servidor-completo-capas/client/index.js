fetch("http://localhost:8080/api/v1/orders")
  .then((response) => response.json())
  .then((json) => {
    const fragment = document.createDocumentFragment();

    json.result.forEach((order) => {
      const div = document.createElement("div");
      const statusParagraph = document.createElement("p");
      const numberParagraph = document.createElement("p");

      statusParagraph.innerHTML = `Status: ${order.status}`;
      numberParagraph.innerHTML = `Order #: ${order.number}`;

      div.appendChild(numberParagraph);
      div.appendChild(statusParagraph);

      fragment.append(div);
    });

    const ordersContainer = document.getElementById("orders");
    ordersContainer.appendChild(fragment);
  });
