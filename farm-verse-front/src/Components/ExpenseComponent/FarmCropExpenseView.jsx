import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCropExpenseReport } from "../../Services/CropInputsService";
import "../../DisplayView.css";

const FarmCropReportView = () => {
  const navigate = useNavigate();
  const { cid } = useParams();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCropExpenseReport(cid)
      .then((response) => {
        setReport(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error loading crop report:", error);
        alert("Unable to load crop expense report.");
        setLoading(false);
      });
  }, [cid]);

  const returnBack = () => {
    navigate("/crop-list");
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h4>Loading Crop Expense Report...</h4>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="text-center mt-5">
        <h4>No report available.</h4>

        <button className="btn btn-warning mt-3" onClick={returnBack}>
          <i className="bi bi-arrow-left-circle me-2"></i>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-success">
          <i className="bi bi-file-earmark-text me-2"></i>
          Farm Crop Expense Report
        </h2>

        <p className="text-muted">
          Detailed crop information and expense calculation
        </p>
      </div>

      {/* Crop Details */}
      <div className="card shadow mb-4">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">
            <i className="bi bi-flower3 me-2"></i>
            Crop Details
          </h4>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-6 mb-3">
              <strong>Crop ID:</strong>
              <div>{report.cropId}</div>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Crop Name:</strong>
              <div>{report.cropName}</div>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Farm ID:</strong>
              <div>{report.farmId}</div>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Farm Name:</strong>
              <div>{report.farmName}</div>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Soil Type:</strong>
              <div>{report.soil}</div>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Crop Area:</strong>
              <div>{report.cropArea} Acres</div>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Sown Month:</strong>
              <div>{report.sownMonthYear}</div>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Harvest Month:</strong>
              <div>{report.harvestMonthYear}</div>
            </div>

            <div className="col-md-6 mb-3">
              <strong>Expected Yield:</strong>
              <div>
                {report.yield !== null && report.yield !== undefined
                  ? `${report.yield} Tons/Acre`
                  : "Not Available"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crop Inputs */}
      <div className="card shadow mb-4">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">
            <i className="bi bi-clipboard-data me-2"></i>
            Crop Inputs
          </h4>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Input</th>
                  <th>Quantity</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Water</td>
                  <td>{report.water} Gallons</td>
                </tr>

                <tr>
                  <td>Fertilizer</td>
                  <td>{report.fertilizer}</td>
                </tr>

                <tr>
                  <td>Pesticides</td>
                  <td>{report.pesticides}</td>
                </tr>

                <tr>
                  <td>Tractor</td>
                  <td>{report.tractorHour} Hours</td>
                </tr>

                <tr>
                  <td>Agro Tools</td>
                  <td>{report.agroTools}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Expense Details */}
      <div className="card shadow mb-4">
        <div className="card-header bg-warning">
          <h4 className="mb-0">
            <i className="bi bi-currency-rupee me-2"></i>
            Expense Details
          </h4>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-center align-middle">
              <thead className="table-warning">
                <tr>
                  <th>Expense</th>
                  <th>Input Quantity</th>
                  <th>Calculated Expense (₹)</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Water</td>
                  <td>{report.water} Gallons</td>
                  <td>₹ {report.waterExp?.toFixed(2)}</td>
                </tr>

                <tr>
                  <td>Fertilizer</td>
                  <td>{report.fertilizer}</td>
                  <td>₹ {report.fertilizerExp?.toFixed(2)}</td>
                </tr>

                <tr>
                  <td>Pesticides</td>
                  <td>{report.pesticides}</td>
                  <td>₹ {report.pesticidesExp?.toFixed(2)}</td>
                </tr>

                <tr>
                  <td>Tractor</td>
                  <td>{report.tractorHour} Hours</td>
                  <td>₹ {report.tractorExp?.toFixed(2)}</td>
                </tr>

                <tr>
                  <td>Agro Tools</td>
                  <td>{report.agroTools}</td>
                  <td>₹ {report.agroToolsExp?.toFixed(2)}</td>
                </tr>
              </tbody>

              <tfoot>
                <tr className="table-success">
                  <th colSpan="2" className="text-end">
                    Total Expense / Acre
                  </th>
                  <th>₹ {report.total?.toFixed(2)}</th>
                </tr>
                <tr className="table-success">
                  <th colSpan="2" className="text-end">
                    Cost / Ton
                  </th>
                  <th>
                    ₹{" "}
                    {report.yield && report.yield > 0
                      ? (report.total / report.yield).toFixed(2)
                      : "Not Available"}
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="text-center mt-4">
        <button
          type="button"
          className="btn btn-warning me-2"
          onClick={returnBack}
        >
          <i className="bi bi-arrow-left-circle me-2"></i>
          Back to Crop List
        </button>
      </div>
    </div>
  );
};

export default FarmCropReportView;
