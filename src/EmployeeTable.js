import React from "react";

const EmployeeTable = ({ employeeArr, tableRow }) => {
  return (
    <div
      style={{
        marginTop: 30,
      }}
    >
      <h2 style={{ color: "red", textAlign: "center" }}>Employee Table</h2>
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Email Address</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employeeArr.map((val, ind) => {
            return (
              <tr onClick={() => tableRow(ind)} key={ind}>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.email}</td>
                <td>{val.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
