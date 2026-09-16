package edu.infosys.intelligentFarmOperationPlatform.bean;

public class CropExpense {
	
	private String cropId;
    private Double waterGallon;
    private Double fertilizer;
    private Double pesticides;
    private Double tractorHour;
    private Double agroTools;
	public CropExpense() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CropExpense(String cropId, Double waterGallon, Double fertilizer, Double pesticides, Double tractorHour,
			Double agroTools) {
		super();
		this.cropId = cropId;
		this.waterGallon = waterGallon;
		this.fertilizer = fertilizer;
		this.pesticides = pesticides;
		this.tractorHour = tractorHour;
		this.agroTools = agroTools;
	}
	
	public CropExpense(String cropId) {
        super();
        this.cropId = cropId;
        this.waterGallon = 0.0;
        this.fertilizer = 0.0;
        this.pesticides = 0.0;
        this.tractorHour = 0.0;
        this.agroTools = 0.0;
    }
	
	public String getCropId() {
		return cropId;
	}
	public void setCropId(String cropId) {
		this.cropId = cropId;
	}
	public Double getWaterGallon() {
		return waterGallon;
	}
	public void setWaterGallon(Double waterGallon) {
		this.waterGallon = waterGallon;
	}
	public Double getFertilizer() {
		return fertilizer;
	}
	public void setFertilizer(Double fertilizer) {
		this.fertilizer = fertilizer;
	}
	public Double getPesticides() {
		return pesticides;
	}
	public void setPesticides(Double pesticides) {
		this.pesticides = pesticides;
	}
	public Double getTractorHour() {
		return tractorHour;
	}
	public void setTractorHour(Double tractorHour) {
		this.tractorHour = tractorHour;
	}
	public Double getAgroTools() {
		return agroTools;
	}
	public void setAgroTools(Double agroTools) {
		this.agroTools = agroTools;
	}

}
