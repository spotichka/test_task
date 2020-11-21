import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  getEmployees,
  selectEmployee,
  unselectEmployee,
} from "../redux_store/employeesReducer";

const Employess = (props) => {
  useEffect(() => {
    props.getEmployees();
  }, []);
  let empArr = props.employees;

  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
  ];

  function renderEmployee(letter) {
    const letterArr = empArr.filter((item) => item.lastName[0] === letter);
    if (letterArr.length === 0) {
      return <div>{"-----"}</div>;
    } else {
      return letterArr.map((item) => {
        return (
          <EmployeeCard
            key={item.id}
            id={item.id}
            lastName={item.lastName}
            firstName={item.firstName}
            selectEmployee={selectEmployee}
            unselectEmployee={unselectEmployee}
            birhday={item.dob}
          />
        );
      });
    }
  }

  return (
    <div className="employes">
      <h2 className="employee_heading"> Employees</h2>
      <div className="alphabet">
        {alphabet.reduce((accArr, item) => {
          let letter = item;
          let letterBlock = renderEmployee(letter);
          return [
            ...accArr,
            <div className="letter_block" key={item}>
              <h2>{letter}</h2>
              <div>{letterBlock}</div>
            </div>,
          ];
        }, [])}
      </div>
    </div>
  );
};

let mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, {
  getEmployees,
  selectEmployee,
  unselectEmployee,
})(Employess);

const EmployeeCard = ({ id, lastName, firstName, selectEmployee }) => {
  const dispatch = useDispatch();

  let memory;

  if (localStorage.getItem(id) === "false" || undefined) {
    memory = false;
  } else if (localStorage.getItem(id) === "true") {
    memory = true;
  }

  let [checked, setChecked] = useState(memory || false);

  useEffect(() => {
    if (checked === true) {
      localStorage.setItem(id, "true");
      dispatch(selectEmployee(id));
    } else if (checked === false) {
      localStorage.setItem(id, "false");
      dispatch(unselectEmployee(id));
    }
  }, [checked]);

  let changeChecked = () => {
    setChecked(checked ? false : true);
  };

  return (
    <div className="employee_card" key={id}>
      <div>{`${lastName}   ${firstName}`}</div>
      <div>
        <input type="checkbox" checked={checked} onChange={changeChecked} />
      </div>
    </div>
  );
};
