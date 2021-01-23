import React, { useEffect } from "react";
import swal from "sweetalert";

const EmployeeContact = ({
  handleSave,
  handleUpdate,
  handleDelete,
  currentRow,
}) => {
  //   console.log("contact", currentRow.firstName);
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
    // console.log(values.firstName, "val val");
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

  // 3.2,3.4,3.3,3.8,3.8,3.7=3.5
  //1st=>4,4,3.4,3,2.4,2.4=>3.2
  //5th=>AI:3.8,CA:4,NT:3.8,NA:3.4,CC:4,OB:4
  //6th=>SPM:4,NS:2.8,IPT:4,TOCI-1:4,MM:3.8-3.4,DW:4

  //2.56,3.33,2.96,3.76,3.86,3.6=3.3
  //IPT:4,SPM:3.8,MM:3.4,TOCI-1:4,NS:3,DW:3.8

  return (
    <div>
      <div
        style={{
          marginTop: 30,
          // marginLeft: 20,
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
