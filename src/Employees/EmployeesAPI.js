import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://yalantis-react-school-api.yalantis.com/api/task0/users",
});

export const employeesAPI = {
  async getEmployees() {
    let response = await instance.get();
    return response.data;
  },
};
