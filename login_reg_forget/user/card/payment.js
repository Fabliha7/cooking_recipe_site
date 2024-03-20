function updatePayment() {
    const cardHolder = document.getElementById("cardHolder").value;
    let cardNumber = document.getElementById("cardNumber").value;
    const expirationDate = document.getElementById("expirationDate").value;
    const cvv = document.getElementById("cvv").value;

    // Check for blank inputs and selected options
    if (!cardHolder || !cardNumber || !expirationDate || !cvv) {
        document.getElementById("warning").innerText = "Please fill in all fields and select options.";
        return;
    }

    // Validate card number format (16 digits)
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumber)) {
        document.getElementById("warning").innerText = "Invalid card number format. Please enter 16 digits.";
        return;
    }

    // Format card number into 4 blocks
    cardNumber = cardNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');

    // Validate CVV format (3 digits)
    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
        document.getElementById("warning").innerText = "Invalid CVV format. Please enter 3 digits.";
        return;
    }

    // Additional validation logic can be added as needed.

    // Update the initial card info section
    document.getElementById("initialCardHolder").value = cardHolder;
    document.getElementById("initialCardNumber").value = cardNumber;
    document.getElementById("initialExpirationDate").value = expirationDate;
    document.getElementById("initialCvv").value = cvv;

    // Clear the input fields for the next update
    document.getElementById("cardHolder").value = "";
    document.getElementById("cardNumber").value = "";
    document.getElementById("expirationDate").value = "";
    document.getElementById("cvv").value = "";

    // Clear any previous warning messages
    document.getElementById("warning").innerText = "";
}