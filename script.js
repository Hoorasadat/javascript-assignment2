
// Enable the submit button once something is added to the cart
function initFunction() {
  const submitButton = document.getElementById('submitOrder');

  const clientInputs = document.querySelectorAll('.orderContainer input[type="number"]');

  clientInputs.forEach(input => {
    input.addEventListener('input', function() {
      const inputValue = input.value;
      if (inputValue > 0) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    })
  });


}

function processData() {
  // Get the client data
  const fullName = document.getElementById("fullname").value;
  const address = document.getElementById("address").value;
  const postalCode = document.getElementById("postalcode").value;
  const telephone = document.getElementById("telephone").value;
  const email = document.getElementById("email").value;
  const pickupDate = document.getElementById("pickupdate").value;

  // Display the client info on the webpage
  const output = `<strong>Customer info:</strong> <br>
  Name: ${fullName} <br>
  Address: ${address} <br>
  Postal code: ${postalCode} <br>
  Telephone: ${telephone} <br>
  E-mail: ${email} <br>
  Order Pickup Date: ${pickupDate}`;

  const infoElement = document.getElementById("info");
  infoElement.innerHTML = output;


  // Get food order inputs (vegetableHampers, fruitHampers, freshChickens, and pork)
  const vegetableHampers = parseInt(document.getElementById('vegetableHampers').value) || 0;
  const fruitHampers = parseInt(document.getElementById('fruitHampers').value) || 0;
  const freshChickens = parseInt(document.getElementById('freshChickens').value) || 0;
  const pork = parseInt(document.getElementById('pork').value) || 0;

  // Display the order summary on the webpage
  const order = `<strong>Order Summary:</strong> <br>`
    + (vegetableHampers !== 0 ? `${vegetableHampers} Vegetable Hampers <br>` : '')
    + (fruitHampers !== 0 ? `${fruitHampers} Fruit Hampers <br>` : '')
    + (freshChickens !== 0 ? `${freshChickens} Fresh Chickens <br>` : '')
    + (pork !== 0 ? `${pork} Pork` : '');

  const orderElement = document.getElementById("orderSummary");
  orderElement.innerHTML = order;


  // Calculate the total order amount
  const vegetableHamperPrice = 30;
  const fruitHampersPrice = 20;
  const freshChickenPrice = 7;
  const porkPrice = 5;

  const totalOrder =
    (vegetableHampers * vegetableHamperPrice) +
    (fruitHampers * fruitHampersPrice) +
    (freshChickens * freshChickenPrice) +
    (pork * porkPrice);

    // Display the order amount
    const outputElement = document.getElementById('total');
    outputElement.innerHTML = `<strong>Total order:</strong> $${totalOrder.toFixed(2)}`;

    // adding css to the order summaryContainer element
    const summaryContainer = document.getElementById("summaryContainer");
    summaryContainer.classList.add("orderSummaryContainer");
}
