import React from "react";
import { connect } from "react-redux";

const monthNamesArr = [
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

  function formatMonth(date, monthNamesArr) {
    let month = new Date(date);

    let monthIndex = month.getMonth();

    return monthNamesArr[monthIndex];
  }

  let monthObj = selectedEmployees.reduce((accObj, id) => {
    let month = formatMonth(employeesArr[id].dob, monthNamesArr);
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
        {selectedEmployees.length === 0 ? (
          <div className="month_card">{"No selected employees"}</div>
        ) : (
          Object.keys(monthObj)
            .sort((a, b) => monthNamesArr.indexOf(a) - monthNamesArr.indexOf(b))
            .map((month) => {
              return (
                <MonthBlock
                  monthObj={monthObj[month]}
                  month={month}
                  key={monthObj[month][0].id}
                  id={monthObj[month].id}
                />
              );
            })
        )}
        {}
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
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return `${day} ${monthNamesArr[monthIndex]} ${year}`;
  }
  console.log(monthObj);
  return (
    <div className="month_card">
      <div className="month_name">{month}</div>
      <ul>
        {Object.keys(monthObj)
          .sort((a, b) => new Date(monthObj[a].dob) - new Date(monthObj[b].dob))
          .map((item) => {
            return (
              <li key={monthObj[item].id}>{`${monthObj[item].lastName} ${
                monthObj[item].firstName
              } - ${formatDate(
                new Date(monthObj[item].dob),
                monthNamesArr
              )}`}</li>
            );
          })}
      </ul>
    </div>
  );
};
