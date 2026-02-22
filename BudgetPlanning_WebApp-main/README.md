# Budget Planner Web App

A simple, offline-first budget planner web application to help you track your income and expenses.  It uses local storage to persist your data, meaning your information stays on your device.

## Features

*   **Transaction Tracking:**  Add income and expense entries with descriptions and amounts.
*   **Income/Expense Categorization:**  Classify transactions as either income or expense.
*   **Monthly Filtering:** Filter transactions by month and year to analyze spending habits.
*   **Summary View:**  See a quick overview of total income, total expenses, and net balance.
*   **Data Persistence:**  **Important:** Your transaction data is saved locally in your browser's local storage.  This means that **if you close your browser and reopen the app, your data will still be there!**
*   **Delete Transactions:** Remove unwanted or incorrect transactions from the list.
*   **View All Transactions:** Ability to view all transactions regardless of month or year.
*   **Dynamic Month & Year Filters:** Automatically populates month and year dropdowns based on your transaction history.

## Important - Offline & Data Storage

This application is designed with privacy in mind.  Here's what you need to know:

*   **Offline Functionality:** Once loaded, the core functionality of this app (adding, editing, viewing transactions) should work even without an internet connection.
*   **Local Storage Only:**  **Your data is stored *only* within your web browser's local storage.** It is **NOT** transmitted to any external server. This provides a degree of privacy and control over your financial data.
*   **Privacy Consideration:**  Because the data is stored locally, it's tied to *that specific browser on that specific device*. Clearing your browser's cache or using a different browser/device will result in a blank slate.  Consider this when managing your data.
*   **Disclaimer:** While local storage offers a simple persistence mechanism, it's not a replacement for robust backup solutions. For long-term storage and data safety, consider exporting/backing up your data manually (feature not currently implemented but could be a future enhancement).  **The developer is not responsible for data loss due to browser issues, accidental data deletion, or other unforeseen circumstances.**

## Technologies Used

*   HTML
*   CSS
*   JavaScript

## Usage

1.  Open the `index.html` file in your web browser.
2.  Add transactions using the form, specifying the description, amount, and type (income or expense).
3.  Use the month and year filters to view transactions for a specific period.
4.  The summary section will update automatically to reflect the filtered transactions.
5.  Delete transactions by clicking the "Delete" button next to the transaction entry.
6.  Click "View All" to show all transactions from every month and year.

## Web Trial

[Budget Planning Web App](https://marufx86.github.io/BudgetPlanning_WebApp/)

## Repository

[GitHub Repository](https://github.com/marufx86/BudgetPlanning_WebApp)

## Future Enhancements

*   Data export/import (e.g., CSV) for backup and migration.
*   More detailed categories for transactions.
*   Visualizations (charts/graphs) of spending patterns.
*   User authentication (with appropriate privacy considerations).
*   Responsive design improvements for smaller screens.

## License

MIT License

Copyright (c) 2025 Maruf Khan Ornob

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
