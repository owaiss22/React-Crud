import React from "react";
import { Grid } from "@material-ui/core";
import EmployeeContact from "./EmployeeContact";
import EmployeeTable from "./EmployeeTable";
import "./App.css";
import swal from "sweetalert";

class Employee extends React.Component {
  state = {
    employeeArr: [],
    currentRow: "",
  };

  // useEffect(()=>{},[]);

  tableRow = (ind) => {
    const { currentRow, employeeArr } = this.state;
    // console.log("index", ind)
    this.setState(
      {
        currentRow: { employeeData: employeeArr[ind], index: ind },
      },
      () => {
        // console.log(this.state.currentRow, "currenr");
      }
    );
  };

  handleSave = (values) => {
    const { employeeArr } = this.state;
    // const temp = employeeArr;
    // temp.push(values);
    employeeArr.length > 0
      ? employeeArr.map((val, ind) => {
          if (values.email !== val.email) {
            this.setState(
              {
                // employeeArr: temp,
                employeeArr: [...employeeArr, values],
                currentRow: "",
              },
              () => {
                // console.log(this.state.employeeArr);
              }
            );
          } else {
            swal("User Already Exist!");
          }
        })
      : this.setState(
          {
            // employeeArr: temp,
            employeeArr: [...employeeArr, values],
            currentRow: "",
          },
          () => {
            // console.log(this.state.employeeArr);
          }
        );
  };

  handleUpdate = (values, index) => {
    const { employeeArr } = this.state;
    const tempArray = employeeArr;
    tempArray[index] = values;
    console.log("update ka index", index);
    this.setState({
      employeeArr: tempArray,
    });
    this.setState({
      currentRow: "",
    });
  };

  handleDelete = (index) => {
    const { employeeArr } = this.state;
    let tempArray = employeeArr;
    tempArray.splice(index, 1);
    console.log("delete ka index", index);
    this.setState({
      employeeArr: tempArray,
    });
  };

  render() {
    const d = new Date("2015-03-25");
    const date = d.toLocaleDateString();
    const { handleLogOut } = this.props;
    const { employeeArr, currentRow } = this.state;
    // console.log("arrayy", employeeArr);
    return (
      <div>
        <button
          onClick={handleLogOut}
          style={{
            float: "right",
            padding: "10px 30px",
            backgroundColor: "#1b2430",
            color: "#fff",
            marginRight: 10,
          }}
        >
          LogOut
        </button>
        <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
          Employee Records
        </h1>
        <Grid container>
          <Grid item xs={5}>
            <EmployeeContact
              handleSave={this.handleSave}
              handleUpdate={this.handleUpdate}
              handleDelete={this.handleDelete}
              currentRow={currentRow}
            />
          </Grid>
          <Grid item xs={7}>
            <EmployeeTable employeeArr={employeeArr} tableRow={this.tableRow} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Employee;