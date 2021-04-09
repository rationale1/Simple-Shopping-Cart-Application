import Axios from "axios";
const url = `http://localhost:5000/employee`;

const EmployeeApi = {
  // Read
  getEmployees: () => Axios.get(url),

  // Delete
  deleteEmployee: _id => Axios.delete(`${url}/_id`),

  //   Post
  postEmployee: employee => Axios.post(url, employee),

  //   Update
  updateEmployee: (_id, employee) => Axios.put(`${url}/_id`, employee),
};

export default EmployeeApi;
