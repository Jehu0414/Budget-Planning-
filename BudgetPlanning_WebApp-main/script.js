let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Populate Month & Year Dropdowns Dynamically
function populateFilters() {
  const monthSelect = document.getElementById('month');
  const yearSelect = document.getElementById('year');

  monthSelect.innerHTML = '<option value="">All Months</option>';
  yearSelect.innerHTML = '<option value="">All Years</option>';

  let monthsSet = new Set();
  let yearsSet = new Set();

  transactions.forEach(tx => {
    const date = new Date(tx.date);
    monthsSet.add(date.getMonth());
    yearsSet.add(date.getFullYear());
  });

  [...monthsSet].sort().forEach(month => {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = new Date(2025, month, 1).toLocaleString('en-US', { month: 'long' });
    monthSelect.appendChild(option);
  });

  [...yearsSet].sort().forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });
}

// Save transactions to Local Storage
function saveTransactions() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Update Monthly Summary
function updateSummary() {
  const selectedMonth = document.getElementById('month').value;
  const selectedYear = document.getElementById('year').value;

  let totalIncome = 0, totalExpense = 0;

  transactions.filter(tx => {
    const date = new Date(tx.date);
    return (selectedYear === "" || date.getFullYear() == selectedYear) &&
           (selectedMonth === "" || date.getMonth() == selectedMonth);
  }).forEach(tx => {
    if (tx.type === 'income') totalIncome += tx.amount;
    else totalExpense += tx.amount;
  });

  document.getElementById('total-income').textContent = `₱${totalIncome.toFixed(2)}`;
  document.getElementById('total-expense').textContent = `₱${totalExpense.toFixed(2)}`;
  document.getElementById('net-balance').textContent = `₱${(totalIncome - totalExpense).toFixed(2)}`;
}

// Render Transactions Table
function renderTransactions() {
  const selectedMonth = document.getElementById('month').value;
  const selectedYear = document.getElementById('year').value;
  const tbody = document.getElementById('transaction-list');
  tbody.innerHTML = '';

  transactions.filter(tx => {
    const date = new Date(tx.date);
    return (selectedYear === "" || date.getFullYear() == selectedYear) &&
           (selectedMonth === "" || date.getMonth() == selectedMonth);
  }).forEach(tx => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${new Date(tx.date).toLocaleDateString()}</td>
      <td>${tx.description}</td>
      <td>${tx.type}</td>
      <td>₱${tx.amount.toFixed(2)}</td>
      <td><button class="delete-btn" onclick="deleteTransaction('₱{tx.date}')">Delete</button></td>`;
    tbody.appendChild(tr);
  });

  updateSummary();
}

// Delete Transaction
function deleteTransaction(date) {
  transactions = transactions.filter(tx => tx.date !== date);
  saveTransactions();
  populateFilters();
  renderTransactions();
}

// Handle New Transaction Submission
document.getElementById('transaction-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const description = document.getElementById('description').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  transactions.push({ description, amount, type, date: new Date().toISOString() });
  saveTransactions();
  populateFilters();
  renderTransactions();
  this.reset();
});

// Update on Filter Change
document.getElementById('filter-btn').addEventListener('click', renderTransactions);

// Initialize
populateFilters();
renderTransactions();
