import axios from "axios";

const BASE_URL = "http://localhost:9696/farmverse";

const EXPENSE_URL = BASE_URL + "/exp";
const EXPENSE_ID_URL = BASE_URL + "/exp-id";

// Generate Expense ID
export const getNewExpenseId = () => {
  return axios.get(EXPENSE_ID_URL);
};

// Add Expense
export const addAgroExpense = (expense) => {
  return axios.post(EXPENSE_URL, expense);
};

// Get All Expenses
export const getAllAgroExpenses = () => {
  return axios.get(EXPENSE_URL);
};

// Get Expense By ID
export const getAgroExpenseById = (id) => {
  return axios.get(`${EXPENSE_URL}/${id}`);
};

// Delete Expense
export const deleteAgroExpense = (id) => {
  return axios.delete(`${EXPENSE_URL}/${id}`);
};
