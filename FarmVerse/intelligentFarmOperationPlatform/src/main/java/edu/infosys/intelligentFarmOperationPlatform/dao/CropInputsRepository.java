package edu.infosys.intelligentFarmOperationPlatform.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.infosys.intelligentFarmOperationPlatform.bean.CropInputs;

@Repository
public interface CropInputsRepository extends JpaRepository<CropInputs, String> {

}