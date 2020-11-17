import React from "react";
import { connect } from "react-redux";

const EmployessBirth = ({ employees, selectedEmployees }) => {
  let employeesArr = [];

  if (employees.length)
    employeesArr = employees.reduce(
      (accObj, id) => ({
        ...accObj,
        [id.id]: id,
      }),
      {}
    );

  function formatMonth(date) {
    let month = new Date(date);
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let monthIndex = month.getMonth();

    return monthNames[monthIndex];
  }

  let monthObj = selectedEmployees.reduce((accObj, id) => {
    let month = formatMonth(employeesArr[id].dob);
    let employee = { ...employeesArr[id] };

    if (!accObj[month]) {
      return { ...accObj, [month]: [employeesArr[id]] };
    } else {
      accObj[month].push(employee);
      return accObj;
    }
  }, {});

  return (
    <div className="employees_birth">
      <h2 className="employees_birth__heading">Employees birhday</h2>
      <div>
        {Object.keys(monthObj).map((month) => {
          return (
            <MonthBlock
              monthObj={monthObj[month]}
              month={month}
              key={monthObj[month][0].id}
              id={monthObj[month].id}
            />
          );
        })}
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  selectedEmployees: state.selectedEmployees,
  employees: state.employees,
});

export default connect(mapStateToProps)(EmployessBirth);

const MonthBlock = ({ monthObj, month }) => {
  function formatDate(date) {
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  }

  return (
    <div className="month_card">
      <div className="month_name">{month}</div>
      <ul>
        {Object.keys(monthObj).map((item) => {
          return (
            <li key={monthObj[item].id}>{`${monthObj[item].lastName} ${
              monthObj[item].firstName
            } - ${formatDate(new Date(monthObj[item].dob))}`}</li>
          );
        })}
      </ul>
    </div>
  );
};
