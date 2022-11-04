import { useState } from "react";
import Filtered from "./filteredData";
const Employees = (props) => {
    const employees = [
    {
      id: 1,
      name: "Tommy",
      loss: 23,
      profit: 1212,
      city: "New York",
    },
    {
      id: 2,
      name: "Mike",
      loss: 27,
      profit: 12,
      city: "Detroit",
    },
    {
      id: 3,
      name: "Lisa",
      loss: 25,
      profit: 12312321,
      city: "Chicago",
    },
    {
      id: 4,
      name: "Kane",
      loss: 31,
      profit: 123213,
      city: "New York",
    },
    {
      id: 5,
      name: "Mark",
      loss: 37,
      profit: 12312,
      city: "Chicago",
    },
    {
      id: 6,
      name: "Ryan",
      loss: 371,
      profit: 1223312,
      city: "Dubai",
    },
    {
      id: 7,
      name: "John",
      loss: 21,
      profit: 212312,
      city: "Detroit",
    },
    {
      id: 8,
      name: "Jimmy Mark",
      loss: 7,
      profit: 1212,
      city: "Washinton",
    },
    {
      id: 9,
      name: "Tony Mark",
      loss: 117,
      profit: 12312,
      city: "Chicago",
    },
    {
      id: 10,
      name: "Mark Wood",
      loss: 37,
      profit: 3212312,
      city: "Chicago",
    },
  ];

  const [state, setState] = useState(employees);
  const handleDelete = (employID) => {
    console.log("deleting" + employID);
    const filteredData = employees.filter(
      (employData) => employData.id != employID
    );
    setState(filteredData);
    const myElement = <Filtered filtered={filteredData} />;
    
  };
  return (
    <div className="text-center ">
      <h1>Employees</h1>
      <table className="table text-white border shadow">
        <th>Id</th>
        <th>Employee's Name</th>
        <th>Profit($)</th>
        <th>Loss($)</th>
        <th>City</th>
        <th>Operation</th>

        {employees.map((employee) => {
          return (
            <tr>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.profit}</td>
              <td>{employee.loss}</td>
              <td>{employee.city}</td>
              <td>
                <button
                  className="btn btn-dark text-white  p-4 fs-4"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <Filtered />
    </div>
  );
};

export default Employees;
