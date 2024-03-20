// Sample item data
const menu = {
    "seafood": [
      { name: "Fish and Chips", price: 12.99 },
      { name: "Shrimp Scampi", price: 15.99 },
      { name: "Grilled Salmon", price: 18.99 }
    ],
    // Add more menu items as needed
  };
  
  // Function to dynamically generate item checkboxes
  function generateItemCheckboxes() {
    const itemsDiv = document.querySelector('.items');
    itemsDiv.innerHTML = '';
    for (const category in menu) {
      menu[category].forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item');
        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        const itemQuantity = document.createElement('input');
        itemQuantity.type = 'number';
        itemQuantity.min = 0;
        itemQuantity.value = 0;
        itemQuantity.addEventListener('change', updateTotals);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemQuantity);
        itemsDiv.appendChild(itemContainer);
      });
    }
  }
  
  // Function to calculate subtotal
  function calculateSubtotal() {
    let subtotal = 0;
    document.querySelectorAll('.item').forEach(itemContainer => {
      const itemName = itemContainer.querySelector('span').textContent;
      const itemQuantity = parseInt(itemContainer.querySelector('input').value);
      const item = findItem(itemName);
      subtotal += item.price * itemQuantity;
    });
    return subtotal;
  }
  
  // Function to update subtotal and delivery fee
  function updateTotals() {
    const subtotal = calculateSubtotal();
    const deliveryFee = 5; // Sample delivery fee, you can adjust it as needed
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('deliveryFee').textContent = `$${deliveryFee.toFixed(2)}`;
  }
  
  // Function to find an item by its name
  function findItem(name) {
    for (const category in menu) {
      const item = menu[category].find(item => item.name === name);
      if (item) {
        return item;
      }
    }
    return null;
  }
  
  // Event listener for Place Order button
  document.getElementById('placeOrderBtn').addEventListener('click', function() {
    // Handle placing order
    const paymentMethod = document.getElementById('paymentMethod').value;
    const deliveryAddress = document.getElementById('deliveryAddress').value;
    const subtotal = calculateSubtotal();
    const deliveryFee = 5; // Sample delivery fee, you can adjust it as needed
    const totalAmount = subtotal + deliveryFee;
  
    // Display order summary
    alert(`Your order summary:\n\nSubtotal: $${subtotal.toFixed(2)}\nDelivery Fee: $${deliveryFee.toFixed(2)}\nTotal: $${totalAmount.toFixed(2)}\n\nPayment Method: ${paymentMethod}\nDelivery Address: ${deliveryAddress}`);
  });
  
  // Initialize page
  generateItemCheckboxes();
  updateTotals();
  