💰 Expense Tracker (Vanilla JavaScript)

A professional, intermediate-level Expense Tracker web application built using pure HTML, CSS, and Vanilla JavaScript.
No frameworks or external libraries are used, making the project lightweight, efficient, and beginner-friendly while still demonstrating strong core JavaScript skills.

🚀 Features
🔹 Real User Input

Input fields for Title, Amount, Category, and Date

Accepts only user-entered data

No dummy, mock, or pre-filled transactions

🔹 Local Storage Persistence

All transactions are stored as objects inside an array in browser localStorage

Data persists even after page refresh or browser close

🔹 Live Financial Dashboard

Dynamically updates:

Total Balance

Total Income

Total Expenses

Updates instantly when transactions are added or deleted

🔹 Transaction History

Displays all transactions in a structured list

Visual distinction:

🟢 Income → Green indicator

🔴 Expense → Red indicator

🔹 Delete Functionality

Each transaction includes a delete button

Deleting a transaction:

Removes it from the UI

Updates totals instantly

Syncs changes to localStorage

🛠️ Technical Implementation
🔸 JavaScript (Vanilla)

Uses modern JavaScript methods:

map()

filter()

reduce()

DOM manipulation via:

getElementById()

createElement()

addEventListener()

🔸 Responsive UI

Built with CSS Flexbox and Grid

Optimized for:

Mobile devices

Tablets

Desktop screens

🔸 Clean Project Architecture
expense-tracker/
│── index.html   # Application structure
│── style.css    # Styling and responsive layout
│── script.js    # Application logic and state management

✅ Input Validation & Safety

Prevents submission of empty fields

Ensures valid numerical input for amounts

Displays user-friendly error messages for invalid entries

🧪 Sample Usage

Add Income:
Title: Salary | Amount: 5000

Add Expense:
Title: Rent | Amount: -120

All calculations and UI updates occur automatically.

📌 Technologies Used

HTML5

CSS3

Vanilla JavaScript

📈 Future Enhancements

Category-wise charts

Monthly filtering

Export data to CSV

Dark mode

