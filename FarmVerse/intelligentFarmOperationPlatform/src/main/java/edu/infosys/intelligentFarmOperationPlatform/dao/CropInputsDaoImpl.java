package edu.infosys.intelligentFarmOperationPlatform.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.infosys.intelligentFarmOperationPlatform.bean.CropInputs;

@Repository
public class CropInputsDaoImpl implements CropInputsDao {

    @Autowired
    private CropInputsRepository repository;

    @Override
    public void addCropInputs(CropInputs cropInputs) {
        repository.save(cropInputs);
    }

    @Override
    public CropInputs getCropInputsById(String cropId) {
        return repository.findById(cropId).get();
    }

    @Override
    public void deleteCropInputsById(String cropId) {
        repository.deleteById(cropId);
    }

}