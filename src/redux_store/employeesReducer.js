import { employeesAPI } from "../Employees/EmployeesAPI";

const ADD_EMPLOYEES = "ADD_EMPLOYEES";
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
    case SELECT_EMPLOYEE:
      return {
        ...state,
        selectedEmployees: [...state.selectedEmployees, action.id],
      };
    case UNSELECT_EMPLOYEE:
      return {
        ...state,
        selectedEmployees: [
          ...state.selectedEmployees.filter((id) => id !== action.id),
        ],
      };
    default:
      return state;
  }
};

const setEmployees = (employees) => ({
  type: ADD_EMPLOYEES,
  employees,
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
