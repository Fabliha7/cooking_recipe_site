// Menu data embedded in the HTML file with icons
var menuData = {
    "seafood": [
        { name: "Fish and Chips", icon: "fas fa-fish", price: "$12.99" },
        { name: "Shrimp Scampi", icon: "fas fa-shrimp", price: "$15.99" },
        { name: "Grilled Salmon", icon: "fas fa-fish", price: "$18.99" }
    ],
    "healthyfood": [
        { name: "Quinoa Salad", icon: "fas fa-leaf", price: "$9.99" },
        { name: "Grilled Chicken Wrap", icon: "fas fa-drumstick-bite", price: "$11.99" },
        { name: "Vegetable Stir-Fry", icon: "fas fa-carrot", price: "$10.99" }
    ],
    // More menu categories and items...
};

function showMenu(category) {
    var menuItems = menuData[category];
    if (menuItems && menuItems.length > 0) {
        var menuHTML = "<h2>" + category.toUpperCase() + " Menu</h2><ul>";
        menuItems.forEach(function(item) {
            menuHTML += "<li class='menu-item' style='background-color: " + getRandomColor() + ";'><i class='" + item.icon + "'></i> " + item.name + "<span class='price'>" + item.price + "</span></li>";
        });
        menuHTML += "</ul>";
        document.getElementById("menu").innerHTML = menuHTML;
    } else {
        document.getElementById("menu").innerHTML = "<p>No menu available for this category.</p>";
    }
}

// Function to generate random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

