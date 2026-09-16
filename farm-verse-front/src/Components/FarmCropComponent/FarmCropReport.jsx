import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getExpectedYield } from "../../Services/AIService";
import "../../CSS/FarmCropReportCss.css";

const FarmCropReport = () => {
  let navigate = useNavigate();
  let param = useParams();
  const [farmCrop, setFarmCrop] = useState({
    farmId: 0,
    farmName: "",
    soil: "",
    cropId: "",
    cropName: "",
    cropArea: 0.0,
    sownMonthYear: "",
    harvestMonthYear: "",
    yield: 0.0,
    comments: "",
  });

  const setFarmCropData = () => {
    getExpectedYield(param.cid).then((response) => {
      setFarmCrop(response.data);
    });
  };

  useEffect(() => {
    setFarmCropData();
  }, []);

  const returnBack = () => {
    navigate("/crop-list");
  };

  return (
    <div className="frc-page">
      <div className="frc-card">
        <div className="frc-deckle"></div>

        <div className="frc-header">
          <div>
            <p className="frc-eyebrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4.5 8-11.5A8 8 0 0 0 4 10.5C4 17.5 12 22 12 22z" />
                <path d="M12 6v10M8 10c0 2 1.5 3 4 3s4-1 4-3" />
              </svg>
              Field record
            </p>
            <h1 className="frc-title">{farmCrop.cropName}</h1>
            <p className="frc-subtitle">
              Grown at <b>{farmCrop.farmName}</b>
            </p>
          </div>
          <div className="frc-seal">
            <div className="frc-seal-id">{farmCrop.cropId}</div>
            <div className="frc-seal-label">Crop ID</div>
          </div>
        </div>

        <div className="frc-body">
          <div className="frc-row">
            <span className="frc-row-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 20h18" />
                <path d="M6 20V10l6-6 6 6v10" />
                <path d="M10 20v-6h4v6" />
              </svg>
              Soil type
            </span>
            <span className="frc-row-value">{farmCrop.soil}</span>
          </div>

          <div className="frc-row">
            <span className="frc-row-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="1" />
                <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
              </svg>
              Crop area
            </span>
            <span className="frc-row-value">{farmCrop.cropArea} acres</span>
          </div>

          <div className="frc-row">
            <span className="frc-row-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="17" rx="1" />
                <path d="M3 9h18M8 3v3M16 3v3" />
                <path d="M8 14l2 2 4-4" />
              </svg>
              Sown month
            </span>
            <span className="frc-row-value">{farmCrop.sownMonthYear}</span>
          </div>

          <div className="frc-row">
            <span className="frc-row-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="17" rx="1" />
                <path d="M3 9h18M8 3v3M16 3v3M9 14h6" />
              </svg>
              Harvest month
            </span>
            <span className="frc-row-value">{farmCrop.harvestMonthYear}</span>
          </div>
        </div>

        <div className="frc-yield-wrap">
          <div className="frc-yield">
            <span className="frc-yield-label">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 17l6-6 4 4 8-8" />
                <path d="M17 7h4v4" />
              </svg>
              Expected yield / acre
            </span>
            <span className="frc-yield-value">
              {farmCrop.yield}
              <span>tons</span>
            </span>
          </div>
        </div>

        {farmCrop.comments && (
          <div className="frc-notes">
            <p className="frc-notes-label">Field notes</p>
            <p>{farmCrop.comments}</p>
          </div>
        )}

        <div className="frc-footer">
          <button className="frc-return" onClick={returnBack}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Return to fields
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmCropReport;
