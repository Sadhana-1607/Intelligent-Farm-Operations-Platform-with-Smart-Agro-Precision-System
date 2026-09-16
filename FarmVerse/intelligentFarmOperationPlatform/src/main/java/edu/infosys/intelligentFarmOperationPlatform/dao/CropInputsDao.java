package edu.infosys.intelligentFarmOperationPlatform.dao;

import edu.infosys.intelligentFarmOperationPlatform.bean.CropInputs;

public interface CropInputsDao {

    public void addCropInputs(CropInputs cropInputs);

    public CropInputs getCropInputsById(String cropId);

    public void deleteCropInputsById(String cropId);

}