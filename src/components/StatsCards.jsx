import data from "../data/employees.json";

const StatsCards = () => {
  const employees = data.employees;

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter((emp) => emp.isActive).length;

  const inActiveEmployees = employees.filter((emp) => !emp.isActive).length;

  const avgSalary = Math.round(
    employees.reduce((acc, emp) => acc + emp.salary, 0) / employees.length,
  );

  const departments = new Set(employees.map((emp) => emp.department)).size;

  const cards = [
    {
      title: "Total Employees",
      value: totalEmployees,
    },
    {
      title: "Active Employees",
      value: activeEmployees,
    },
    {
      title: "Inactive Employees",
      value: inActiveEmployees,
    },
    {
      title: "Average Salary",
      value: `$${avgSalary}`,
    },
    {
      title: "Departments",
      value: departments,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-6">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">{card.title}</h3>

          <p className="text-3xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
