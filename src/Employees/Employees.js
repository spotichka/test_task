import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  getEmployees,
  selectEmployee,
  putSelectedEmployee,
  unselectEmployee,
} from "../redux_store/employeesReducer";
import EmployessBirth from "./EmployessBirth";

const Employess = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    props.getEmployees();
    let selectedEmployeesArr = localStorage.getItem("selectedEmploees");
    if (selectedEmployeesArr) {
      dispatch(props.putSelectedEmployee(selectedEmployeesArr.split(",")));
    }
  }, [props.employee]);

  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  function renderEmployee(letter) {
    const letterArr = props.employees.filter(
      (item) => item.lastName[0] === letter
    );
    if (letterArr.length === 0) {
      return <div>{"-----"}</div>;
    } else {
      return letterArr.map((item) => (
        <EmployeeCard
          key={item.id}
          id={item.id}
          lastName={item.lastName}
          firstName={item.firstName}
          selectEmployee={selectEmployee}
          unselectEmployee={unselectEmployee}
          birhday={item.dob}
          checked={
            !!props.selectedEmployees.find((employee) => item.id === employee)
          }
        />
      ));
    }
  }
  return (
    <>
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
      {props.employees.length > 0 && (
        <EmployessBirth
          employees={props.employees}
          selectedEmployees={props.selectedEmployees}
        />
      )}
    </>
  );
};
let mapStateToProps = (state) => ({
  employees: state.employees,
  selectedEmployees: state.selectedEmployees,
});
export default connect(mapStateToProps, {
  getEmployees,
  putSelectedEmployee,
  selectEmployee,
  unselectEmployee,
})(Employess);

const EmployeeCard = ({ id, lastName, firstName, selectEmployee, checked }) => {
  const dispatch = useDispatch();

  let changeChecked = (e) => {
    if (e.target.checked) {
      dispatch(selectEmployee(id));
    } else {
      dispatch(unselectEmployee(id));
    }
  };
  return (
    <div className="employee_card" key={id}>
      <div>
        {lastName} {firstName}
      </div>
      <div>
        <input type="checkbox" checked={!!checked} onChange={changeChecked} />
      </div>
    </div>
  );
};
