# Expense Tracker Application

A clean, beginner-friendly Expense Tracker built with Vanilla JavaScript, HTML, and CSS. This application allows users to track their income and expenses, persist data using LocalStorage, and view a summary of their financial balance.

## Features

- **Add Transactions**: Input title, amount, category, and date for every expense or income.
- **Track Balance**: Automatically calculates total balance, total income, and total expenses.
- **Data Persistence**: Uses browser `localStorage` to save data, so transactions remain after page refresh.
- **Transaction History**: View a list of all past transactions with visual indicators for income (green) and expense (red).
- **Delete Transactions**: Easily remove transactions and update the totals immediately.
- **Responsive Design**: Works well on desktop and mobile devices.
- **Validation**: Prevents adding empty or invalid transactions.

## Technologies Used

- **HTML5**: Semantic structure of the application.
- **CSS3**: Custom styling with Flexbox, Grid, and CSS Variables for theming.
- **Vanilla JavaScript**: DOM manipulation, event handling, and state management without any frameworks.

## Project Structure

```
/client
  ├── index.html    # Main application structure
  ├── style.css     # Stylesheet for UI/UX
  └── script.js     # Application logic and LocalStorage handling
```

## How to Run Locally

1. **Clone or Download** this repository.
2. **Open** the project folder.
3. **Launch** the application:
   - You can simply open `client/index.html` in your web browser.
   - Or serve it using a simple static server (e.g., VS Code Live Server, or `python3 -m http.server`).

## Future Enhancements

- **Chart Visualization**: Add a pie chart to visualize expenses by category.
- **Filters**: Filter transactions by date range or category.
- **Export**: Export data to CSV.
- **Dark Mode**: Add a toggle for dark mode.
