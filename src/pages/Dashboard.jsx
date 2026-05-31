import EmployeeTable from "../components/EmployeeTable";
import StatsCards from "../components/StatsCards";
import { HiUserCircle } from "react-icons/hi2";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Employee Dashboard</h1>

        <div className="flex items-center gap-3">
          <HiUserCircle size={40} className="text-gray-600" />

          <div>
            <p className="font-semibold text-gray-800">Saurabh Admin</p>

            <p className="text-sm text-gray-500">Administrator</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <StatsCards />
        <EmployeeTable />
      </div>
    </div>
  );
};

export default Dashboard;
