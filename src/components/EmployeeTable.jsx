import { useMemo, useRef, useState } from "react";

import { AgGridReact, AgGridProvider } from "ag-grid-react";

import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import EmployeeDetailsModal from "./EmployeeDetailsModal";
import { HiOutlineEye } from "react-icons/hi";

import data from "../data/employees.json";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeTable = () => {
  const gridRef = useRef();

  const [rowData] = useState(data.employees);

  const [searchText, setSearchText] = useState("");

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columnDefs = useMemo(
    () => [
      {
        field: "id",
        width: 90,
      },
      {
        headerName: "Name",
        valueGetter: (params) =>
          `${params.data.firstName} ${params.data.lastName}`,
        flex: 1,
      },
      {
        field: "department",
        flex: 1,
      },
      {
        field: "position",
        flex: 1,
      },
      {
        field: "salary",
        valueFormatter: (params) => `$${params.value.toLocaleString()}`,
        flex: 1,
      },
      {
        field: "location",
        flex: 1,
      },
      {
        field: "performanceRating",
        headerName: "Rating",
        flex: 1,
      },
      {
        field: "isActive",
        headerName: "Status",
        cellRenderer: (params) => (
          <span
            className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
              params.value ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {params.value ? "Active" : "Inactive"}
          </span>
        ),
        flex: 1,
      },
      {
        headerName: "Actions",
        cellRenderer: (params) => (
          <button
            onClick={() => {
              setSelectedEmployee(params.data);
              setIsModalOpen(true);
            }}
            className="bg-blue-500 text-white px-3 py-1  rounded"
          >
            <HiOutlineEye size={18} />
          </button>
        ),
        width: 120,
      },
    ],
    [],
  );

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);

    gridRef.current.api.setGridOption("quickFilterText", e.target.value);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Employee Records</h2>

        <input
          type="text"
          placeholder="Search employees..."
          value={searchText}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg px-4 py-2 outline-none"
        />
      </div>

      <AgGridProvider modules={[AllCommunityModule]}>
        <div
          className="ag-theme-alpine"
          style={{
            height: "600px",
            width: "100%",
          }}
        >
          <AgGridReact
            theme={"legacy"}
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20, 50, 100]}
            animateRows={true}
          />
        </div>
      </AgGridProvider>
      {isModalOpen && (
        <EmployeeDetailsModal
          employee={selectedEmployee}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default EmployeeTable;
