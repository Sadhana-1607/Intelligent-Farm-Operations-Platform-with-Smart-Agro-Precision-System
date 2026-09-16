package edu.infosys.intelligentFarmOperationPlatform.dao;

import java.util.List;

import edu.infosys.intelligentFarmOperationPlatform.bean.Crop;

public interface CropDao {
	
	public void addCrop(Crop crop);
	public Crop getCropById(String id);
	public List<Crop> getCropsByUsername(String username);
	public void deleteCropById(String id);
	public Integer getMaxCropId();
	
	public List<Crop> getCropsByFarmId(Long farmId);
}
