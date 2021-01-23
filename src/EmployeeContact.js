import React, { useEffect } from "react";
import swal from "sweetalert";

const EmployeeContact = ({
  handleSave,
  handleUpdate,
  handleDelete,
  currentRow,
}) => {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
  });

  console.log(currentRow);

  useEffect(() => {
    if (currentRow) {
      setValues({
        firstName: currentRow.employeeData.firstName,
        lastName: currentRow.employeeData.lastName,
        email: currentRow.employeeData.email,
        salary: currentRow.employeeData.salary,
      });
    }
  }, [currentRow]);

  const handleAddBtn = () => {
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.salary !== ""
    ) {
      handleSave(values);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        salary: "",
      });
    } else {
      swal("Fill all Fields First!!!!");
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        salary: "",
      });
    }
  };

  const handleUpdateBtn = () => {
    console.log("curIndex", currentRow.index);
    if (currentRow.index >= 0) {
      handleUpdate(values, currentRow.index);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        salary: "",
      });
    }
  };

  const handleDlt = () => {
    handleDelete(currentRow.index);
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      salary: "",
    });
  };

  return (
    <div>
      <div
        style={{
          marginTop: 30,
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "red" }}>Employee Form</h2>

        <input
          style={{ padding: "10px 60px" }}
          type="text"
          placeholder="Enter FirstName . . ."
          name="firstName"
          value={values.firstName}
          onChange={(e) => {
            setValues({
              ...values,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <br />
        <br />

        <input
          style={{ padding: "10px 60px" }}
          type="text"
          placeholder="Enter LastName . . ."
          name="lastName"
          value={values.lastName}
          onChange={(e) => {
            setValues({
              ...values,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <br />
        <br />

        <input
          style={{ padding: "10px 60px" }}
          type="text"
          placeholder="Enter Email Address . . ."
          name="email"
          value={values.email}
          onChange={(e) => {
            setValues({
              ...values,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <br />
        <br />

        <input
          style={{ padding: "10px 60px" }}
          type="text"
          placeholder="Enter Salary . . ."
          name="salary"
          value={values.salary}
          onChange={(e) => {
            setValues({
              ...values,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <button
          onClick={() => handleAddBtn()}
          style={{
            padding: "10px 20px",
            backgroundColor: "#1b2430",
            color: "#fff",
            marginRight: 10,
          }}
        >
          Add Record
        </button>
        <button
          onClick={() => handleUpdateBtn()}
          style={{
            padding: "10px 20px",
            backgroundColor: "#1b2430",
            color: "#fff",
            marginRight: 10,
          }}
        >
          Update Record
        </button>
        <button
          onClick={() => handleDlt()}
          style={{
            padding: "10px 20px",
            backgroundColor: "#1b2430",
            color: "#fff",
            marginRight: 10,
          }}
        >
          Delete Record
        </button>
      </div>
    </div>
  );
};

export default EmployeeContact;
