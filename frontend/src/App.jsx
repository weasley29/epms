import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch(() => {
        console.log("Backend not reachable");
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Payroll System</h1>
      <h2>Employees</h2>

      {employees.length === 0 ? (
        <p>Loading or No Data…</p>
      ) : (
        <ul>
          {employees.map((emp) => (
            <li key={emp.id}>
              <b>{emp.name}</b> — ₹{emp.salary}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

