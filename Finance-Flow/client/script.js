// DOM Elements
const balanceEl = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const category = document.getElementById('category');
const date = document.getElementById('date');
const errorMsg = document.getElementById('error-msg');

// Get transactions from local storage
const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

// Global state
let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Function to generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Function to add transaction
function addTransaction(e) {
  e.preventDefault();

  // Validation
  if (
    text.value.trim() === '' || 
    amount.value.trim() === '' || 
    category.value === '' ||
    date.value === ''
  ) {
    showError('Please fill in all fields correctly.');
    return;
  }

  const amountValue = +amount.value; // Convert to number

  if (isNaN(amountValue) || amountValue === 0) {
    showError('Please enter a valid non-zero amount.');
    return;
  }

  hideError();

  const transaction = {
    id: generateID(),
    text: text.value,
    amount: amountValue,
    category: category.value,
    date: date.value
  };

  transactions.push(transaction);

  addTransactionDOM(transaction);
  updateValues();
  updateLocalStorage();

  // Reset form
  text.value = '';
  amount.value = '';
  category.value = '';
  date.value = '';
}

// Show error message
function showError(message) {
  errorMsg.innerText = message;
  errorMsg.classList.add('show-error');
  setTimeout(() => {
    errorMsg.classList.remove('show-error');
  }, 3000);
}

function hideError() {
  errorMsg.classList.remove('show-error');
}

// Function to add transaction to DOM list
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';
  const itemClass = transaction.amount < 0 ? 'minus' : 'plus';

  const item = document.createElement('li');

  // Add class based on value
  item.classList.add(itemClass);

  // Format amount with commas
  const formattedAmount = Math.abs(transaction.amount).toFixed(2);
  
  // Format date (simple)
  const dateObj = new Date(transaction.date);
  const dateStr = dateObj.toLocaleDateString();

  item.innerHTML = `
    <div class="transaction-info">
      <span class="transaction-title">${transaction.text}</span>
      <span class="transaction-meta">${transaction.category} • ${dateStr}</span>
    </div>
    <span class="transaction-amount">${sign}$${formattedAmount}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(item);
}

// Function to update the balance, income and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balanceEl.innerText = `$${total}`;
  money_plus.innerText = `+$${income}`;
  money_minus.innerText = `-$${expense}`;
  
  // Update empty state
  if (transactions.length === 0) {
    list.innerHTML = '<li class="empty-state">No transactions added yet.</li>';
  } else {
    // Remove empty state message if it exists and we're adding via init
    const emptyState = list.querySelector('.empty-state');
    if (emptyState && transactions.length > 0) {
      emptyState.remove();
    }
  }
}

// Function to remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  updateLocalStorage();
  init();
}

// Update local storage transactions
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Init app
function init() {
  list.innerHTML = '';

  if (transactions.length === 0) {
    list.innerHTML = '<li class="empty-state">No transactions added yet.</li>';
  } else {
    transactions.forEach(addTransactionDOM);
  }
  
  updateValues();
}

// Event Listeners
form.addEventListener('submit', addTransaction);

// Expose removeTransaction to global scope because it's called via onclick in HTML string
window.removeTransaction = removeTransaction;

init();
