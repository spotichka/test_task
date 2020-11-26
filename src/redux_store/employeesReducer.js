import { employeesAPI } from "../Employees/EmployeesAPI";

const ADD_EMPLOYEES = "ADD_EMPLOYEES";
const PUT_EMPLOYEES = "PUT_EMPLOYEES";
const SELECT_EMPLOYEE = "SELECT_EMPLOYEE";
const UNSELECT_EMPLOYEE = "UNSELECT_EMPLOYEE";

let initialState = {
  employees: [],
  selectedEmployees: [],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEES:
      return { ...state, employees: action.employees };
    case PUT_EMPLOYEES:
      return {
        ...state,
        selectedEmployees: action.selectedEmployees,
      };
    case SELECT_EMPLOYEE:
      localStorage.setItem("selectedEmploees", [
        ...state.selectedEmployees,
        action.id,
      ]);
      return {
        ...state,
        selectedEmployees: [...state.selectedEmployees, action.id],
      };
    case UNSELECT_EMPLOYEE:
      let stateCopy = {
        ...state,
        selectedEmployees: [
          ...state.selectedEmployees.filter((id) => id !== action.id),
        ],
      };

      localStorage.setItem("selectedEmploees", [
        ...stateCopy.selectedEmployees,
      ]);
      return stateCopy;
    default:
      return state;
  }
};

const setEmployees = (employees) => ({
  type: ADD_EMPLOYEES,
  employees,
});

export const putSelectedEmployee = (selectedEmployees) => ({
  type: PUT_EMPLOYEES,
  selectedEmployees,
});

export const selectEmployee = (id) => ({
  type: SELECT_EMPLOYEE,
  id,
});

export const unselectEmployee = (id) => ({
  type: UNSELECT_EMPLOYEE,
  id,
});

export const getEmployees = () => {
  return (dispatch) => {
    employeesAPI.getEmployees().then((response) => {
      dispatch(setEmployees(response));
    });
  };
};

export default employeesReducer;
