package edu.infosys.intelligentFarmOperationPlatform.aiService;

public class YieldRequest {
	
	private String inputs;
	
	public YieldRequest() {}
	
	public YieldRequest(String inputs) {
		this.inputs = inputs;
	}
	
	public String getInputs() {
		return inputs;
	}
	
	public void setInputs(String inputs) {
		this.inputs = inputs;	
	}

}
