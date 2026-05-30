const EmployeeDetailsModal = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl w-full max-w-3xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Employee Details</h2>

          <button onClick={onClose} className="text-red-500 font-bold text-xl">
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <p>
            <strong>ID:</strong> {employee.id}
          </p>

          <p>
            <strong>Name:</strong> {employee.firstName} {employee.lastName}
          </p>

          <p>
            <strong>Email:</strong> {employee.email}
          </p>

          <p>
            <strong>Department:</strong> {employee.department}
          </p>

          <p>
            <strong>Position:</strong> {employee.position}
          </p>

          <p>
            <strong>Salary:</strong> ${employee.salary.toLocaleString()}
          </p>

          <p>
            <strong>Hire Date:</strong> {employee.hireDate}
          </p>

          <p>
            <strong>Age:</strong> {employee.age}
          </p>

          <p>
            <strong>Location:</strong> {employee.location}
          </p>

          <p>
            <strong>Performance Rating:</strong> {employee.performanceRating}
          </p>

          <p>
            <strong>Projects Completed:</strong> {employee.projectsCompleted}
          </p>

          <p>
            <strong>Status:</strong> {employee.isActive ? "Active" : "Inactive"}
          </p>

          <p className="col-span-2">
            <strong>Manager:</strong> {employee.manager || "N/A"}
          </p>

          <div className="col-span-2">
            <strong>Skills:</strong>

            <div className="flex flex-wrap gap-2 mt-2">
              {employee.skills?.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsModal;
