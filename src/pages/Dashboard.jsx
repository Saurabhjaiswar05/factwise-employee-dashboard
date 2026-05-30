import EmployeeTable from "../components/EmployeeTable";
import StatsCards from "../components/StatsCards";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Employee Dashboard
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Export Data
        </button>
      </div>

      <div className="p-6">
        <StatsCards />
        <EmployeeTable />
      </div>
    </div>
  );
};

export default Dashboard;