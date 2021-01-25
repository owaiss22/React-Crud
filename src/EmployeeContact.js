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
    if (currentRow.index >= 0) {
      handleUpdate(values, currentRow.index);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        salary: "",
      });
    } else {
      swal("Please select Row For Updation!");
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
            backgroundColor: "#1b2430",
            border: "none",
            color: "#fff",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            marginRight: 10,
            boxShadow: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Add Record
        </button>
        <button
          onClick={() => handleUpdateBtn()}
          style={{
            backgroundColor: "#1b2430",
            border: "none",
            color: "#fff",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            marginRight: 10,
            boxShadow: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Update Record
        </button>
        <button
          onClick={() => handleDlt()}
          style={{
            backgroundColor: "#1b2430",
            border: "none",
            color: "#fff",
            padding: "10px 20px",
            textAlign: "center",
            textDecoration: "none",
            marginRight: 10,
            boxShadow: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Delete Record
        </button>
      </div>
    </div>
  );
};

export default EmployeeContact;
