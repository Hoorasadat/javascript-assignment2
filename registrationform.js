function processData() {
    const fullName = document.getElementById("fullname").value;
    const address = document.getElementById("address").value;
    const postalCode = document.getElementById("postalcode").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const pickupDate = document.getElementById("pickupdate").value;

    // Display the output on the webpage
    const output = `Name: ${fullName}\nAddress: ${address}\nPostal code: ${postalCode}\nTelephone: ${telephone}\nE-mail: ${email}\nOrder Pickup Date: ${pickupDate}`;
    alert(output);
  }
