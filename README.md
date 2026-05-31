# Employee Dashboard - FactWise Assessment

A responsive Employee Dashboard built using React, AG Grid, and Tailwind CSS. The application displays employee records in a powerful data grid with advanced features such as search, sorting, filtering, pagination, CSV export, employee statistics, and detailed employee profile views.

---

## Features

- Employee Dashboard built with React
- AG Grid integration
- Global Search
- Column Sorting
- Column Filtering
- Pagination
- Export Employee Data to CSV
- Employee Details Modal
- Responsive UI using Tailwind CSS
- Employee Statistics Cards
- Active / Inactive Employee Status
- Custom Action Column with View Details

---

## Technologies Used

- React.js
- AG Grid
- Tailwind CSS
- React Icons
- JavaScript (ES6+)

---

## Project Setup

### Clone Repository

```bash
git clone https://github.com/Saurabhjaiswar05/factwise-employee-dashboard.git
```

### Navigate to Project

```bash
cd factwise-employee-dashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Open Browser

```text
http://localhost:5173
```

---

## Dependencies Used

### AG Grid

```bash
npm install ag-grid-react ag-grid-community
```

### React Icons

```bash
npm install react-icons
```

### Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## Project Structure

```text
src/
│
├── components/
│   ├── EmployeeTable.jsx
│   ├── EmployeeDetailsModal.jsx
│   └── StatsCards.jsx
│
├── data/
│   └── employees.json
│
├── pages/
│   └── Dashboard.jsx
│
├── App.jsx
│
└── main.jsx
```

---

## Dashboard Features

### Statistics Cards

- Total Employees
- Active Employees
- Inactive Employees
- Average Salary
- Total Departments

### Employee Grid

- Search Employees
- Sort Columns
- Filter Data
- Pagination
- Export Employee Data as CSV
- Responsive Layout

### Employee Details Modal

Displays:

- Employee ID
- Name
- Email
- Department
- Position
- Salary
- Hire Date
- Age
- Location
- Performance Rating
- Projects Completed
- Skills
- Manager
- Status

---

## Dataset

The application uses the employee dataset provided as part of the FactWise assessment.

---

## Author

**Saurabh Jaiswar**

GitHub: https://github.com/Saurabhjaiswar05
