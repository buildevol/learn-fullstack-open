import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const createPerson = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(`${baseUrl}/${id}`); // response.data will return empty
};

const updatePerson = (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((response) => response.data);
};

export default {
  getAll,
  createPerson,
  deletePerson,
  updatePerson,
};
