document.addEventListener('DOMContentLoaded', function() {
    var rows = document.querySelectorAll('.table tbody tr');
    var hiddenRows = document.querySelectorAll('.table tr.hidden');
    var showMoreButton = document.getElementById('showMoreButton');
    var hideButton = document.getElementById('hideButton');
    var totalSpendElement = document.getElementById('totalSpend');

    // Initial calculation without any button click
    var totalSpend = calculateTotalSpend(rows);
    totalSpendElement.textContent = 'Total Spend: $' + totalSpend.toFixed(2);

    showMoreButton.addEventListener('click', function() {
        hiddenRows.forEach(function(row) {
            row.style.display = 'table-row';
        });

        showMoreButton.style.display = 'none';
        hideButton.style.display = 'inline-block';

        // Recalculate total spend
        var totalSpend = calculateTotalSpend(rows);
        totalSpendElement.textContent = 'Total Spend: $' + totalSpend.toFixed(2);
    });

    hideButton.addEventListener('click', function() {
        hiddenRows.forEach(function(row) {
            row.style.display = 'none';
        });

        showMoreButton.style.display = 'inline-block';
        hideButton.style.display = 'none';

        // Recalculate total spend
        var totalSpend = calculateTotalSpend(rows);
        totalSpendElement.textContent = 'Total Spend: $' + totalSpend.toFixed(2);
    });

    function calculateTotalSpend(rows) {
        var totalSpend = 0;

        rows.forEach(function(row) {
            var price = parseFloat(row.querySelector('td:nth-child(5)').textContent.replace('$', ''));
            totalSpend += price;
        });

        return totalSpend;
    }
});