// Function to validate client data
function validateClientData() {
    const name = document.getElementById('name').value;
    // Add validation for other client data inputs (address, postal code, telephone, e-mail, order pickup date)

    if (name.trim() === '') {
      alert('Please enter your name.');
      return false;
    }
    // Add more validation checks for other inputs as needed.

    return true;
  }

  // Function to process the food order and display the output
  function processData() {
    if (!validateClientData()) {
      return;
    }

    // Get the food order inputs
    const vegetableHampers = parseInt(document.getElementById('vegetableHampers').value) || 0;
    // Get other food order inputs (fruitHampers, freshChickens, pork)

    // Calculate the total order amount
    const vegetableHamperPrice = 30;
    const freshChickenPrice = 7;
    const porkPrice = 5;
    const totalOrder = (vegetableHampers * vegetableHamperPrice) +
                       // Calculate the total amount for other food items (freshChickens, pork)

    // Display the output
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = `
      <p>Name: ${document.getElementById('name').value}</p>
      <!-- Display other client data (address, postal code, telephone, e-mail, order pickup date) -->
      <p>Order:</p>
      <p>${vegetableHampers} Vegetable Hampers</p>
      <!-- Display other food order items (fruitHampers, freshChickens, pork) -->
      <p>Total order: $${totalOrder.toFixed(2)}</p>
    `;
  }

  // Add event listener for the submit button
  const submitButton = document.getElementById('submitOrder');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    processData();
  });

  // Enable the submit button once the client data is valid
  const clientInputs = document.querySelectorAll('#orderForm input[type="text"]');
  clientInputs.forEach(input => {
    input.addEventListener('input', function() {
      const isFormValid = validateClientData();
      submitButton.disabled = !isFormValid;
    });
  });
