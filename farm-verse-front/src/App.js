import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./Components/LoginComponent/LoginPage";
import RegisterUser from "./Components/LoginComponent/RegisterUser";
import FarmerMenu from "./Components/LoginComponent/FarmerMenu";

import FarmEntry from "./Components/FarmCropComponent/FarmEntry";
import FarmList from "./Components/FarmCropComponent/FarmList";

import CropEntry from "./Components/FarmCropComponent/CropEntry";
import CropList from "./Components/FarmCropComponent/CropList";
import FarmCropReport from "./Components/FarmCropComponent/FarmCropReport";

import ExpenseEntry from "./Components/ExpenseComponent/ExpenseEntry";
import ExpenseList from "./Components/ExpenseComponent/ExpenseList";

import CropInputView from "./Components/ExpenseComponent/CropInputView";
import FarmCropExpenseView from "./Components/ExpenseComponent/FarmCropExpenseView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterUser />} />

          <Route path="/farmer-menu" element={<FarmerMenu />} />

          <Route path="/farm-add" element={<FarmEntry />} />
          <Route path="/farm-list" element={<FarmList />} />

          <Route path="/crop-add" element={<CropEntry />} />
          <Route path="/crop-list" element={<CropList />} />
          <Route path="/farm-crop/:cid" element={<FarmCropReport />} />

          <Route path="/expense-entry" element={<ExpenseEntry />} />
          <Route path="/expense-list" element={<ExpenseList />} />
          <Route path="/crop-inputs/:cid" element={<CropInputView />} />
          <Route
            path="/farm-crop-expense/:cid"
            element={<FarmCropExpenseView />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
